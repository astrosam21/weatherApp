// import { GoogleAutoComplete } from "react-native-google-autocomplete";
import React, { Component } from "react";
// import Placesearch from "react-native-placesearch";
// import { StyleSheet, Text, View, Button, TextInput } from "react-native";
// import Autocomplete from "react-native-autocomplete-input";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";

const data = ["hello", "world", "wonder", "londoi", "london"];

class Autofill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <GooglePlacesAutocomplete
          placeholder="search"
          minLength="2"
          autoFocus={true}
          returnKeyType={"search"}
          listViewDisplayed={false}
          fetchDetails={true}
          onPress={(data, details = null) => {
            this.props.notifyChange(details.geometry.location);
          }}
          query={{
            key: "",
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={300}
        /> */}
      </View>
    );
  }
}

export default Autofill;
