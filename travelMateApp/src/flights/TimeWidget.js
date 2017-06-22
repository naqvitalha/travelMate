import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
export default class TimeWidget extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>{this.props.data.startTime}</Text>
                </View>
                <View>
                    <Text>{this.props.data.duration}</Text>
                    <Text>{this.props.data.stops}</Text>
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
        padding:8
    },
    finalPriceText: {}
};
