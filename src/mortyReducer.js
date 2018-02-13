import { combineReducers } from "redux";

const rickIndex = (state = 0, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default combineReducers({
    rickIndex
});

// state machine -->
// {
//     rickIndex: N defined by rickIndex function
// }
