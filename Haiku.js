import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import HaikuLine from './HaikuLine'

export default Haiku = (props) => (
    <View style={styles.container}>
        <HaikuLine selectedLine={props.selectedLine} lineNumber={0} haikuLines={props.haikuLines} selectedHaiku={props.selectedHaiku} />
        <HaikuLine selectedLine={props.selectedLine} lineNumber={1} haikuLines={props.haikuLines} selectedHaiku={props.selectedHaiku} />
        <HaikuLine selectedLine={props.selectedLine} lineNumber={2} haikuLines={props.haikuLines} selectedHaiku={props.selectedHaiku} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: '95%',
        borderColor: '#FFFFFF',
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'darkgrey',
        borderRadius: 10
    }
})