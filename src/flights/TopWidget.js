import React, {Component} from 'react';
import {View, Text} from 'react-native';
export default class TopWidget extends Component {
    render() {
        return (
            <View style={{flex:1, height:150,backgroundColor : 'yellow', justifyContent: 'center', alignItems: 'center'}}>
                <Text>My Span is 2</Text>
            </View>
        );
    }
}