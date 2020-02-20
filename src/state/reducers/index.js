import {ADD_ARTICLE, GET_ARTICLE} from "../actions/basic";

const initialState = {
    article: {}
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return { ...state, article: action.payload }
    }

    if (action.type === GET_ARTICLE) {
        return state;
    }

    return state;
}

export default rootReducer;
