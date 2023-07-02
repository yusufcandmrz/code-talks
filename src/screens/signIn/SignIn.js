import React, { useState } from "react";
import { View, Alert, Text } from "react-native";
import styles from "./style";
import auth from "@react-native-firebase/auth";
import CustomTextInput from "../../components/textInput";
import CustomButton from "../../components/button";

const SignIn = ({ navigation }) => {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleSignUp = () => {
        navigation.navigate("SignUp")
    }

    const handleSignIn = () => {
        if (userEmail == "" || userPassword == "") {
            Alert.alert("Incomplete Input", "Please fill in all the inputs");
        }
        else {
            auth().signInWithEmailAndPassword(userEmail, userPassword)
                .then(() => {
                    navigation.navigate('Main')
                    setUserEmail("")
                    setUserPassword("")
                })
                .catch((error) => { Alert.alert(error) })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Code Talsk</Text>
            </View>
            <View style={styles.processContainer}>
                <CustomTextInput placeholder="Enter your email" value={userEmail} onChangeText={setUserEmail} />
                <CustomTextInput placeholder="Enter your password" value={userPassword} onChangeText={setUserPassword} />
                <CustomButton title="Sign In" onPress={handleSignIn} />
                <CustomButton title="Sign Up" onPress={handleSignUp} />
            </View>
        </View>
    )
}

export default SignIn;