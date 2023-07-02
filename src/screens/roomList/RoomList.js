import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import styles from "./style";
import database from "@react-native-firebase/database";
import TopToolbar from "../../components/toolbars/topToolbar";
import OpenModalButton from "../../components/buttons/openModalButton";
import CreateRoomModal from "../../components/modals/createRoomModal/CreateRoomModal";
import RoomCard from "../../components/cards/roomCard";
import parseContentData from "../../utils/parseContentData";

const RoomList = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        database()
            .ref('rooms/')
            .on('value', snapshot => {
                const contentData = snapshot.val();
                if (contentData != null) {
                    const parsedContentData = parseContentData(contentData);
                    setRooms(parsedContentData);
                }
            });
    }, [])

    const handleModalVisible = () => {
        setModalVisible(!modalVisible);
    }

    const handleModalReturn = (title) => {
        handleModalVisible();

        const roomDetails = {
            roomTitle: title,
            date: (new Date()).toISOString(),
        }
        database().ref("rooms/").push(roomDetails);
    }

    const renderItem = ({ item }) => (<RoomCard room={item} />)

    return (
        <View style={styles.container}>
            <TopToolbar />
            <CreateRoomModal isVisible={modalVisible} onClose={handleModalVisible} onSend={handleModalReturn} />
            <FlatList data={rooms} renderItem={renderItem} />
            <OpenModalButton onPress={handleModalVisible} />
        </View>
    )
}

export default RoomList;