import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default HeaderEmoji = (props) => (
    <View style={styles.container}>
        <TouchableOpacity  onPress={props.handlePress}>
            <Text
                style={styles.emoji}>
                {props.haiku[props.selectedHaiku].emoji}
            </Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: '95%',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
        borderColor: 'darkgrey',
        borderWidth: StyleSheet.hairlineWidth,
    },
    emoji: {
        fontSize: 100,
    }
})