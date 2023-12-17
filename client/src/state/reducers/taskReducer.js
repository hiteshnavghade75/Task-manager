const initialState = {
    user: null,
    isLoggedIn: false
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                task: action.payload,
                isLoggedIn: true
            };

        default:
            return state;
    }
};

export default taskReducer;