import React, { useState } from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import styles from "./style";
import CustomButton from "../../button/Button";
import CustomTextInput from "../../textInput/TextInput";

const CreateRoomModal = (props) => {

    const [roomTitle, setRoomTitle] = useState("");

    const handleCreateRoom = () => {
        if (!roomTitle) {
            return
        }
        props.onSend(roomTitle);
        setRoomTitle("");
    }

    return (
        <Modal
            isVisible={props.isVisible}
            onBackdropPress={props.onClose}
        >
            <View style={styles.container}>
                <CustomTextInput placeholder="Room name..." value={roomTitle} onChangeText={setRoomTitle} />
                <CustomButton title="Create Room" onPress={handleCreateRoom} />
            </View>
        </Modal>
    )
}

export default CreateRoomModal;