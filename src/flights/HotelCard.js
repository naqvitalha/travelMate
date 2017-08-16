import React, {Component} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
export default class HotelCard extends Component {
    render() {
        return (
            <TouchableHighlight style={{backgroundColor:"#F7F7F7", elevation: 1, height: 80}} underlayColor="#878787" onPress={() => {

            }}>
                <View style={styles.container}>
                    <Image style={styles.image} source={{uri: "https://www.myrtlebeachspeedway.com/wp-content/uploads/2015/09/hotel-icon.png"}}/>
                    <Text style={styles.finalPriceText}>Looking for a Hotel?</Text>
                    <View style={styles.iconContainer}>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}
const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 8
    },
    iconContainer:{
        flex:1,
        justifyContent:'flex-end'
    },
    finalPriceText: {
        marginLeft:12
    },
    chevron:{
        width:20,
        height:20,
        resizeMode:"contain",
        position:'absolute',
        right:0,
        bottom:-10
    },
    image:{
        width:65,
        height:65
    }
};
