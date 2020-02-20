import {Article} from "../interfaces/article.interface";

export function mapJson(json: any) {
    return json as Article;
}
