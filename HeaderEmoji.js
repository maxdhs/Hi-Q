import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Constants } from 'expo'

export default HeaderTitle = (props) => (
        <Text
            style={styles.emoji}>
            {props.haiku[props.selectedHaiku].emoji}
        </Text>
)

const styles = StyleSheet.create({
    emoji: {
        width: 520,
        textAlign: 'center',
        fontSize: 100,
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
        borderColor: 'darkgrey',
        borderWidth: StyleSheet.hairlineWidth,
    }
})