import React, {Component} from "react";
import {Text, View} from "react-native";
import {Image} from "react-native/Libraries/Animated/src/Animated";
import TimeWidget from "./TimeWidget";
export default class FlightCard extends Component {
    render() {
        return(
        <View  style={styles.outerContainer}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: this.props.data.values.imgUrl}}/>
                <TimeWidget data={this.props.data.values}/>
                <Text>{this.props.data.values.cost}</Text>
            </View>
            <View style={styles.line}></View>
        </View>);
    }
}
const styles = {
    outerContainer:{
        flex:1,
        alignItems:'stretch'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "white",
        alignItems:"center"
    },
    finalPriceText: {},
    image: {
        height: 50,
        width: 50,
        padding: 8
    },
    line: {
        height: 1.5,
        backgroundColor: "lightGrey"
    }
}