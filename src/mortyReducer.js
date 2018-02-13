import { combineReducers } from "redux";

const rickIndex = (state = 0, action) => {
    switch (action.type) {
        case "NEXT":
            return state + 1;
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
