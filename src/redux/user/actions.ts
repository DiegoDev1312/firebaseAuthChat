import UserActionTypes from "./action-types";

export const actionLoginUser = (payload) => ({
    type: 'user/login',
    payload,
});

export const logoutUser = () => ({
    type: UserActionTypes.LOGOUT,
});
