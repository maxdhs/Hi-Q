import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Constants } from 'expo'

export default HeaderTitle = (props) => (
    <View style={styles.container}>
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
    </View>
)

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        top: -20
    },
    text: {
        fontSize: 17,
        backgroundColor: '#FFFFFF',
        paddingTop: 40,
        textAlign: 'center',
        borderColor: 'darkgrey',
        borderBottomWidth: StyleSheet.hairlineWidth,
        fontWeight: '100'
    },
    bold: {
     
    },
    italic: {
        fontSize: 40,
        fontWeight: 'bold'
    }
})