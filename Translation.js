import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default Translation = (props) => (
    <View style={styles.container}>
        <View style={styles.literalContainer}>
            <Text style={styles.title}>Literal translation:{'\n'}</Text>
            <View style={styles.bodyContainer}>
                <View
                    style={styles.literalTextContainer}>
                    <Text style={styles.textNumber}>{props.selectedHaiku + 1}:1</Text>
                    <Text style={styles.textNumber}>{props.selectedHaiku + 1}:2</Text>
                    <Text style={styles.textNumber}>{props.selectedHaiku + 1}:3</Text>
                </View>
                <View style={styles.literalTextContainer}>
                    <Text style={styles.text}>{props.haiku[props.selectedHaiku].literalTranslation[0]}</Text>
                    <Text style={styles.text}>{props.haiku[props.selectedHaiku].literalTranslation[1]}</Text>
                    <Text style={styles.text}>{props.haiku[props.selectedHaiku].literalTranslation[2]}</Text>
                </View>
            </View>
        </View>
        <View style={styles.poeticContainer}>
            <Text style={styles.title}>Poetic translation:{'\n'}</Text>
            <Text style={[styles.text, { fontStyle: 'italic' }]}>"{'...'}{props.haiku[props.selectedHaiku].poeticTranslation}{'...'}"</Text>
        </View>
        <View style={styles.nextButtonContainer}>
            <TouchableOpacity onPress={props.nextHaikuButtonHandler}>
                <Text style={styles.arrow}>➡️</Text>
            </TouchableOpacity>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: '20%',
        borderColor: 'darkgrey',
        borderWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    literalContainer: {
        flex: 5,
        height: '90%'
    },
    poeticContainer: {
        flex: 4,
        height: '90%'
    },
    nextButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    text: {
        color: 'white',
        fontSize: 15,
        marginBottom: 5
    },
    arrow: {
        color: 'white',
        fontSize: 40,
        backgroundColor: 'darkgrey',
        padding: 5,
        borderRadius: 10
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    bodyContainer: {
        flexDirection: 'row',
    },
    literalTextContainer: {
        marginLeft: 10,
    },
    textNumber: {
        backgroundColor: 'lightgrey',
        fontSize: 12,
        marginVertical: 4
    }
})