import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");

export default styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 15,
        height: deviceSize.height / 5,
    },
})