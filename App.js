import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import MyHeader from "./Components/MyHeader";
// import { Appbar, TextInput } from "react-native-paper";
import Axios from "axios";
import GoogleAutoComplete from "react-native-google-autocomplete";
import Autofill from "./Components/Autofill";
import GetLocation from "./Components/GetLocation";
import { create } from "apisauce";
import Loader from "./Components/226-splashy-loader.gif";
import { Provider } from "react-redux";
import store from "./Redux/RootRedux/Store";
const api = create({
  baseURL: "http://api.openweathermap.org",
  headers: { Accept: "application/json" },
});
class App extends Component {
  state = {
    text: "",
    lat: "",
    lon: "",
    data: null,
    current: null,
  };

  componentDidMount() {}

  onDetect = (val) => {
    this.setState({ lat: val.lat, lon: val.lng });
    // console.log(val);
    api
      .get(
        `/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.lon}&appid=df35352212cec320cae9896339681714`
      )
      .then((response) => {
        // console.log(response.data.city.name);
        this.setState({ data: response.data });
      })
      .catch();
    api
      .get(
        `/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=df35352212cec320cae9896339681714`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({ current: response.data });
      })
      .catch();
  };
  render() {
    // console.log(this.state.data);
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MyHeader />
          <GetLocation onDetect={this.onDetect} />
          <View style={{ alignItems: "center" }}>
            {this.state.data !== null ? (
              <Text style={{ fontSize: 30 }}>{this.state.data.city.name}</Text>
            ) : (
              <Image
                source={Loader}
                style={{ height: 100, width: 100 }}
              ></Image>
            )}
          </View>
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
