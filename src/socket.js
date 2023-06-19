import io from 'socket.io-client';

let socket;

export const initiateSocket = (userName) => {
    socket = io(process.env.REACT_APP_SERVER_URL, {transports: ['websocket', 'polling', 'flashsocket']});
    socket.emit('user_connected', userName);
}

export const joinGroupHandler = (groupId) => {
    if(socket && groupId){
        socket.emit('join', {groupId});
    }
}


export  const  leaveGroupHandler = (groupId) => {
    if(socket && groupId){
        socket.emit('leave_room', {groupId});
    }
}
export const sendGroupMessage = (messageId,groupId,message,userName, profileImageUrl) => {
    if(socket){
        socket.emit('sendGroupMsg',{messageId,groupId,message,userName,profileImageUrl})
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
        socket.on('groupMsg',({ messageId, groupId, message,userName, profileImageUrl})=>{
            return cb(null,{ messageId, groupId, message,userName, profileImageUrl})
        })
    };
}

export const disconnectSocket = () => {
    if(socket){
        socket.disconnect();
    }
}

