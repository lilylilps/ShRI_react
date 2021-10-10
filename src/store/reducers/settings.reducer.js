import {
    UPLOAD_SETTINGS,
    UPLOAD_SETTINGS_FAIL,
    UPLOAD_SETTINGS_SUCCESS
} from "../actions/action-types";


const initialState = {
    settings: null,
    isLoading: false,
    errorOccurred: false
};


export function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case UPLOAD_SETTINGS:
            return {
                ...state,
                isLoading: true
            };
        case UPLOAD_SETTINGS_SUCCESS:
            return {
                ...state,
                settings: action.payload,
                isLoading: false
            };
        case UPLOAD_SETTINGS_FAIL:
            return {
                ...state,
                isLoading: false,
                errorOccurred: true
            }
        default:
            return state;
    }
}