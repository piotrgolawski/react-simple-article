import { Article } from '../../interfaces/article.interface';
import isEqual from 'lodash/isEqual';

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
    fetch(
      'https://my12.digitalexperience.ibm.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content' +
        '/fa9519d5-0363-4b8d-8e1f-627d802c08a8'
    )
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

function articleDataValid(json: any) {
  return (
    json &&
    json.name &&
    json.elements &&
    isEqual(Object.keys(json.elements).sort(), ['author', 'body', 'date', 'heading', 'mainImage'])
  );
}
