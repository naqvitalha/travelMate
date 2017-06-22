import React, {Component} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import NavigationManager from "fk-react-native-sdk/modules/navigation/NavigationManager";
import Constants from "../constants/Constants";
export default class HotelCard extends Component {
    render() {
        return (
            <TouchableHighlight onPress={() => {
                NavigationManager.navigate(Constants.hotelAction);
            }}>
                <View style={styles.container}>
                    <Text>Looking for a Hotel?</Text>
                </View>
            </TouchableHighlight>
        );
    }
}
const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8
    },
    finalPriceText: {}
};
