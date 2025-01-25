import { useState, useLayoutEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    SafeAreaView,
} from "react-native";
import { useLocalSearchParams, router, useNavigation } from "expo-router";
import {
    Heart,
    Instagram,
    Share2,
    Users,
    Eye,
    Calendar,
} from "lucide-react-native";

const TABS = [
    "Stages & Timeline",
    "Details",
    "Contacts",
    "Prizes",
    "FAQs & Discussions",
];

export default function HackathonDetailScreen() {
    const { id } = useLocalSearchParams();
    const [activeTab, setActiveTab] = useState("Stages & Timeline");
    const navigation = useNavigation();
    const hackathon = {
        id: "2",
        title: "S.P.I.T. Hackathon 2025",
        venue: "Sardar Patel Institute of Technology (SPIT)",
        theme: "No Restrictions",
        participants: 43,
        tags: ["W", "G", "J"],
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: `Hackathon: ${hackathon.title}`,
        });
    }, [navigation, hackathon.title]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Image
                        source={{
                            uri: "/placeholder.svg?height=200&width=800",
                        }}
                        style={styles.banner}
                    />
                    <View style={styles.headerContent}>
                        <View>
                            <Text style={styles.title}>
                                Hackathon: Rubix 2025
                            </Text>
                            <Text style={styles.venue}>
                                Thadomal Shahani Engineering College, Mumbai
                            </Text>
                        </View>
                        <View style={styles.headerActions}>
                            <Text style={styles.price}>Free</Text>
                            <View style={styles.actionButtons}>
                                <TouchableOpacity style={styles.iconButton}>
                                    <Heart size={20} color="#64748B" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.iconButton}>
                                    <Instagram size={20} color="#64748B" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.iconButton}>
                                    <Share2 size={20} color="#64748B" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.updatedInfo}>
                    <Calendar size={16} color="#64748B" />
                    <Text style={styles.updatedText}>
                        Updated On: Jan 10, 2025
                    </Text>
                </View>

                <View style={styles.restrictionBadge}>
                    <Text style={styles.restrictionText}>No Restriction</Text>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.tabsContainer}
                >
                    {TABS.map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            style={[
                                styles.tab,
                                activeTab === tab && styles.activeTab,
                            ]}
                            onPress={() => setActiveTab(tab)}
                        >
                            <Text
                                style={[
                                    styles.tabText,
                                    activeTab === tab && styles.activeTabText,
                                ]}
                            >
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <View style={styles.content}>
                    <Text style={styles.contentTitle}>
                        Stages and Timelines
                    </Text>

                    <View style={styles.timeline}>
                        <View style={styles.timelineItem}>
                            <View style={styles.timelineDate}>
                                <Text style={styles.timelineDay}>10</Text>
                                <Text style={styles.timelineMonth}>Jan</Text>
                            </View>
                            <View style={styles.timelineContent}>
                                <Text style={styles.timelineTitle}>
                                    Application
                                </Text>
                                <Text style={styles.timelineTime}>
                                    Starts: 10 Jan 25, 06:31 PM IST
                                </Text>
                                <Text style={styles.timelineTime}>
                                    Ends: 19 Jan 25, 11:05 PM IST
                                </Text>
                            </View>
                        </View>

                        <View style={styles.timelineItem}>
                            <View style={styles.timelineDate}>
                                <Text style={styles.timelineDay}>22</Text>
                                <Text style={styles.timelineMonth}>Jan</Text>
                            </View>
                            <View style={styles.timelineContent}>
                                <Text style={styles.timelineTitle}>
                                    Hackathon
                                </Text>
                                <Text style={styles.timelineTime}>
                                    Begins: 22 Jan 25, 06:33 PM IST
                                </Text>
                                <Text style={styles.timelineTime}>
                                    Ends: 25 Jan 25, 06:33 PM IST
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.sidebar}>
                <View style={styles.sidebarContent}>
                    <View style={styles.sidebarItem}>
                        <Users size={20} color="#64748B" />
                        <View>
                            <Text style={styles.sidebarLabel}>Registered</Text>
                            <View style={styles.registrationCount}>
                                <Text style={styles.sidebarValue}>
                                    1200 / 1500
                                </Text>
                                <Text style={styles.limitedSlots}>
                                    (Limited Slots)
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.sidebarItem}>
                        <Users size={20} color="#64748B" />
                        <View>
                            <Text style={styles.sidebarLabel}>Team Size</Text>
                            <Text style={styles.sidebarValue}>2- 4Members</Text>
                        </View>
                    </View>

                    <View style={styles.sidebarItem}>
                        <Eye size={20} color="#64748B" />
                        <View>
                            <Text style={styles.sidebarLabel}>Impressions</Text>
                            <Text style={styles.sidebarValue}>1820</Text>
                        </View>
                    </View>

                    <View style={styles.sidebarItem}>
                        <Calendar size={20} color="#64748B" />
                        <View>
                            <Text style={styles.sidebarLabel}>
                                Registration Deadline
                            </Text>
                            <Text style={styles.sidebarValue}>
                                19 Jan 25, 11:05 PM
                            </Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => router.push(`/register/${hackathon.id}`)}
                >
                    <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    scrollView: {
        flex: 1,
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: "#E2E8F0",
    },
    banner: {
        width: "100%",
        height: 200,
    },
    headerContent: {
        padding: 16,
        gap: 16,
    },
    title: {
        fontSize: 24,
        fontFamily: "Inter-Bold",
        color: "#0F172A",
    },
    venue: {
        fontSize: 16,
        fontFamily: "Inter-Regular",
        color: "#64748B",
        marginTop: 4,
    },
    headerActions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    price: {
        fontSize: 20,
        fontFamily: "Inter-SemiBold",
        color: "#0F172A",
    },
    actionButtons: {
        flexDirection: "row",
        gap: 16,
    },
    iconButton: {
        padding: 8,
    },
    updatedInfo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        padding: 16,
    },
    updatedText: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: "#64748B",
    },
    restrictionBadge: {
        backgroundColor: "#F8FAFC",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        alignSelf: "flex-start",
        marginHorizontal: 16,
    },
    restrictionText: {
        fontSize: 14,
        fontFamily: "Inter-Medium",
        color: "#0F172A",
    },
    tabsContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#E2E8F0",
        marginTop: 16,
    },
    tab: {
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: "#0F172A",
    },
    tabText: {
        fontSize: 14,
        fontFamily: "Inter-Medium",
        color: "#64748B",
    },
    activeTabText: {
        color: "#0F172A",
    },
    content: {
        padding: 16,
    },
    contentTitle: {
        fontSize: 20,
        fontFamily: "Inter-SemiBold",
        color: "#0F172A",
        marginBottom: 16,
    },
    timeline: {
        gap: 16,
    },
    timelineItem: {
        flexDirection: "row",
        backgroundColor: "#F8FAFC",
        padding: 16,
        borderRadius: 8,
        gap: 16,
    },
    timelineDate: {
        alignItems: "center",
    },
    timelineDay: {
        fontSize: 24,
        fontFamily: "Inter-Bold",
        color: "#0F172A",
    },
    timelineMonth: {
        fontSize: 14,
        fontFamily: "Inter-Medium",
        color: "#64748B",
    },
    timelineContent: {
        flex: 1,
        gap: 4,
    },
    timelineTitle: {
        fontSize: 16,
        fontFamily: "Inter-SemiBold",
        color: "#0F172A",
    },
    timelineTime: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: "#64748B",
    },
    sidebar: {
        borderTopWidth: 1,
        borderTopColor: "#E2E8F0",
        padding: 16,
        backgroundColor: "#FFFFFF",
    },
    sidebarContent: {
        gap: 16,
        marginBottom: 16,
    },
    sidebarItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    sidebarLabel: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: "#64748B",
    },
    registrationCount: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    sidebarValue: {
        fontSize: 14,
        fontFamily: "Inter-Medium",
        color: "#0F172A",
    },
    limitedSlots: {
        fontSize: 14,
        fontFamily: "Inter-Regular",
        color: "#3B82F6",
    },
    registerButton: {
        backgroundColor: "#0F172A",
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: "center",
    },
    registerButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontFamily: "Inter-SemiBold",
    },
});
