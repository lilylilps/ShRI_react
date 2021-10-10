import { combineReducers } from "redux";

import { historyReducer } from "./reducers/history.reducer";
import { settingsReducer } from "./reducers/settings.reducer";

const allReducer = combineReducers({
    historyState: historyReducer,
    settingsState: settingsReducer,
});

export default allReducer;