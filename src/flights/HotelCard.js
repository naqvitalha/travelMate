import React, {Component} from 'react';
import {View, Text} from 'react-native';
export default class HotelCard extends Component {
    render() {
        return (
            <View style={{flex:1, height:110, backgroundColor : 'red', justifyContent: 'center', alignItems: 'center'}}>
                <Text>My Span is 1</Text>
            </View>
        );
    }
}
