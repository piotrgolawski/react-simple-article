import { ADD_ARTICLE, SET_ERROR } from '../actions/article.action';
import { Article } from '../../interfaces/article.interface';

const initialState = {
  article: {} as Article,
  loading: true,
  error: null,
};

function rootReducer(state = initialState, action: any) {
  console.log('action.type', action.type);
  if (action.type === ADD_ARTICLE) {
    return { ...state, article: action.payload, loading: false, error: null };
  }

  if (action.type === SET_ERROR) {
    return { ...state, article: null, loading: false, error: action.error };
  }

  return state;
}

export default rootReducer;
