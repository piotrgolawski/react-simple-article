import { Article } from '../../interfaces/article.interface';
import { articleDataValid } from '../../helpers/validators';
import { apiUri } from '../../env/api';

export const ADD_ARTICLE = 'ADD_ARTICLE';
export const SET_ERROR = 'SET_ERROR';

export function addArticle(payload: Article) {
  return { type: ADD_ARTICLE, payload };
}

export function setError(error: string) {
  return { type: SET_ERROR, error };
}

export function loadArticle() {
  return (dispatch: any) => {
    return fetch(apiUri)
      .then(res => res.json())
      .then(json => {
        if (!articleDataValid(json)) {
          throw new Error('Data not valid!');
        }
        return json;
      })
      .then(json => {
        dispatch(addArticle({ elements: json.elements, title: json.name }));
      })
      .catch(error => {
        dispatch(setError(error));
      });
  };
}
