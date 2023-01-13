import React, { useState }from "react";
import { View, Text, StyleSheet} from 'react-native';
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/roundedButton";
import { spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

export const Focus = ({addSubject}) => {
    const [subject, setSubject] = useState(null);

    const onPress = () => {
        addSubject(subject);
    }
    return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} label='What would you like to focus on?' value={subject} onChangeText={setSubject}/>
            <View style={styles.buttonContainer}>
            <RoundedButton title='+' size={50} onPress={onPress}/>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    textInput: {
        flex: 1,
        marginRight: spacing.sm,
    },
    buttonContainer: {
        alignItems: 'center'
    },
    inputContainer: {
        padding: spacing.lg,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        
    },
})