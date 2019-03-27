import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import ChoiceList from './ChoiceList'
import Haiku from './Haiku'
import HeaderTitle from './HeaderTitle'
import HeaderEmoji from './HeaderEmoji'
import Translation from './Translation'

export default class Main extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <HeaderTitle {...this.props.screenProps}/>
        <TouchableOpacity
          onPress={this.props.screenProps.handlePress}>
          <HeaderEmoji {...this.props.screenProps} />
        </TouchableOpacity>
        <Haiku {...this.props.screenProps}
          haikuLines={this.props.screenProps.haiku[this.props.screenProps.selectedHaiku].haikuLines}
        />
        <Translation {...this.props.screenProps}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 40
  },
  text: {
    color: 'green',
    fontSize: 100
  }
});
