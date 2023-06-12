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

// Login to ChitChat

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