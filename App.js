import React from "react";
import { Audio } from "expo";
import TabNavigator from "./Navigation";
import { initialState } from "./InitialState";
import { AsyncStorage } from "react-native";

export default class App extends React.Component {
  state = initialState;

  render() {
    return (
      <TabNavigator
        screenProps={{
          ...this.state,
          handlePress: this.handlePress,
          checkCorrect: this.checkCorrect,
          toggleComplete: this.toggleComplete,
          nextHaikuButtonHandler: this.nextHaikuButtonHandler
        }}
      />
    );
  }

  componentDidMount = () => {
    this.playLine();
  };

  componentDidUpdate = () => {
    this.storeState();
    !this.state.isShowingTranslation ? this.playLine() : null;
  };

  componentWillMount = () => {
    this.retrieveState();
  };

  storeState = async () => {
    try {
      await AsyncStorage.setItem("savedState", JSON.stringify(this.state));
    } catch (error) {
      console.log(error);
    }
  };

  retrieveState = async () => {
    try {
      const value = await AsyncStorage.getItem("savedState");
      if (value !== null) {
        let savedState = JSON.parse(value);
        this.setState(savedState);
      }
    } catch (error) {
      console.log(error);
    }
  };

  handlePress = lineNumber => {
    Audio.Sound.createAsync(
      this.state.haiku[this.state.selectedHaiku].soundsArray[lineNumber],
      { shouldPlay: true }
    );
  };

  playLine = () => {
    Audio.Sound.createAsync(
      this.state.haiku[this.state.selectedHaiku].soundsArray[
        this.state.selectedLine
      ],
      { shouldPlay: true }
    );
  };

  checkCorrect = userChoice => {
    if (
      userChoice ===
      this.state.haiku[this.state.selectedHaiku].optionsArray[
        this.state.selectedLine
      ][3]
    ) {
      if (this.state.selectedLine === 2) {
        this.toggleComplete();
      } else {
        this.setState({
          selectedLine: this.state.selectedLine + 1
        });
      }
    }
  };

  nextHaikuButtonHandler = () => {
    if (Object.keys(this.state.haiku).length === this.state.selectedHaiku + 1) {
      alert("Congratulations! You have completed all available lessons.");
      this.setState({
        selectedLine: 0,
        selectedHaiku: 0,
        isShowingTranslation: false
      });
    } else {
      this.setState({
        selectedLine: 0,
        selectedHaiku: this.state.selectedHaiku + 1,
        isShowingTranslation: false
      });
    }
  };

  toggleComplete = () => {
    let key = this.state.selectedHaiku;
    let haikus = { ...this.state.haiku };
    let haiku = { ...haikus[key] };
    haiku.isCompleted = true;
    haikus[key] = haiku;
    this.setState({
      haiku: haikus,
      isShowingTranslation: true
    });
  };
}
