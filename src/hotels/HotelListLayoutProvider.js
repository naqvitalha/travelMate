/**
 * Created by muskein.singh on 23/06/17.
 */
import {Dimensions} from 'react-native';
import {LayoutProvider} from "recyclerlistview";
let deviceWidth = Dimensions.get('window').width;
export default class HotelListLayoutProvider extends LayoutProvider {
    constructor(getDSRef) {
        super(null, null);
        this._getDSRef = getDSRef;
        this.getLayoutTypeForIndex = this.getLayoutTypeForIndex.bind(this);
        this.setLayoutForType = this.setLayoutForType.bind(this);
    }

    getLayoutTypeForIndex(index) {
        let data = this._getDSRef().getDataForIndex(index);
        switch (data.type) {
            case "HOTEL_CARD":
                return "HOTEL_CARD";
            case "BANNER":
                return "BANNER";
            case "FLIPKART_CARD":
                return "FLIPKART_CARD";
            default:
                return null;
        }
    }

    setLayoutForType(type, dimension) {
        switch(type){
            case "HOTEL_CARD":
                dimension.height = 150;
                dimension.width = deviceWidth;
                break;
            case "BANNER":
                dimension.height = 105;
                dimension.width = deviceWidth;
                break;
            case "FLIPKART_CARD":
                dimension.height = 80;
                dimension.width = deviceWidth;
        }
    }
}