// Signup to ChitChat
export const signup = async (userName, email, password) => {
    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userName: userName,
            email: email,
            password: password
        })
    });

    return result.json();
}

export const login = async (email, password) => {
    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });

    return result.json();
}

export const fetchUser = async (userId, token) => {
    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/fetchUser?userId=${userId}`,{
        headers:{
            Authorization: 'Bearer ' + token
        }
    });

    return result.json();
}

export const saveProfile = async (token, data) => {
    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/saveProfile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        body: JSON.stringify(data)
    })

    return result.json();
};

export const createGroup = async (token, groupName, username, userId, groupUrl ) => {
    let data = {
        groupName: groupName,
        token: token,
        userName: username,
        userId: userId,
        groupImageUrl: groupUrl
    };

    if(groupUrl){
        data.groupImageUrl = groupUrl;
    }

    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/group/createRoom`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        body: JSON.stringify(data)
    });

    return result.json();
}


export const searchUserHandler = async (token, email) => {
    let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/fetchUser?email=${email}`,{
        headers:{
            Authorization: 'Bearer ' + token
        }
    });

    return result.json();
}