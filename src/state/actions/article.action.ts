import { Article } from '../../interfaces/article.interface';
import { articleDataValid } from '../../helpers/validators';
import { fakeUri } from '../../env/api';

export const SET_ARTICLE = 'SET_ARTICLE';
export const SET_ERROR = 'SET_ERROR';

export function setArticle(payload: Article) {
  return { type: SET_ARTICLE, payload };
}

export function setError(error: string) {
  return { type: SET_ERROR, error };
}

export function loadArticle() {
  return (dispatch: any) => {
    return fetch(fakeUri)
      .then(res => res.json())
      .then(json => {
        if (!articleDataValid(json)) {
          throw new Error('Data not valid!');
        }
        return json;
      })
      .then(json => {
        dispatch(setArticle({ elements: json.elements, title: json.name }));
      })
      .catch(error => {
        dispatch(setError(error));
      });
  };
}
