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
            <Text style={styles.checkEmoji}>{props.selectedLine > props.lineNumber || props.isShowingTranslation ? '✔️' : '     '}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "1%",
    },
    greyText: {
        color: 'grey',
        fontSize: 30,

    },
    whiteText: {
        color: 'white',
        fontSize: 30,

    },
    lineNumber: {
        fontSize: 10,
        padding: '.5%',
        marginRight: '5%',
        backgroundColor: 'black',
        color: 'white'
    },
    checkEmoji: {
        fontSize: 30,
        color: 'green',
        marginLeft: '5%'

    }
})