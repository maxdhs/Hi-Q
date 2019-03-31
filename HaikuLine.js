import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default HaikuLine = (props) => {
    return (
    <View style={styles.lineContainer}>
        <Text
            style={styles.lineNumber}>
            {props.selectedHaiku + 1}:{props.lineNumber + 1}
        </Text>
        <TouchableOpacity onPress={() => props.handlePress(props.lineNumber)}>
            <Text
                style={props.selectedLine === props.lineNumber || props.isShowingTranslation ? styles.whiteText : styles.greyText}>
                {props.haikuLines[props.lineNumber]}
            </Text>
        </TouchableOpacity>
        <Text style={styles.checkEmoji}>{props.selectedLine > props.lineNumber || props.isShowingTranslation ? '✔️' : null}</Text>
    </View>
)
}

const styles = StyleSheet.create({
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    greyText: {
        color: 'grey',
        fontSize: 50,
    },
    whiteText: {
        color: 'white',
        fontSize: 50,
    },
    lineNumber: {
        fontSize: 13,
        margin: 10,
        backgroundColor: 'black',
        color: 'white'
    },
    checkEmoji: {
        fontSize: 50,
        color: 'green',
        paddingLeft: 20
    }
})