import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Constants } from 'expo'

export default Translation = (props) => (
    <View style={styles.container}>
        <View style={styles.literalContainer}>
            <Text style={styles.title}>Literal translation:{'\n'}</Text>
            <Text style={styles.text}>{props.haiku[props.selectedHaiku].literalTranslation[0]}</Text>
            <Text style={styles.text}>{props.haiku[props.selectedHaiku].literalTranslation[1]}</Text>
            <Text style={styles.text}>{props.haiku[props.selectedHaiku].literalTranslation[2]}</Text>
        </View>
        <View style={styles.poeticContainer}>
            <Text style={styles.title}>Poetic translation:{'\n'}</Text>
            <Text style={styles.text}>{props.haiku[props.selectedHaiku].poeticTranslation[0]}</Text>
            <Text style={styles.text}>{props.haiku[props.selectedHaiku].poeticTranslation[1]}</Text>
            <Text style={styles.text}>{props.haiku[props.selectedHaiku].poeticTranslation[2]}</Text>
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
        flex: 4,
        alignItems: 'center',
    },
    poeticContainer: {
        flex: 4,
        alignItems: 'center',
        borderColor: 'white',
        borderLeftWidth: StyleSheet.hairlineWidth
    },
    nextButtonContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontStyle: 'italic'
    },
    arrow: {
        color: 'white',
        fontSize: 50,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
})