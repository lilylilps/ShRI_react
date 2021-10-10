import { LOAD_HISTORY, LOAD_HISTORY_FAIL, LOAD_HISTORY_SUCCESS } from "../actions/action-types";

const initialState = {
    commits: [],
    isLoading: false,
    errorOccurred: false
};

export function historyReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_HISTORY:
            return {
                ...state,
                isLoading: true
            };
        case LOAD_HISTORY_SUCCESS:
            return {
                ...state,
                commits: action.payload,
                isLoading: false
            };
        case LOAD_HISTORY_FAIL:
            return {
                ...state,
                isLoading: false,
                errorOccurred: true
            }
        default:
            return state;
    }
}