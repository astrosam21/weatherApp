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
    console.log(this.props.currentData);
    return (
      <View style={styles.container}>
        <GetLocation onDetect={this.onDetect} />
        <View style={{ alignItems: "center" }}>
          {this.props.currentData.main !== undefined ? (
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text style={{ fontSize: 30 }}>
                {this.props.currentData.name}, "
                {this.props.currentData.sys.country}"
              </Text>
              <Text style={{ fontSize: 30 }}>
                Temp : {Math.round(this.props.currentData.main.temp - 273)}{" "}
                &deg;c
              </Text>
              <Text style={{ fontSize: 30 }}>
                Feels like :{" "}
                {Math.round(this.props.currentData.main.feels_like - 273)}{" "}
                &deg;c
              </Text>
              <Text style={{ fontSize: 30 }}>
                Max : {Math.round(this.props.currentData.main.temp_max - 273)}{" "}
                &deg;c
              </Text>
              <Text style={{ fontSize: 30 }}>
                Min : {Math.round(this.props.currentData.main.temp_min - 273)}{" "}
                &deg;c
              </Text>
              <Text style={{ fontSize: 30 }}>
                Humidity : {this.props.currentData.main.humidity}%
              </Text>
              <Text style={{ fontSize: 30 }}>
                Description : {this.props.currentData.weather[0].main}
              </Text>
            </View>
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
    currentData: state.MainReducer.currentData,
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
