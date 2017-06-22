/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import FlightsPage from "./src/flights/FlightsPage";
import HotelsPage from './src/hotels/HotelsPage';

//AppRegistry.registerComponent("flightApp", () => FlightsPage);
AppRegistry.registerComponent("AwesomeProject", () => HotelsPage);
