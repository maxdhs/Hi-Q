import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Constants } from 'expo'

export default Translation = (props) => (
        <View style={styles.container}>
            <View style={styles.literalContainer}>
                <Text>Literal Container</Text>
                <Text>Literal Container</Text>
                <Text>Literal Container</Text>
                <Text>Literal Container</Text>
            </View>
            <View style={styles.poeticContainer}>
                <Text>Poetic Container</Text>
                <Text>Poetic Containerd</Text>
                <Text>Poetic Container</Text>
                <Text>Poetic Container</Text>
            </View>
            <View style={styles.nextButtonContainer}>
                <Text>next nextButtonContainer</Text>
            </View>
        </View>
)

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        backgroundColor: 'black',
        justifyContent: 'space-evenly',
        borderRadius: 10,
        borderColor: 'darkgrey',
        borderWidth: StyleSheet.hairlineWidth,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center'
    },
    literalContainer: {
        flex: 3,
        backgroundColor: 'red',
        alignItems: 'center'
    },
    poeticContainer: {
        flex: 3,
        backgroundColor: 'grey',
        alignItems: 'center'
    },
    nextButtonContainer: {
        flex: 1,
        backgroundColor: 'yellow'
    }
})