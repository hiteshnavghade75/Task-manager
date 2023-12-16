import axios from 'axios';

export const registerUser = (user) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:5000/user/register', {user});
            dispatch({
                type: 'REGISTER_USER',
                payload: response.data 
            });
            return response.data;
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };
};


export const loginUser = (user) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:5000/user/login', {user});
            dispatch({
                type: 'LOGIN_USER',
                payload: response.data 
            });
            return response.data
        } catch (error) {
            console.error('Error logging in user:', error);
        }
    };
};