import {configureStore} from "@reduxjs/toolkit";

import overlayReducer from './overlay';
import alertReducer from "./alert";
import helperReducer from './helper';
import userReducer from './user';

const store = configureStore({
    reducer: {
        overlay: overlayReducer,
        helper: helperReducer,
        alert: alertReducer,
        user: userReducer
    }
});

export default store;