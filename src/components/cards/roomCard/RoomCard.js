import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const RoomCard = ({ room }) => {

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate("Room", { roomId: room.id });
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Text style={styles.title}>{room.roomTitle}</Text>
        </TouchableOpacity>
    )
}

export default RoomCard;