import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
    Alert,
    ActivityIndicator,
} from "react-native";
import { router } from "expo-router";
import { useAuth } from "../contexts/AuthContext";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();

    async function handleLogin() {
        try {
            if (!email || !password) {
                Alert.alert("Error", "Please fill in all fields");
                return;
            }
            setIsLoading(true);
            await login(email, password);
            router.replace("/discover");
        } catch (error) {
            Alert.alert("Error", "Failed to login. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.content}>
                <View style={styles.form}>
                    <Text style={styles.title}>Login</Text>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoComplete="email"
                            editable={!isLoading}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            editable={!isLoading}
                        />
                    </View>

                    <TouchableOpacity
                        style={[
                            styles.button,
                            isLoading && styles.buttonDisabled,
                        ]}
                        onPress={handleLogin}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <ActivityIndicator color="#FFFFFF" />
                        ) : (
                            <Text style={styles.buttonText}>Login</Text>
                        )}
                    </TouchableOpacity>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Not a member? </Text>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
        maxWidth: 400,
        width: "100%",
        alignSelf: "center",
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: "center",
        marginBottom: 32,
    },
    form: {
        gap: 24,
    },
    title: {
        fontSize: 32,
        fontFamily: "Inter-Bold",
        color: "#0F172A",
        textAlign: "center",
    },
    inputGroup: {
        gap: 8,
    },
    label: {
        fontSize: 14,
        fontFamily: "Inter-Medium",
        color: "#0F172A",
    },
    input: {
        backgroundColor: "#F8FAFC",
        borderWidth: 1,
        borderColor: "#E2E8F0",
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: "#0F172A",
    },
    button: {
        backgroundColor: "#0F172A",
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonDisabled: {
        opacity: 0.7,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontFamily: "Inter-SemiBold",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    footerText: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: "#64748B",
    },
    footerLink: {
        fontSize: 14,
        fontFamily: "Inter-SemiBold",
        color: "#0F172A",
    },
});
