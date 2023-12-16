const initialState = {
    user: null,
    isLoggedIn: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_USER':
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            };

        case 'LOGIN_USER':
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            };

        default:
            return state;
    }
};

export default userReducer;
