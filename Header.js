import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default Header = (props) => (
    <View >
        <Text style={styles.text}>Haiku <Text style={styles.bold}>{props.selectedHaiku + 1}</Text> of <Text style={styles.bold}>330</Text>: <Text style={styles.italic}>{props.haiku[props.selectedHaiku].name}</Text></Text>
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
    },
    bold: {
        fontWeight: '900',
    },
    italic: {
        fontStyle: 'italic'
    }
})