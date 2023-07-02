import { TextInput } from "react-native";
import styles from "./style";

const CustomTextInput = (props) => {

    return (
        <TextInput
            style={styles.container}
            placeholder={props.placeholder}
            placeholderTextColor="orange"
            value={props.value}
            onChangeText={props.onChangeText}
            multiline={props.multiline}
        />
    )
}

export default CustomTextInput;