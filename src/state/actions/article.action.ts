import { Article } from '../../interfaces/article.interface';

export const ADD_ARTICLE = 'ADD_ARTICLE';
export const SET_ERROR = 'SET_ERROR';

export function addArticle(payload: Article) {
  return { type: ADD_ARTICLE, payload };
}

export function setError(error: string) {
  return { type: SET_ERROR, error };
}
