/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import FlightsPage from "./src/flights/FlightsPage";
import HotelsPage from './src/hotels/HotelsPage';

//#if [RELEASE]

//AppRegistry.registerComponent("flightApp", () => FlightsPage);
//AppRegistry.registerComponent("hotelApp", () => HotelsPage);

//#endif
//#if [DEV]

AppRegistry.registerComponent("AwesomeProject", () => FlightsPage);

//#endif
