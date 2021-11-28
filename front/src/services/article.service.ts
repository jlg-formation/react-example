import { Observable, switchMap, timeout } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { Article } from "../interfaces/Article";

const url = "http://localhost:3500/api/articles";

class ArticleService {
  get(): Observable<Article[]> {
    return fromFetch(url).pipe(
      switchMap((response) => response.json()),
      timeout(5000)
    );
  }
}

export const articleService = new ArticleService();
