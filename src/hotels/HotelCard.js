
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
class HotelCard extends React.Component {
    constructor(args){
        super(args);
    }

    shouldComponentUpdate(newProps, newState){
        return true;
    }

    render() {
        let data = this.props.data;
        return(
            <View style={{flex : 1}}>
                <View style={{marginLeft : 16,marginTop : 16,height : 20, width : deviceWidth}}>
                    <Text>{data.usp}</Text>
                </View>
                <View style={{flexDirection : 'row', flex : 1, marginTop : 8}}>
                    <Image style={{height : 96, width : 96, marginTop : 8, marginLeft : 16}} source={{uri: data.imageURL}}/>
                    <View style={{marginLeft : 16, marginTop : 4, marginRight : 16, flex : 1}}>
                        <Text>{data.title}</Text>
                        <Text>{data.location}</Text>
                        <View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
                            <View style={{flexDirection : 'row'}}>
                                <Text>{data.rating} stars</Text>
                                <Text style={{marginLeft : 8}}>{data.reviews} reviews</Text>
                            </View>
                            <Text>{data.pricePerNight}</Text>
                        </View>
                        <Text>{data.discount}</Text>
                        {data.mmtAssured ?
                            <Text>MMT Assured</Text>
                            : null
                        }
                    </View>
                </View>
                <View style={{width : deviceWidth, height : 30, justifyContent: 'center', marginLeft : 16, marginRight : 16}}>
                    {data.fewRoomsSignal ?
                        <Text>Few Rooms Left</Text>
                        : null
                    }
                </View>
                <View style={{height : 1, backgroundColor : '#f1f3f6', width : deviceWidth}}/>
            </View>
        );
    }
}
let styles = {

};
export default HotelCard;

