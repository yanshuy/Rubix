import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
    id: string;
    email: string;
    name: string;
};

type AuthContextType = {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadUser();
    }, []);

    async function loadUser() {
        try {
            const savedUser = await AsyncStorage.getItem("@user");
            if (savedUser) {
                setUser(JSON.parse(savedUser));
            }
        } catch (error) {
            console.error("Error loading user:", error);
        } finally {
            setIsLoading(false);
        }
    }

    async function login(email: string, password: string) {
        try {
            // In a real app, make API call here
            const user = {
                id: "1",
                email,
                name: email.split("@")[0],
            };
            await AsyncStorage.setItem("@user", JSON.stringify(user));
            setUser(user);
        } catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
    }

    async function logout() {
        try {
            await AsyncStorage.removeItem("@user");
            setUser(null);
        } catch (error) {
            console.error("Error logging out:", error);
            throw error;
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
