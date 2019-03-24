import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Constants } from 'expo';

export default class CompletedScreen extends React.Component {
    render() {
        console.log(this.props.screenProps.haiku)
        return (
            <View style={styles.container}>
                <Text>List coming!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight
    },
    text: {
        fontSize: 30
    }
})
