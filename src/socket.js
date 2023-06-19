import io from 'socket.io-client';

let socket;

export const initiateSocket = (userId) => {
    socket = io(process.env.REACT_APP_SERVER_URL, {transports: ['websocket', 'polling', 'flashsocket']});
    socket.emit('user_connected', userId);
}

export const joinGroupHandler = (groupId) => {
    if(socket && groupId){
        socket.emit('join_group', {groupId});
    }
}


export  const  leaveGroupHandler = (groupId) => {
    if(socket && groupId){
        socket.emit('leave_room', {groupId});
    }
}
export const sendGroupMessage = (groupData) => {
    if(socket){
        socket.emit('send_group_message',{groupData});
    }
};

export const sendPrivateMessage = (sender,receiver,message, profileImageUrl) => {
    if(socket){
        socket.emit('send_message', {
            sender: sender,
            receiver: receiver,
            message: message
        });
    }
};

export const getPrivateMessage = (cb) => {
    if(!socket){
        return true
    }else{
        socket.on('new_message', ({userName, message, profileImageUrl})=>{
            return cb(null,{userName, message, profileImageUrl})
        })
    }
}

export const getGroupMessage = (cb) => {
    if(!socket){
        return true
    }else{
        socket.on('received_group_message',({messageData})=>{
            return cb(null,{messageData})
        })
    };
}

export const disconnectSocket = (userId) => {
    if(socket){
        socket.disconnect(userId);
    }
}

