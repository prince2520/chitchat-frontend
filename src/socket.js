import io from 'socket.io-client';

let socket;

export const initiateSocket = (userName) => {
    socket = io(process.env.REACT_APP_SERVER_URL, {transports: ['websocket', 'polling', 'flashsocket']});
    socket.emit('user_connected', userName);
}

export const joinGroupHandler = (groupId) => {
    if(socket && groupId){
        console.log('socket')
        socket.emit('join', {groupId});
    }
}

export const sendGroupMessage = (groupId,message,userName, profileImageUrl) => {
    if(socket){
        socket.emit('sendGroupMsg',{groupId,message,userName,profileImageUrl})
    }
};

export const sendPrivateMessage = (sender,receiver,sendMessage) => {
    if(socket){
        socket.emit('send_message', {
            sender: sender,
            receiver: receiver,
            message: sendMessage
        });
    }
};

export const getPrivateMessage = (cb) => {
    if(!socket){
        return true
    }else{
        socket.on('new_message', ({userName, message})=>{
            console.log(message)
            return cb(null,{userName, message})
        })
    }
}

export const getGroupMessage = (cb) => {
    if(!socket){
        return true
    }else{
        socket.on('groupMsg',({userName, message,groupId, profileImageUrl})=>{
            return cb(null,{userName, message,groupId, profileImageUrl})
        })
    };
}

export const disconnectSocket = () => {
    if(socket){
        socket.disconnect();
    }
}

