export const ADD_ARTICLE = "ADD_ARTICLE";
export const GET_ARTICLE = "GET_ARTICLE";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

export function getArticle() {
    return { type: GET_ARTICLE }
};


