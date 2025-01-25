import { Stack } from "expo-router";

export default function AppLayout() {
    return (
        <Stack>
            <Stack.Screen name="discover" />
            <Stack.Screen name="hackathon/[id]" />
            <Stack.Screen name="register/[id]" />
        </Stack>
    );
}
