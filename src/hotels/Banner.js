/**
 * Created by muskein.singh on 23/06/17.
 */

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
class Banner extends React.Component {
    constructor(args){
        super(args);
    }

    shouldComponentUpdate(newProps, newState){
        return true;
    }

    render() {
        let data = this.props.data;
        return(
            <View style={{alignItems : 'center', justifyContent : 'center'}}>
    <Image style={{height : 85, width : 366, marginTop : 8}} source={{uri: 'https://promos.makemytrip.com/images/detail_banner_16032017.png'}}/>
    <View style={{height : 1, marginTop : 8, backgroundColor : '#f1f3f6', width : deviceWidth}}/>
    </View>
    );
    }
}
let styles = {

};
export default Banner;

