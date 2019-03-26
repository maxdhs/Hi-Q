import React from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { Constants } from 'expo';

export default class CompletedScreen extends React.Component {
    render() {
        let haikus = this.props.screenProps.haiku
        let keys = Object.keys(haikus)
        const list = []
        for (let key of keys) {
            list.push(
                <View key={key}>
                    <View style={styles.rowContainer} >
                        <Text style={styles.emoji}>
                            {haikus[key].emoji}
                        </Text>
                        <Text style={styles.title}>
                            {haikus[key].name} {'\n'}
                            <Text style={styles.caption}>
                                Haiku {Number(key) + 1} of {keys.length}
                            </Text>
                        </Text>
                        <Text style={styles.checkbox}>
                            {haikus[key].isCompleted? '✔️': null }️
                        </Text>
                    </View>
                </View>
            )
        }
        return (
            <View style={styles.container}>{list}</View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'darkgrey'
    },
    rowContainer: {
        flexDirection: 'row',
        borderColor: 'lightgrey',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    checkbox: {
        position: 'absolute',
        left: 350,
        fontSize: 30,
        color: 'green'
    },
    emoji: {
        fontSize: 25,
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    title: {
        paddingTop: 5,
        fontSize: 30,
        color: 'white',
    },
    caption: {
        fontSize: 15,
    }
})
