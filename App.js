import React from 'react'
import { Audio } from 'expo';
import TabNavigator from './Navigation'

export default class App extends React.Component {
  state = {
    haiku: {
      0: {
        optionsArray: {
          0: ['cat is drinking', 'cat is eating', 'cat is sleeping', 2],
          1: ['catng', 'cat is ing', 'cat l4eeping', 2],
          2: ['cat is king', 'c2at is eatng', 'ca3t leeping', 0]
        },
        isCompleted: false,
        soundsArray: [require('./assets/sound.mp3'), require('./assets/sound.mp3'), require('./assets/sound.mp3')],
        haikuLines: {
          0: '草の戸も',
          1: '住替る代ぞ',
          2: 'ひなの家'
        },
        emoji: '🌙',
        name: 'dream1'
      },
      1: {
        optionsArray: {
          0: ['cat isnking', 'cat is eng', 'cat is ping', 0],
          1: ['catdrinking', 'cat is 2ting', 'catis sl4eeping', 2],
          2: ['cat is dking', 'c2at is eting', 'c3t is sleeping', 0]
        },
        isCompleted: false,
        soundsArray: [require('./assets/sound.mp3'), require('./assets/sound.mp3'), require('./assets/sound.mp3')],
        haikuLines: {
          0: '草の戸も',
          1: '住替る代ぞ',
          2: 'ひなの家'
        },
        emoji: '🌙',
        name: 'dream2'
      },
    },
    selectedHaiku: 0,
    selectedLine: 0
  }

  handlePress = () => {
    Audio.Sound.createAsync(this.state.haiku[this.state.selectedHaiku].soundsArray[this.state.selectedLine], { shouldPlay: true })
  }

  checkCorrect = (userChoice) => {
    if (userChoice === this.state.haiku[this.state.selectedHaiku].optionsArray[this.state.selectedLine][3]) {
      if (this.state.selectedLine === 2) {
        this.toggleComplete()
      }
      else {
        this.setState({
          selectedLine: this.state.selectedLine + 1
        })
      }
    }
  }

  toggleComplete = () => {
    let key = this.state.selectedHaiku
    let haikus = { ...this.state.haiku };
    let haiku = { ...haikus[key] };
    haiku.isCompleted = true;
    haikus[key] = haiku;
    this.setState({
      haiku: haikus,
      selectedLine: 0,
      selectedHaiku: this.state.selectedHaiku + 1
    })
  }

  render() {
    return (
      <TabNavigator screenProps={{ ...this.state, handlePress: this.handlePress, checkCorrect: this.checkCorrect, toggleComplete: this.toggleComplete }} />
    );
  }
}
