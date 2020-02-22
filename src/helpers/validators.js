import isEqual from 'lodash/isEqual';

export function articleDataValid(json) {
  return (
    json &&
    json.name &&
    json.elements &&
    isEqual(Object.keys(json.elements).sort(), ['author', 'body', 'date', 'heading', 'mainImage'])
  );
}
