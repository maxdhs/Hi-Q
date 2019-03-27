import React from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { Constants } from 'expo';
import CompletedTitle from './CompletedTitle'

export default class CompletedScreen extends React.Component {
    render() {
        let haikus = this.props.screenProps.haiku
        let keys = Object.keys(haikus)
        const list = []
        for (let key of keys) {
            list.push(
                <View key={key}>
                    <View style={styles.rowContainer} >
                        <View style={styles.subContainer}>
                            <Text style={styles.emoji}>
                                {haikus[key].emoji}
                            </Text>
                            <Text style={styles.title}>
                                {haikus[key].name} {'\n'}
                                <Text style={styles.caption}>
                                    Haiku {Number(key) + 1} of {keys.length}
                                </Text>
                            </Text>
                        </View>
                        <Text style={styles.checkbox}>
                            {haikus[key].isCompleted ? '✅' : null}️
                        </Text>
                    </View>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <CompletedTitle />
                {list}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    subContainer: {
        flexDirection: 'row'
    },
    rowContainer: {
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'space-between'
    },
    checkbox: {
        fontSize: 50,
    },
    emoji: {
        fontSize: 30,
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    title: {
        paddingTop: 5,
        fontSize: 30,
    },
    caption: {
        fontSize: 20,
        fontFamily: 'sans-serif-thin'
    }
})
