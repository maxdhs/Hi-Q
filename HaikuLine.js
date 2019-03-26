import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default HaikuLine = (props) => (
        <View style={styles.lineContainer}>
            <Text
                style={props.selectedLine > props.lineNumber ? styles.greenNumber : styles.whiteNumber}>
                {props.selectedHaiku + 1}:{props.lineNumber + 1}
            </Text>
            <Text
                style={props.selectedLine === props.lineNumber ? styles.whiteText : styles.greyText}>
                {props.haikuLines[props.lineNumber]}
            </Text>
        </View>
)

const styles = StyleSheet.create({
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'darkgrey',
        padding: 5,
    },
    greyText: {
        color: 'grey',
        fontSize: 50,
    },
    whiteText: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
    },
    greenText: {
        color: 'green',
        fontSize: 50,
        fontWeight: 'bold',
    },
    greenNumber: {
        color: 'white',
        fontSize: 15,
        backgroundColor: 'green',
        margin: 10,
    },
    whiteNumber: {
        color: 'white',
        fontSize: 15,
        margin: 10,
        borderRadius: 1
    }
})