import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

const CustomButton = (props) => {

    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;