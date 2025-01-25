import { View, FlatList, StyleSheet } from "react-native";
import { router } from "expo-router";
import HackathonCard from "../../components/HackathonCard";

const HACKATHONS = [
    {
        id: "1",
        title: "AI Innovation Challenge",
        date: "March 15-17, 2024",
        description: "Create the next breakthrough in artificial intelligence",
    },
    {
        id: "2",
        title: "Web3 Hackathon",
        date: "April 1-3, 2024",
        description: "Build the future of decentralized applications",
    },
];

export default function DiscoverScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={HACKATHONS}
                renderItem={({ item }) => (
                    <HackathonCard
                        hackathon={item}
                        onPress={() =>
                            router.push(`/(app)/hackathon/${item.id}`)
                        }
                    />
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8fafc",
    },
    list: {
        padding: 16,
        gap: 16,
    },
});
