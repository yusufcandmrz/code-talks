import React, { useState } from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import styles from "./style";
import CustomButton from "../../button/Button";
import CustomTextInput from "../../textInput/TextInput";

const SendMessageModal = (props) => {

    const [messageText, setMessageText] = useState("");

    const handleSendMessage = () => {
        if (!messageText) {
            return
        }
        props.onSend(messageText);
        setMessageText("");
    }

    return (
        <Modal
            isVisible={props.isVisible}
            onBackdropPress={props.onClose}
        >
            <View style={styles.container}>
                <View style={styles.textInputContainer}>
                    <CustomTextInput placeholder="Enter your message..." value={messageText} onChangeText={setMessageText} multiline={true} />
                </View>
                <CustomButton title="Send" onPress={handleSendMessage} />
            </View>
        </Modal>
    )
}

export default SendMessageModal;