import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Constants } from 'expo'

export default HeaderTitle = (props) => (

    <Text
        style={styles.text}>
        Haiku{" "}
        <Text style={styles.bold}>
            {props.selectedHaiku + 1}
        </Text>
        {" "}of
            <Text
            style={styles.bold}>
            {" "}330
            </Text>
        : {"\n"}
        <Text
            style={styles.italic}>
            {props.haiku[props.selectedHaiku].name}
        </Text>
    </Text>

)

const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        textAlign: 'center',
        borderColor: 'darkgrey',
        borderBottomWidth: StyleSheet.hairlineWidth,
        fontWeight: '100',
        alignSelf: 'stretch',
    },

    italic: {
        fontSize: 40,
        fontWeight: 'bold'
    }
})