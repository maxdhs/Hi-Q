import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default ChoiceList = (props) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => props.checkCorrect(0)}>
            <Text style={styles.text}>{props.haiku[props.selectedHaiku].optionsArray[props.selectedLine][0]}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.checkCorrect(1)}>
            <Text style={styles.text}>{props.haiku[props.selectedHaiku].optionsArray[props.selectedLine][1]}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.checkCorrect(2)}>
            <Text style={styles.text}>{props.haiku[props.selectedHaiku].optionsArray[props.selectedLine][2]}</Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: '20%',
        justifyContent: 'space-between'
    },
    text: {
        color: 'white',
        fontSize: 20,
        backgroundColor: 'darkgrey',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        borderColor: '#FFFFFF',
        borderWidth: StyleSheet.hairlineWidth,
    }
})