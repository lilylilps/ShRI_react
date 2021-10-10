import buildHistoryService from '../../services/buildHistory.service'
import { LOAD_HISTORY, LOAD_HISTORY_FAIL, LOAD_HISTORY_SUCCESS } from './action-types';

function loadHistoryStart() {
    return {
        type: LOAD_HISTORY
    };
}

function loadHistorySuccess(payload) {
    return {
        type: LOAD_HISTORY_SUCCESS,
        payload
    };
}

function loadHistoryFail() {
    return {
        type: LOAD_HISTORY_FAIL
    };
}

export function loadHistory() {
    return (dispatch, getState) => {
        dispatch(loadHistoryStart());
        const builds = buildHistoryService.getBuildHistory();
        dispatch(loadHistorySuccess(builds));
    };
}

