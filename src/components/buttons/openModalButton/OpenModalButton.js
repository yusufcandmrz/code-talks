import { TouchableOpacity, Text, Touchable, View } from "react-native";
import styles from "./style";

const OpenModalButton = (props) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
    )
}

export default OpenModalButton;