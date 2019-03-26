import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Constants } from 'expo'

export default HeaderTitle = (props) => (
    <View style={styles.container}>
        <Text
            style={styles.emoji}>
            {props.haiku[props.selectedHaiku].emoji}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    emoji: {
        width: 463,
        fontSize: 100,
        backgroundColor: 'black',
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
        textAlign: 'center',
        borderColor: 'darkgrey',
        borderWidth: StyleSheet.hairlineWidth
    }
})