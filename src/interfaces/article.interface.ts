export interface Article {
  title: string;
  elements: {
    heading: DefaultElement;
    author: DefaultElement;
    body: BodyElement;
    date: DefaultElement;
    mainImage: ImageElement;
  };
}
// TODO remove elementType
export interface DefaultElement {
  elementType: string;
  value: string;
}

export interface BodyElement {
  elementType: string;
  values: string[];
}

export interface ImageElement {
  elementType: string;
  value: {
    leadImage: {
      url: string;
    };
  };
}
