import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
export default class TimeWidget extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>{this.props.data.startTime}</Text>
                </View>
                <View style={styles.middleContainer}>
                    <Text style={styles.lightText}>{this.props.data.duration}</Text>
                    <View style={styles.line}></View>
                    <Text style={styles.lightText}>{this.props.data.stops}</Text>
                </View>
                <View><Text>{this.props.data.endTime}</Text></View>
            </View>
        );
    }
}
const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginLeft:16,
        marginRight:16
    },
    middleContainer:{
        alignItems:"stretch",
        flexDirection:"column"
    },
    finalPriceText: {},
    lightText:{
        fontSize:12,
        color:'#878787'
    },
    line: {
        height: 1,
        backgroundColor: "#A7A7A7"
    }
};
