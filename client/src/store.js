import { createStore } from "redux";

export const store = createStore(
    rootReducer,
    initialState
);

export default store;