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
            default:
                return null;
        }
    }

    setLayoutForType(type, dimension) {
        switch(type){
            case "HOTEL_CARD":
                dimension.height = 180;
                dimension.width = deviceWidth;
                break;
            case "BANNER":
                dimension.height = 120;
                dimension.width = deviceWidth;
                break;
        }
    }
}