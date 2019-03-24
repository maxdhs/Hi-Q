import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default Header = (props) => (
    <View >
        <Text style={styles.text}>Haiku {props.selectedHaiku + 1} of 330: '{props.haiku[props.selectedHaiku].name}'</Text>
        <Text style={styles.emoji}>{props.haiku[props.selectedHaiku].emoji}</Text>
    </View>
)

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 20,
        backgroundColor: 'tomato',
        padding: 10,
    },
    emoji: {
        color: 'red',
        fontSize: 50,
        backgroundColor: 'tomato',
        textAlign: 'center',
        padding: 10,
        marginBottom: 50
    }
})