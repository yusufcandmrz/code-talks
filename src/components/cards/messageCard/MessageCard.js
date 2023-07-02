import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

const MessageCard = ({ message }) => {

    const currentDate = new Date().toISOString

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>{message.userName}</Text>
                <Text style={styles.text}>{message.date}</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>{message.messageText}</Text>
            </View>
        </View>
    )
}

export default MessageCard;