import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default CompletedTitle = () => (
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
        padding: "4%"
    },

})