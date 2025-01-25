import { useEffect } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { AuthProvider, useAuth } from "../contexts/AuthContext";

function RootLayoutNav() {
    const { isLoading, user } = useAuth();

    if (isLoading) {
        return <View />;
    }

    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#0F172A",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontFamily: "Inter-SemiBold",
                },
            }}
        >
            {!user ? (
                <Stack.Screen
                    name="login"
                    options={{
                        title: "Login",
                        headerShown: false,
                    }}
                />
            ) : (
                <>
                    <Stack.Screen
                        name="discover" // Changed route name
                        options={{
                            title: "Discover",
                        }}
                    />
                    <Stack.Screen
                        name="hackathon/[id]"
                        options={({ route }) => ({
                            title: `Hackathon: ${
                                route.params?.title || "Details"
                            }`,
                            headerBackTitle: "Back",
                        })}
                    />
                    <Stack.Screen
                        name="register/[id]"
                        options={({ route }) => ({
                            title: `Register for ${
                                route.params?.title || "Hackathon"
                            }`,
                            headerBackTitle: "Back",
                            presentation: "modal",
                        })}
                    />
                </>
            )}
        </Stack>
    );
}

export default function RootLayout() {
    // const [loaded] = useFonts({
    //     "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    //     "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    //     "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    //     "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    // });

    // useEffect(() => {
    //     if (loaded) {
    //         SplashScreen.hideAsync();
    //     }
    // }, [loaded]);

    // if (!loaded) return null;

    return (
        <AuthProvider>
            <RootLayoutNav />
        </AuthProvider>
    );
}
