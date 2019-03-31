import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default HeaderEmoji = (props) => (
    <View style={styles.container}>
        <TouchableOpacity  onPress={() => props.handlePress(props.selectedLine)}>
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
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
        borderColor: 'darkgrey',
        borderWidth: StyleSheet.hairlineWidth,
    },
    emoji: {
        fontSize: 100,
    }
})