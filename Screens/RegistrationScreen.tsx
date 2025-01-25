import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useAuth } from "../../contexts/AuthContext";

const RegistrationScreen = ({ route }) => {
    const { user } = useAuth();
    const { hackathonId } = route.params;
    const [teamName, setTeamName] = useState("");

    const handleRegister = async () => {
        // Implement registration logic
        console.log("Registering:", {
            hackathonId,
            userId: user?.uid,
            teamName,
        });
    };

    return (
        <View style={{ padding: 16 }}>
            <TextInput
                placeholder="Team Name"
                value={teamName}
                onChangeText={setTeamName}
                style={{ borderWidth: 1, padding: 8, marginBottom: 16 }}
            />
            <Button title="Complete Registration" onPress={handleRegister} />
        </View>
    );
};

export default RegistrationScreen;
