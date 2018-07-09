import React, {Component} from "react";
import {RecyclerListView, DataProvider} from "recyclerlistview";
import FlightGridLayoutProvider from './FlightGridLayoutProvider';
import {View, Dimensions, Text, Image} from "react-native";
import FlightData from "./FlightData";
export default class FlightsPage extends Component {
    constructor(args) {
        super(args);
        this.state = {
            dataProvider: new DataProvider((r1, r2) => {
                return r1 !== r2
            }).cloneWithRows(FlightData)
        };
        this._layoutProvider = new FlightGridLayoutProvider(this.state.dataProvider);
        this._renderRow = this._renderRow.bind(this);
    }


    _renderRow(type, data) {
        switch (type) {
            case "HOTEL_ITEM":
                return <View style={{flex:1, height:110, backgroundColor : 'red', justifyContent: 'center', alignItems: 'center'}}>
                    <Text>My Span is 1</Text>
                </View>;
            case "FL_ITEM":
                return <View style={{flex:1, height:140,backgroundColor : 'green', justifyContent: 'center', alignItems: 'center'}}>
                    <Text>My Span is 4</Text>
                </View>;
            case "HEADER":
                return <View style={{flex:1, height:150,backgroundColor : 'yellow', justifyContent: 'center', alignItems: 'center'}}>
                    <Text>My Span is 2</Text>
                </View>;
            default:
                return null;

        }

    }

    render() {
        return <View style={styles.container}>
            <RecyclerListView forceNonDeterministicRendering={false} isHorizontal={false} rowRenderer={this._renderRow} dataProvider={this.state.dataProvider}
                              layoutProvider={this._layoutProvider}/>
        </View>
    }
}
const styles = {
    container: {
        flex: 1,

    },
    header:{
        height: 65,
        backgroundColor:'orange',
        alignItems:"center",
        flexDirection:"row",
        elevation:4
    },
    headerText:{
        color:'white',
        fontSize:18,
        marginLeft: 16,
        paddingBottom:3
    },
    backIcon:{
        height:23,
        width:23,
        marginLeft:16

    }
}