
import React, {Component} from "react";
import {
    View,
    Dimensions,
    Image,
    Text,
    Animated,
    Easing
} from "react-native";
var deviceWidth = Dimensions.get('window').width;
class FlipkartCard extends React.Component {
    constructor(args){
        super(args);
    }

    render() {
        return(
            <View style={{flex : 1}}>
                <View style={{backgroundColor : '#aeadae', width : deviceWidth, height : 1}}/>
                <View style={{backgroundColor : '#124680', flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                    <Text style={{fontSize : 16, fontFamily : 'roboto-medium', color : '#ffffff'}}>Powered by Flipkart</Text>
                </View>
            </View>
        );
    }
}

export default FlipkartCard;

