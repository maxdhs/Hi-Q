import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import HaikuLine from './HaikuLine'

export default Haiku = (props) => (
    <View style={styles.container}>
        <HaikuLine {...props} lineNumber={0}/>
        <HaikuLine {...props} lineNumber={1} />
        <HaikuLine {...props} lineNumber={2} />
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