import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function HackathonDetailsScreen() {
    const { id } = useLocalSearchParams();

    // In a real app, fetch hackathon details using the id
    const hackathon = {
        id,
        title: "AI Innovation Challenge",
        date: "March 15-17, 2024",
        description: "Create the next breakthrough in artificial intelligence",
        prizes: "$10,000 in prizes",
        requirements: "Teams of 2-4 people",
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{hackathon.title}</Text>
                <Text style={styles.date}>{hackathon.date}</Text>
                <Text style={styles.description}>{hackathon.description}</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Prizes</Text>
                    <Text style={styles.sectionText}>{hackathon.prizes}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Requirements</Text>
                    <Text style={styles.sectionText}>
                        {hackathon.requirements}
                    </Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push(`/(app)/register/${id}`)}
            >
                <Text style={styles.buttonText}>Register Now</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8fafc",
    },
    content: {
        flex: 1,
        padding: 16,
        gap: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#0f172a",
    },
    date: {
        fontSize: 16,
        color: "#64748b",
    },
    description: {
        fontSize: 16,
        color: "#334155",
        lineHeight: 24,
    },
    section: {
        gap: 8,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#0f172a",
    },
    sectionText: {
        fontSize: 16,
        color: "#334155",
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
