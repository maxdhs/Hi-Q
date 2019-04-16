import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Constants } from "expo";
import CompletedTitle from "./CompletedTitle";

export default class CompletedScreen extends React.Component {
  render() {
    let haikus = this.props.screenProps.haiku;
    let keys = Object.keys(haikus);
    const list = [];
    for (let key of keys) {
      list.push(
        <View key={key}>
          <View style={styles.rowContainer}>
            <View style={styles.subContainer}>
              <Text style={styles.emoji}>{haikus[key].emoji}</Text>
              <Text style={styles.title}>
                {haikus[key].name} {"\n"}
                <Text style={styles.caption}>
                  Haiku {Number(key) + 1} of {keys.length}
                </Text>
              </Text>
            </View>
            <Text style={styles.checkbox}>
              {haikus[key].isCompleted ? "✅" : null}️
            </Text>
          </View>
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        <CompletedTitle />
        {list}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight
  },
  subContainer: {
    flexDirection: "row"
  },
  rowContainer: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "space-between"
  },
  checkbox: {
    alignSelf: "center",
    fontSize: 40
  },
  emoji: {
    fontSize: 25,
    backgroundColor: "black",
    padding: "2%",
    margin: 10,
    borderRadius: 10
  },
  title: {
    paddingTop: 5,
    fontSize: 25
  },
  caption: {
    fontSize: 15
  }
});
