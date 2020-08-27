import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
class Forecast extends Component {
  state = {};
  render() {
    console.log(this.props.forecastData.list);
    return (
      <View style={{ display: "flex", flexDirection: "column", marginTop: 7 }}>
        {this.props.forecastData.list !== undefined ? (
          <ScrollView>
            {this.props.forecastData.list.map((item, index) => (
              <View
                style={{
                  backgroundColor: "#a7d7c5",
                  border: "1px solid black",
                  borderRadius: 7,
                  display: "flex",
                  flexDirection: "column",
                  // alignContent: "center",
                  alignItems: "center",
                  paddingVertical: 15,
                  marginVertical: 5,
                  marginHorizontal: 10,
                }}
              >
                <Text style={{ fontSize: 24 }}> Date : {item.dt_txt}</Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={{ marginHorizontal: 10, fontSize: 20 }}>
                    Max : {Math.round(item.main.temp_max - 273)} &deg;c
                  </Text>
                  <Text style={{ marginHorizontal: 10, fontSize: 20 }}>
                    Min : {Math.round(item.main.temp_min - 273)} &deg;c
                  </Text>
                </View>
                <Text style={{ marginHorizontal: 10, fontSize: 20 }}>
                  Feels Like : {Math.round(item.main.feels_like - 273)} &deg;c
                </Text>
                <Text style={{ marginHorizontal: 10, fontSize: 20 }}>
                  Humidity : {item.main.humidity} %
                </Text>
                <Text style={{ marginHorizontal: 10, fontSize: 20 }}>
                  Visibility : {item.visibility} meters
                </Text>
                <Text style={{ marginHorizontal: 10, fontSize: 20 }}>
                  Weather : {item.weather[0].main}
                </Text>
                <Text style={{ marginHorizontal: 10, fontSize: 20 }}>
                  Wind Speed : {item.wind.speed} km/hr
                </Text>
              </View>
            ))}
          </ScrollView>
        ) : (
          <Text>oops..! something went wrong</Text>
        )}
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
