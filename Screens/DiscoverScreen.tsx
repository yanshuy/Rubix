import React from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

const hackathons = [
    { id: "1", name: "AI Innovation Hackathon", date: "June 15-17, 2023" },
    { id: "2", name: "Blockchain Revolution", date: "July 1-3, 2023" },
    { id: "3", name: "Green Tech Challenge", date: "July 22-24, 2023" },
];

export default function DiscoverScreen({ navigation }) {
    const renderHackathonItem = ({ item }) => (
        <TouchableOpacity
            style={styles.hackathonItem}
            onPress={() =>
                navigation.navigate("HackathonDetail", { hackathon: item })
            }
        >
            <Text style={styles.hackathonName}>{item.name}</Text>
            <Text style={styles.hackathonDate}>{item.date}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Discover Hackathons</Text>
            <FlatList
                data={hackathons}
                renderItem={renderHackathonItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    hackathonItem: {
        backgroundColor: "#f0f0f0",
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
    },
    hackathonName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    hackathonDate: {
        fontSize: 14,
        color: "gray",
    },
});
