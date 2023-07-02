import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import styles from "./style";
import TopToolbar from "../../components/toolbars/topToolbar/TopToolbar";
import OpenModalButton from "../../components/buttons/openModalButton";
import SendMessageModal from "../../components/modals/sendMessageModal/SendMessageModal";
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";
import parseContentData from "../../utils/parseContentData";
import MessageCard from "../../components/cards/messageCard/MessageCard";

const Room = ({ route }) => {

    const { roomId } = route.params;
    const [messages, setMessages] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        database()
            .ref('rooms/' + roomId + '/messages/')
            .on('value', snapshot => {
                const contentData = snapshot.val();
                if (contentData != null) {
                    const parsedContentData = parseContentData(contentData);
                    setMessages(parsedContentData);
                }
            });
    }, [])

    const handleModalVisible = () => {
        setModalVisible(!modalVisible);
    }

    const handleModalReturn = (messageText) => {
        handleModalVisible();
        const messageDetails = {
            userName: auth().currentUser.email.split('@')[0],
            messageText: messageText,
            date: (new Date()).toISOString(),
        }
        database().ref("/rooms/" + roomId + "/messages").push(messageDetails);
    }

    const renderItem = ({ item }) => (<MessageCard message={item} />)

    return (

        <View style={styles.container}>
            <TopToolbar />
            <SendMessageModal isVisible={modalVisible} onClose={handleModalVisible} onSend={handleModalReturn} />
            <FlatList data={messages} renderItem={renderItem} />
            <OpenModalButton onPress={setModalVisible} />
        </View>
    )
}


export default Room;