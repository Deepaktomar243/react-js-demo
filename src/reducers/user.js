import {actionsConst} from '../constants'

let initialState = {
    loginFailure: null,
    sessionToken: null,
    isLoading: false,
};
export default function user(state = initialState, action) {
    switch (action.type) {
        case actionsConst.HIDE_LOADER:
            return {
                ...state,
                loading: false
            };
        case actionsConst.SHOW_LOADER:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
