import {createSlice} from '@reduxjs/toolkit';

const initialChatState = {
    selected: false,
    type: '',
    _id: '',
    photo: '',
    status: '',
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
            state.status = action.payload.status ? action.payload.status : null;
            state.createdBy = action.payload.createdBy ? action.payload.createdBy : null;
            state.messages = action.payload.messages ? action.payload.messages : [];
            state.selected = true;
        },
        saveChatMessage(state, action){
            console.log(action.payload)
            if(!state.messages.find(res=>res.messageId === action.payload.messageId)){
                state.messages = [action.payload, ...state.messages]
            }

        },
        saveFetchChatMessage(state, action) {
            state.messages = action.payload.reverse()
        }
    }
});

export const ChatActions = ChatSlice.actions;
export default ChatSlice.reducer;