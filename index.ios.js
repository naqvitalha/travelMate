/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';
import FlightsPage from "./src/flights/FlightsPage";

AppRegistry.registerComponent('travelMate', () => FlightsPage);
