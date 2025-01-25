import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Alert,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useAuth } from "../../../contexts/AuthContext";
// import { registerForHackathon } from "../../services/api";

export default function RegistrationScreen() {
    const { id } = useLocalSearchParams();
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: user?.email || "",
        fullName: user?.name || "",
        mobileNo: "",
    });

    async function handleRegister() {
        console.log("uploading details");
        const data = {
            email: formData.email,
            fullName: formData.fullName,
            mobileNo: formData.mobileNo,
        };
        if (!data.email || !data.fullName || !data.mobileNo) {
            return Alert.alert("Error", "Please fill in all fields");
        }
        let res = await fetch(
            `https://natural-ape-severely.ngrok-free.app/api/core/hackathons/17/register/`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM3OTU0NzIzLCJpYXQiOjE3Mzc3ODE5MjMsImp0aSI6ImE5OWNmZGY4N2NjYTQwODE4MGJmOTg5Y2JhMTFkNDVlIiwidXNlcl9pZCI6M30.fJFLdO0sX9cSHvzvRJy-bc3zTjFjq78AYR40Mlr6vnM`,
                    "ngrok-skip-browser-warning": "true",
                },
                body: JSON.stringify(data),
            }
        );

        if (res.ok) {
            Alert.alert(
                "Success",
                "You have successfully registered for the hackathon!",
                [
                    {
                        text: "OK",
                        onPress: () => router.push("/discover"),
                    },
                ]
            );
        }

        return Alert.alert("Error", "Failed to register. Please try again.");
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.content}>
                    <Text style={styles.title}>Registration Details</Text>
                    <Text style={styles.subtitle}>
                        Please fill in your details to complete the registration
                    </Text>

                    <View style={styles.form}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.input}
                                value={formData.email}
                                onChangeText={(text) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        email: text,
                                    }))
                                }
                                placeholder="Enter your email"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                editable={!isLoading}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Full Name</Text>
                            <TextInput
                                style={styles.input}
                                value={formData.fullName}
                                onChangeText={(text) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        fullName: text,
                                    }))
                                }
                                placeholder="Enter your full name"
                                editable={!isLoading}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Mobile Number</Text>
                            <TextInput
                                style={styles.input}
                                value={formData.mobileNo}
                                onChangeText={(text) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        mobileNo: text,
                                    }))
                                }
                                placeholder="Enter your mobile number"
                                keyboardType="phone-pad"
                                editable={!isLoading}
                            />
                        </View>
                    </View>

                    <View style={styles.footer}>
                        <TouchableOpacity
                            style={[
                                styles.button,
                                isLoading && styles.buttonDisabled,
                            ]}
                            onPress={() => handleRegister()}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <ActivityIndicator color="#FFFFFF" />
                            ) : (
                                <Text style={styles.buttonText}>
                                    Complete Registration
                                </Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    scrollContent: {
        flexGrow: 1,
    },
    content: {
        flex: 1,
        padding: 16,
        maxWidth: 600,
        width: "100%",
        alignSelf: "center",
    },
    title: {
        fontSize: 24,
        fontFamily: "Inter-Bold",
        color: "#0F172A",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: "#64748B",
        marginBottom: 32,
    },
    form: {
        gap: 24,
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
    footer: {
        marginTop: 32,
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
});
