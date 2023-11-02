import { combineReducers } from "redux";

export type RootState = ReturnType<typeof rootReducer>

import userReducer from "./user/reducer";

const rootReducer = combineReducers({ userReducer });

export default rootReducer;
