import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Constants } from 'expo'

export default CompletedTitle = (props) => (
    <Text
        style={styles.text}>
        All Haikus
    </Text>
)

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        fontSize: 30,
        fontWeight: 'bold',
        padding: 20
    },

})