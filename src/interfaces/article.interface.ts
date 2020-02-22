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

export interface DefaultElement {
  value: string;
}

export interface BodyElement {
  values: string[];
}

export interface ImageElement {
  value: {
    leadImage: {
      url: string;
    };
    card: {
      url: string;
    };
    lead: {
      url: string;
    };
  };
}
