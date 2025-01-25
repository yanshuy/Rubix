import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function RegistrationScreen() {
    const { id } = useLocalSearchParams();
    const [teamName, setTeamName] = useState("");
    const [projectIdea, setProjectIdea] = useState("");

    const handleRegister = () => {
        // Add your registration logic here
        Alert.alert(
            "Registration Successful",
            "You have successfully registered for the hackathon!",
            [
                {
                    text: "OK",
                    onPress: () => router.push("/(app)/discover"),
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Team Name</Text>
                    <TextInput
                        style={styles.input}
                        value={teamName}
                        onChangeText={setTeamName}
                        placeholder="Enter your team name"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Project Idea</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        value={projectIdea}
                        onChangeText={setProjectIdea}
                        placeholder="Describe your project idea"
                        multiline
                        numberOfLines={4}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Complete Registration</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8fafc",
    },
    form: {
        flex: 1,
        padding: 16,
        gap: 20,
    },
    inputGroup: {
        gap: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#0f172a",
    },
    input: {
        backgroundColor: "#ffffff",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#e2e8f0",
    },
    textArea: {
        height: 120,
        textAlignVertical: "top",
    },
    button: {
        backgroundColor: "#64748b",
        margin: 16,
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
