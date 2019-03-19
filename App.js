import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Audio } from 'expo';

export default class App extends React.Component {
  
  state = {
    soundSource: require('./assets/sound.mp3')
  }

  handlePress = () => {
    Audio.Sound.createAsync(this.state.soundSource, { shouldPlay: true })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={styles.text}>Play Haiku</Text>
        </TouchableOpacity>
        <View >
          <Text style={styles.text}>App Text</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30
  }
});
