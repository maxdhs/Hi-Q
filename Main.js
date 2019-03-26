import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import ChoiceList from './ChoiceList'
import Haiku from './Haiku'
import HeaderTitle from './HeaderTitle'
import HeaderEmoji from './HeaderEmoji'

export default class Main extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <HeaderTitle {...this.props.screenProps}/>
        <TouchableOpacity
          onPress={this.props.screenProps.handlePress}>
          <HeaderEmoji {...this.props.screenProps} />
        </TouchableOpacity>
        <Haiku
          haikuLines={this.props.screenProps.haiku[this.props.screenProps.selectedHaiku].haikuLines}
          selectedLine={this.props.screenProps.selectedLine}
          selectedHaiku={this.props.screenProps.selectedHaiku}
        />
        <ChoiceList
          haiku={this.props.screenProps.haiku[this.props.screenProps.selectedHaiku]}
          selectedLine={this.props.screenProps.selectedLine}
          checkCorrect={this.props.screenProps.checkCorrect}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40
  },
  text: {
    color: 'green',
    fontSize: 100
  }
});
