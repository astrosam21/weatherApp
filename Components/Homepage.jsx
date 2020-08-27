import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import MyHeader from "./MyHeader";

import GetLocation from "./GetLocation";
import { create } from "apisauce";
import Loader from "./226-splashy-loader.gif";
import { getCoordsSuccess } from "../Redux/Actions/MainActions/Actions";

// import {} from "./Redux/Actions/MainActions";
import { connect } from "react-redux";
const api = create({
  baseURL: "http://api.openweathermap.org",
  headers: { Accept: "Application/json" },
});
class Homepage extends Component {
  state = {
    text: "",
    where: { lat: null, lng: null },
    data: null,
    current: null,
    prevProps: {},
  };

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     if (nextProps !== prevState.prevProps) {
  //       nextProps.getCoordsSuccess(nextProps.val);
  //       return { where: nextProps.val, prevProps: nextProps };
  //     }
  //   }

  componentWillReceiveProps(nextProps) {
    if (nextProps.val !== this.state.where) {
      this.props.getCoordsSuccess(nextProps.val);
      this.setState({ where: nextProps.val, data: nextProps.forecastData });
    }
  }
  componentDidMount() {}

  //   onDetect = (val) => {
  //     this.setState({ lat: val.lat, lon: val.lng });
  //   api
  //     .get(
  //       `/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.lon}&appid=df35352212cec320cae9896339681714`
  //     )
  //     .then((response) => {
  //       // console.log(response.data.city.name);
  //       this.setState({ data: response.data });
  //     })
  //     .catch();
  //   api
  //     .get(
  //       `/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=df35352212cec320cae9896339681714`
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //       this.setState({ current: response.data });
  //     })
  //     .catch();
  //   };
  render() {
    console.log(this.props.forecastData);
    return (
      <View style={styles.container}>
        <GetLocation onDetect={this.onDetect} />
        <View style={{ alignItems: "center" }}>
          {this.props.forecastData.city !== undefined ? (
            <Text style={{ fontSize: 30 }}>
              {this.props.forecastData.city.name}
            </Text>
          ) : (
            <Image source={Loader} style={{ height: 100, width: 100 }}></Image>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.MainReducer.forecastData);
  return {
    val: state.MainReducer.coords,
    forecastData: state.MainReducer.forecastData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCoordsSuccess: (val) => {
      getCoordsSuccess(val, dispatch);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    textAlign: "center",
  },
});
