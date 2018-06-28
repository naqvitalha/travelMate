import React, {Component} from "react";
import {View, Text} from "react-native";
export default class FlightCard extends Component {
    render() {
        return(
            <View style={{flex:1, backgroundColor : 'green', justifyContent: 'center', alignItems: 'center'}}>
                <Text>My Span is 4</Text>
            </View>
        )
    }
}
