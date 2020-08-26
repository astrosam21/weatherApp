import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Loader from "./226-splashy-loader.gif";

export default class GetLocation extends React.Component {
  constructor() {
    super();
    this.state = {
      ready: false,
      where: { lat: null, lng: null },
      error: null,
    };
  }
  componentDidMount() {
    let geoOptions = {
      enableHighAccuracy: true,
      timeOut: 20000,
      maximumAge: 60 * 60 * 24,
    };
    this.setState({ ready: false, error: null });
    navigator.geolocation.getCurrentPosition(
      this.geoSuccess,
      this.geoFailure,
      geoOptions
    );
  }
  geoSuccess = (position) => {
    console.log(position.coords.latitude);

    this.setState({
      ready: true,
      where: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
    });
    this.props.onDetect(this.state.where);
  };
  geoFailure = (err) => {
    this.setState({ error: err.message });
  };

  render() {
    return (
      <View style={styles.container}>
        {!this.state.ready && (
          <Image source={Loader} style={{ height: 60, width: 60 }}></Image>
        )}
        {this.state.error && <Text style={styles.big}>{this.state.error}</Text>}
        {this.state.ready && (
          <Text style={styles.big}>
            {/* {`Latitude: ${this.state.where.lat}
                    Longitude: ${this.state.where.lng}`} */}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  big: {
    fontSize: 48,
  },
});
