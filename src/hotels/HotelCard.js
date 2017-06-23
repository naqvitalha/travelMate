
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
                <View style={{flexDirection : 'row', flex : 1, marginTop : 8}}>
                    <Image style={{height : 96, width : 96, marginTop : 8, marginLeft : 16}} source={{uri : 'http://3.bp.blogspot.com/--2G5-blY_NE/U8LBLJLDwDI/AAAAAAAAIrQ/wQtHbEhbzNI/s1600/luxury-hotel-HD-Wallpapers.jpg'}}/>
                    <View style={{marginLeft : 16, marginTop : 4, flex : 1}}>
                        <Text style={{color :'#212121', fontSize : 14, fontFamily : 'roboto-medium'}}>{data.title}</Text>
                        <Text style={{color :'#878787', fontSize : 12, fontFamily : 'roboto-medium', marginTop : 4}}>{data.location}</Text>
                        <View style={{flexDirection : 'row', justifyContent : 'space-between', marginTop : 4}}>
                            <View style={{flexDirection : 'row'}}>
                                <View style={{backgroundColor : '#15be48', flexDirection : 'row', marginTop : 2, borderRadius : 1}}>
                                    <Text style={{color :'#ffffff', fontSize : 12, fontFamily : 'roboto-medium', marginLeft : 2}} >{data.rating}</Text>
                                    <Text style={{color :'#ffffff', fontSize : 12, fontFamily : 'roboto-medium', marginLeft : 2, marginRight : 2}} >&#9733;</Text>
                                </View>
                                <Text style={{color :'#878787', fontSize : 12, fontFamily : 'roboto-medium', marginLeft : 4, marginTop : 2}}>{data.reviews} reviews</Text>
                            </View>
                        </View>
                        <Text style={{color :'#212121', fontSize : 16, fontFamily : 'roboto-medium'}} >&#8377;{data.pricePerNight}</Text>
                        <Text style={{color :'#388e3c', fontSize : 14, fontFamily : 'roboto-medium', marginTop : 1}}>{data.discount}</Text>
                        {data.mmtAssured ?
                            <View style={{flex : 1, height : 25, alignItems : 'flex-end'}}>
                                <View style={{height : 25, width : 100, backgroundColor : '#124680', justifyContent : 'center', alignItems : 'center'}}>
                                    <Text style={{color :'#ffffff', fontSize : 12, fontFamily : 'roboto-medium'}}>MMT Assured</Text>
                                </View>
                            </View>
                            : null
                        }
                    </View>
                </View>
                <View style={{width : deviceWidth, height : 30, justifyContent: 'center', marginLeft : 16, marginRight : 16}}>
                    {data.fewRoomsSignal ?
                        <Text style={{color :'#DD5354', fontSize : 12, fontFamily : 'roboto-medium', marginLeft :4, marginTop:-12}}>Few Rooms Left</Text>
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

