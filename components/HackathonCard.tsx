import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link2, Instagram } from "lucide-react-native";

interface HackathonCardProps {
    hackathon: {
        title: string;
        venue: string;
        theme: string;
        participants: number;
        tags: string[];
    };
    onPress: () => void;
}

export default function HackathonCard({
    hackathon,
    onPress,
}: HackathonCardProps) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.header}>
                {/* <Image
                    source={}
                    style={styles.logo}
                /> */}
                <View style={styles.headerContent}>
                    <Text style={styles.title}>{hackathon.title}</Text>
                    <Text style={styles.venue}>{hackathon.venue}</Text>
                </View>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Link2 size={20} color="#64748b" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Instagram size={20} color="#64748b" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footer}>
                <View style={styles.themeContainer}>
                    <Text style={styles.themeLabel}>THEME</Text>
                    <Text style={styles.theme}>{hackathon.theme}</Text>
                </View>
                <View style={styles.tagsContainer}>
                    {hackathon.tags.map((tag, index) => (
                        <View key={index} style={styles.tag}>
                            <Text style={styles.tagText}>{tag}</Text>
                        </View>
                    ))}
                    <Text style={styles.participants}>
                        +{hackathon.participants} participating
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        padding: 16,
        gap: 16,
        borderWidth: 1,
        borderColor: "#e2e8f0",
    },
    header: {
        flexDirection: "row",
        gap: 12,
    },
    logo: {
        width: 48,
        height: 48,
        borderRadius: 8,
    },
    headerContent: {
        flex: 1,
        gap: 4,
    },
    title: {
        fontFamily: "Inter-SemiBold",
        fontSize: 16,
        color: "#0f172a",
    },
    venue: {
        fontFamily: "Inter-Regular",
        fontSize: 14,
        color: "#64748b",
    },
    actions: {
        flexDirection: "row",
        gap: 8,
    },
    iconButton: {
        padding: 4,
    },
    footer: {
        gap: 12,
    },
    themeContainer: {
        gap: 4,
    },
    themeLabel: {
        fontFamily: "Inter-Medium",
        fontSize: 12,
        color: "#64748b",
    },
    theme: {
        fontFamily: "Inter-Regular",
        fontSize: 14,
        color: "#0f172a",
    },
    tagsContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    tag: {
        backgroundColor: "#f1f5f9",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    tagText: {
        fontFamily: "Inter-Medium",
        fontSize: 12,
        color: "#0f172a",
    },
    participants: {
        fontFamily: "Inter-Regular",
        fontSize: 14,
        color: "#64748b",
    },
});
