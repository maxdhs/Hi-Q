import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Constants } from 'expo';

export default class CompletedScreen extends React.Component {
    render() {
        let haikus = this.props.screenProps.haiku
        let keys = Object.keys(haikus)
        const list = []
        for( let key of keys) {
            list.push(<Text key={key}>{haikus[key].name}: {haikus[key].isCompleted? 'done' : 'incomplete'}</Text>)
        }
        return (
            <View style={styles.container}>
                {list}
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
