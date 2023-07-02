import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native"
import styles from "./style";

const TopToolbar = () => {

    const navigation = useNavigation();

    const handleMain = () => {
        navigation.navigate("Main");
    }

    const handleSignOut = () => {
        navigation.navigate("SignIn");
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleMain}>
                <Text style={styles.buttonText}>Main</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSignOut}>
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TopToolbar;