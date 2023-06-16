import {createSlice} from '@reduxjs/toolkit';

const initialChatState = {
    selected: false,
    type: '',
    _id: '',
    photo: '',
    createdBy : '',
    name: '',
    messages:[]
};

const ChatSlice = createSlice({
    name: 'chat',
    initialState: initialChatState,
    reducers: {
        selectedChatBox (state, action){
            state.type = action.payload.type;
            state._id = action.payload._id;
            state.photo = action.payload.photo;
            state.name = action.payload.name;
            state.createdBy = action.payload.createdBy ? action.payload.createdBy : null;
            state.message = action.payload.message ? action.payload.message : [];
            state.selected = true;
        }

    }
});

export const ChatActions = ChatSlice.actions;
export default ChatSlice.reducer;