import {
    UPLOAD_SETTINGS,
    UPLOAD_SETTINGS_FAIL,
    UPLOAD_SETTINGS_SUCCESS
} from "./action-types";

function uploadSettingsStart() {
    return {
        type: UPLOAD_SETTINGS
    };
}

function uploadSettingsSuccess(payload) {
    return {
        type: UPLOAD_SETTINGS_SUCCESS,
        payload
    };
}

function uploadSettingsFail() {
    return {
        type: UPLOAD_SETTINGS_FAIL
    };
}

export function uploadSettings(settings) {
    return (dispatch, getState) => {
        dispatch(uploadSettingsStart());
        dispatch(uploadSettingsSuccess(settings));
    };
}

