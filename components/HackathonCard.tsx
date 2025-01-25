import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface HackathonCardProps {
    hackathon: {
        title: string;
        date: string;
        description: string;
    };
    onPress: () => void;
}

export default function HackathonCard({
    hackathon,
    onPress,
}: HackathonCardProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Text style={styles.title}>{hackathon.title}</Text>
                <Text style={styles.date}>{hackathon.date}</Text>
                <Text style={styles.description}>{hackathon.description}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        padding: 16,
        gap: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#0f172a",
    },
    date: {
        fontSize: 14,
        color: "#64748b",
    },
    description: {
        fontSize: 14,
        color: "#334155",
    },
});
