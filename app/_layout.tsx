import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import LoginScreen from "./(auth)/login";
const fonts = {
    regular: {
        fontFamily: "SpaceMono",
        fontWeight: "400" as "400", // Explicitly specifying the literal type
    },
    medium: {
        fontFamily: "SpaceMono",
        fontWeight: "500" as "500",
    },
    bold: {
        fontFamily: "SpaceMono",
        fontWeight: "700" as "700",
    },
    heavy: {
        fontFamily: "SpaceMono",
        fontWeight: "800" as "800",
    },
};

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <ThemeProvider value={colorScheme === "dark" ? darkTheme : lightTheme}>
            {/* <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="Discover" component={DiscoverScreen} />
                    <Stack.Screen
                        name="HackathonDetail"
                        component={HackathonDetailScreen}
                    />
                    <Stack.Screen name="Register" component={RegisterScreen
                      
                    } />
                </Stack.Navigator>
            </NavigationContainer> */}
            <Stack>
                <Stack.Screen
                    name="(auth)/login"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="(app)/discover"
                    options={{ title: "Discover Hackathons" }}
                />
                <Stack.Screen
                    name="(app)/hackathon/[id]"
                    options={{ title: "Hackathon Details" }}
                />
                <Stack.Screen
                    name="(app)/register/[id]"
                    options={{ title: "Register" }}
                />
            </Stack>
        </ThemeProvider>
    );
}

const darkTheme = {
    dark: true,
    colors: {
        primary: "#64748b",
        background: "#0f172a",
        card: "#1e293b",
        text: "#f8fafc",
        border: "#334155",
        notification: "#64748b",
    },
    fonts,
};

const lightTheme = {
    dark: false,
    colors: {
        primary: "#64748b",
        background: "#f8fafc",
        card: "#ffffff",
        text: "#0f172a",
        border: "#e2e8f0",
        notification: "#64748b",
    },
    fonts,
};
