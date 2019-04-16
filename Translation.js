import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default Translation = (props) => (
    <View style={styles.container}>
        <View style={styles.literalPoeticContainer}>
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
                        <Text adjustsFontSizeToFit style={styles.text}>{props.haiku[props.selectedHaiku].literalTranslation[0]}</Text>
                        <Text adjustsFontSizeToFit style={styles.text}>{props.haiku[props.selectedHaiku].literalTranslation[1]}</Text>
                        <Text adjustsFontSizeToFit style={styles.text}>{props.haiku[props.selectedHaiku].literalTranslation[2]}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.poeticContainer}>
                <Text style={styles.title}>Poetic translation:{'\n'}</Text>
                <Text style={[styles.text, { fontStyle: 'italic' }]}>"{'...'}{props.haiku[props.selectedHaiku].poeticTranslation}{'...'}"</Text>
            </View>
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
        height: '25%',
        borderColor: 'darkgrey',
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'space-evenly'
    },
    literalPoeticContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    literalContainer: {
        width: '50%',
        paddingHorizontal: '2%',
    },
    poeticContainer: {
        width: '50%',
        paddingHorizontal: '2%'
    },
    nextButtonContainer: {
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 12
    },
    arrow: {
        fontSize: 40,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
    },
    bodyContainer: {
        flexDirection: 'row',
    },
    literalTextContainer: {

    },
    textNumber: {
        paddingRight: '3%',
        fontSize: 12,
        color: 'lightgrey'
    }
})