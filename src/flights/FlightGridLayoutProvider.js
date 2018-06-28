import { GridLayoutProvider } from 'recyclerlistview-gridlayoutmanager';
export default class FlightGridLayoutProvider extends GridLayoutProvider {
    constructor(props) {
        super();
        this.data = props;
        this.getLayoutTypeForIndex = this.getLayoutTypeForIndex.bind(this);
        this.setMaxSpan = this.setMaxSpan.bind(this);
        this.getSpanForIndex = this.getSpanForIndex.bind(this);
        this.setHeightForIndex = this.setHeightForIndex.bind(this);
    }

    getLayoutTypeForIndex(index) {
        return this.data.getDataForIndex(index).type;
    }

    setMaxSpan(){
        return 4;
    }

    getSpanForIndex(index){
        let type = this.data.getDataForIndex(index).type;
        switch (type){
            case "HOTEL_ITEM":
                return 1;
            case "FL_ITEM":
                return 4;
            case "HEADER":
                return 2;
        }
    }

    setHeightForIndex(height, index){
        return 100;
    }
}