import {configureStore} from "@reduxjs/toolkit";

import overlayReducer from './overlay';
import alertReducer from "./alert";
import helperReducer from './helper';

const store = configureStore({
    reducer: {
        overlay: overlayReducer,
        helper: helperReducer,
        alert: alertReducer,
    }
});

export default store;