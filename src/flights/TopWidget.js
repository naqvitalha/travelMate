import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
export default class TopWidget extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.imageFlag} source={{uri: this.props.data.values.fromImage}}></Image>
                <View style={styles.line}></View>
                <Image style={styles.imageFlag} source={{uri: this.props.data.values.toImage}}></Image>
            </View>
        );
    }
}
const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:'orange'

    },
    line: {
        height: 2,
        width:300,
        backgroundColor: "white"
    },
    imageFlag: {
        width: 120,
        height: 120
    },

};
