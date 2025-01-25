import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HackathonDetailScreen({ route, navigation }) {
    const { hackathon } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{hackathon.name}</Text>
            <Text style={styles.date}>{hackathon.date}</Text>
            <Text style={styles.description}>
                Join us for an exciting hackathon focused on cutting-edge
                technology and innovation. Collaborate with talented individuals
                and create amazing projects!
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Register", { hackathon })}
            >
                <Text style={styles.buttonText}>Register for Hackathon</Text>
            </TouchableOpacity>
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
        marginBottom: 10,
    },
    date: {
        fontSize: 18,
        color: "gray",
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#007AFF",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
