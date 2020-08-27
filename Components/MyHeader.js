import { Appbar } from "react-native-paper";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const MyHeader = () => {
  return (
    <Appbar.Header>
      {/* <Appbar.BackAction onPress={this._goBack} / > */}
      <Appbar.Content
        title="weather app"
        subtitle="Get Instant Weather and Forecast"
        style={{ alignItems: "center" }}
      />
      {/* <Appbar.Action icon="search" onPress={this._onSearch} />
      <Appbar.Action icon="more-vert" onPress={this._onMore} /> */}
    </Appbar.Header>
  );
};

export default MyHeader;
