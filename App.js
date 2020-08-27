import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import MyHeader from "./Components/MyHeader";
// import { Appbar, TextInput } from "react-native-paper";

import { create } from "apisauce";

import { Provider } from "react-redux";
import store from "./Redux/RootRedux/Store";

import { connect } from "react-redux";
import Homepage from "./Components/Homepage";
import Forecast from "./Components/Forecast";

class App extends Component {
  state = {
    text: "",
    lat: "",
    lon: "",
    data: null,
    current: null,
  };

  componentDidMount() {}

  render() {
    // console.log(this.props.val);
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MyHeader />
          <Homepage />
          <Forecast />
        </View>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    textAlign: "center",
  },
});
