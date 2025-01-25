import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { Search, Calendar, Filter } from "lucide-react-native";
import HackathonCard from "@/components/HackathonCard";

export const HACKATHONS = [
    {
        id: "1",
        title: "Rubix 2025",
        venue: "Thadomal Shahani Engineering College",
        theme: "No Restrictions",
        participants: 48,
        tags: ["I", "R", "A"],
    },
    {
        id: "2",
        title: "S.P.I.T. Hackathon 2025",
        venue: "Sardar Patel Institute of Technology (SPIT)",
        theme: "No Restrictions",
        participants: 43,
        tags: ["W", "G", "J"],
    },
];

export default function DiscoverScreen() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Discover Amazing Hackathons</Text>
                <Text style={styles.subtitle}>
                    Find and participate in the best hackathons from around the
                    world. Connect with fellow developers and build something
                    awesome.
                </Text>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchInputContainer}>
                    <Search size={20} color="#64748b" />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search hackathons..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
                <TouchableOpacity style={styles.searchButton}>
                    <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.filterButton}>
                    <Calendar size={20} color="#0f172a" />
                    <Text style={styles.filterButtonText}>Date</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Filter size={20} color="#0f172a" />
                    <Text style={styles.filterButtonText}>More Filters</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={HACKATHONS}
                renderItem={({ item }) => (
                    <HackathonCard
                        hackathon={item}
                        onPress={() => router.push(`/hackathon/${item.id}`)}
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
        backgroundColor: "#ffffff",
    },
    header: {
        padding: 16,
    },
    title: {
        fontFamily: "Inter-Bold",
        fontSize: 32,
        color: "#0f172a",
        marginBottom: 8,
    },
    subtitle: {
        fontFamily: "Inter-Regular",
        fontSize: 16,
        color: "#64748b",
        lineHeight: 24,
    },
    searchContainer: {
        flexDirection: "row",
        padding: 16,
        gap: 12,
    },
    searchInputContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f8fafc",
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    searchInput: {
        flex: 1,
        height: 44,
        marginLeft: 8,
        fontFamily: "Inter-Regular",
    },
    searchButton: {
        backgroundColor: "#0f172a",
        borderRadius: 8,
        paddingHorizontal: 16,
        justifyContent: "center",
    },
    searchButtonText: {
        color: "#ffffff",
        fontFamily: "Inter-Medium",
    },
    filterContainer: {
        flexDirection: "row",
        paddingHorizontal: 16,
        gap: 12,
        marginBottom: 16,
    },
    filterButton: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#e2e8f0",
        gap: 8,
    },
    filterButtonText: {
        fontFamily: "Inter-Medium",
        color: "#0f172a",
    },
    list: {
        padding: 16,
        gap: 16,
    },
});
