import React, { useState } from "react";
import { View, Alert, Text } from "react-native";
import auth from "@react-native-firebase/auth"
import database from "@react-native-firebase/database";
import styles from "./style";
import CustomTextInput from "../../components/textInput";
import CustomButton from "../../components/button";

const SignUp = ({ navigation }) => {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPasswordAgain, setUserPasswordAgain] = useState("");

    const handleBack = () => {
        navigation.goBack();
    }

    const handleCreateAccount = () => {
        if (userEmail == "" || userPassword == "" || userPasswordAgain == "") {
            Alert.alert("Incomplete Input", "Please fill in all the inputs");
        }
        else if (userPassword != userPasswordAgain) {
            Alert.alert("Password Mismatch", "The entered passwords do not match");
        }
        else {
            auth().createUserWithEmailAndPassword(userEmail, userPassword)
                .then(() => {
                    Alert.alert("Success", "You account has been created");
                    database()
                        .ref('/users/' + auth().currentUser.uid + "/")
                        .set({
                            userName: userEmail.split('@')[0],
                            userPassword: userPassword,
                        })
                    setUserEmail("");
                    setUserPassword("");
                    setUserPasswordAgain("");
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        Alert.alert("Failure", "That email address is already in use");
                    }
                    if (error.code === 'auth/invalid-email') {
                        Alert.alert("Failure", "That email address is invalid");
                    }
                    if (error.code === 'auth/weak-password') {
                        Alert.alert("Failure", "The given password is invalid");
                    }
                    console.log(error)
                });
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Code Talks</Text>
            </View>
            <View style={styles.processContainer}>
                <CustomTextInput placeholder="Enter your email" value={userEmail} onChangeText={setUserEmail} />
                <CustomTextInput placeholder="Enter your password" value={userPassword} onChangeText={setUserPassword} />
                <CustomTextInput placeholder="Enter your password again" value={userPasswordAgain} onChangeText={setUserPasswordAgain} />
                <CustomButton title="Create Account" onPress={handleCreateAccount} />
                <CustomButton title="Back" onPress={handleBack} />
            </View>
        </View>
    )
}

export default SignUp;