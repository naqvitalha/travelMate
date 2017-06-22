/**
 * Created by muskein.singh on 23/06/17.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Dimensions, Image } from "react-native";
import AndroidGenericUtilsModule from 'fk-react-native-sdk/modules/android/AndroidGenericUtilsModule';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import hotelData from './hotelJSON';
import HotelCard from './HotelCard';
import HotelListLayoutProvider from './HotelListLayoutProvider';
import Banner from './Banner';
var deviceWidth = Dimensions.get('window').width;

class HotelsPage extends Component {

    constructor(args){
        super(args);
        this.state = {
            dataProvider: new DataProvider((row1, row2) => {
                return row1 !== row2
            })
        };
        this.setStatusBarColor = this.setStatusBarColor.bind(this);
        this.rowRenderer = this.rowRenderer.bind(this);
        this._layoutProvider = new HotelListLayoutProvider(this.getDataSourceRef.bind(this));
    }

    rowRenderer(type, itemData){
        let itemType = itemData.type;
        let itemContent;
        switch (itemType){
            case "HOTEL_CARD":
                itemContent =  <HotelCard data={itemData}/>;
                break;
            case "BANNER":
                itemContent = <Banner data={itemData}/>;
                break;
        }
        return itemContent;

    }

    getDataSourceRef() {
        return this.state.dataProvider;
    }

    componentWillMount(){
        this.setStatusBarColor();
        this.setState({dataProvider: this.state.dataProvider.cloneWithRows(hotelData.hotels)});
    }

    setStatusBarColor(){
        if (AndroidGenericUtilsModule.isAvailable()) {
            AndroidGenericUtilsModule.setStatusBarColor('#124680');
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{height :  56, width : deviceWidth, backgroundColor :'#124680' , flexDirection : 'row', elevation : 2}}>
                    <Image  source={{uri:'custom_back_icon'}} style={styles.backIcon}/>
                    <Text style={{fontSize : 16, fontFamily : 'roboto-medium', color : '#ffffff', marginTop : 16, marginLeft : 8}}>Hotels to Singapore</Text>
                </View>
                <View style={{height : 40, width : deviceWidth, backgroundColor : '#ffffff', flexDirection:'row'}}>
                    <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                        <Text style={{fontSize : 14, fontFamily : 'roboto-medium', color : '#124680'}}>From: DELHI</Text>
                    </View>
                    <View style={{height : 40, width : 1, backgroundColor : '#f1f3f6'}}/>
                    <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                        <Text style={{fontSize : 14, fontFamily : 'roboto-medium', color : '#124680'}}>To: SINGAPORE</Text>
                    </View>
                </View>
                <View style={{height : 1, width : deviceWidth, backgroundColor : '#f1f3f6'}}/>
                <View style={{height : 40, width : deviceWidth, backgroundColor : '#ffffff', flexDirection:'row', elevation : 1}}>
                    <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                        <Text style={{fontSize : 12, fontFamily : 'roboto-medium', color : '#124680'}}>2N, 3D</Text>
                    </View>
                    <View style={{height : 40, width : 1, backgroundColor : '#f1f3f6'}}/>
                    <View style={{flex : 1, justifyContent : 'center', alignItems : 'center', elevation : 2}}>
                        <Text style={{fontSize : 12, fontFamily : 'roboto-medium', color : '#124680'}}>6 Persons</Text>
                    </View>
                    <View style={{height : 40, width : 1, backgroundColor : '#f1f3f6'}}/>
                    <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                        <Text style={{fontSize : 12, fontFamily : 'roboto-medium', color : '#124680'}}>3 Rooms</Text>
                    </View>
                </View>
                <View style={{height : 1, width : deviceWidth, backgroundColor : '#f1f3f6'}}/>
                <RecyclerListView
                    style={{flex : 1}}
                    ref="recyclerListView"
                    showsVerticalScrollIndicator={false}
                    dataProvider={this.state.dataProvider}
                    layoutProvider={this._layoutProvider}
                    rowRenderer={this.rowRenderer}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    backIcon:{
        height:23,
        width:23,
        marginLeft:16,
        marginRight:12,
        marginTop : 16
    }
});
export default HotelsPage;
