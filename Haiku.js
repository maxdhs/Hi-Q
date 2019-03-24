import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default Haiku = (props) => (
    <View style={styles.container}>
        <View style={styles.lineContainer}>
            <Text
                style={props.selectedLine > 0 ? styles.greenNumber : styles.whiteNumber}>
                {props.selectedHaiku + 1}:1
            </Text>
            <Text
                style={props.selectedLine === 0 ? styles.whiteText : styles.greyText}>
                {props.haikuLines[0]}
            </Text>
        </View>
        <View style={styles.lineContainer}>
            <Text
                style={props.selectedLine > 1 ? styles.greenNumber : styles.whiteNumber}>
                {props.selectedHaiku + 1}:2
            </Text>
            <Text
                style={props.selectedLine === 1 ? styles.whiteText : styles.greyText}>
                {props.haikuLines[1]}
            </Text>
        </View>
        <View style={styles.lineContainer}>
            <Text
                style={props.selectedLine > 2 ? styles.greenNumber : styles.whiteNumber}>
                {props.selectedHaiku + 1}:3
            </Text>
            <Text
                style={props.selectedLine === 2 ? styles.whiteText : styles.greyText}>
                {props.haikuLines[2]}
            </Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    lineContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        alignItems: 'center',
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
    blackCheck: {
        color: 'black',
        fontSize: 50,
    },
    greenNumber: {
        color: 'white',
        fontSize: 15,
        backgroundColor: 'green',
        margin: 10,
        borderRadius: 1
    },
    whiteNumber: {
        color: 'white',
        fontSize: 15,
        backgroundColor: 'grey',
        margin: 10,
        borderRadius: 1
    }
})