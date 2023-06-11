import {configureStore} from "@reduxjs/toolkit";

import overlayReducer from './overlay';

const store = configureStore({
    reducer: {
        overlay: overlayReducer,
    }
});

export default store;