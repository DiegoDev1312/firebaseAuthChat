import UserActionTypes from "./action-types";

const initialState = {
    currentUser: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case (UserActionTypes.LOGIN):
            console.log('entrou1')

            return { ...state, currentUser: action.payload };
        case (UserActionTypes.LOGOUT):
            console.log('entrou2')

            return { ...state, currentUser: null };
        default:
            console.log('entrou3')

            return state;
    }
};

export default userReducer;
