import { Observable, switchMap, timeout } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { Article, NewArticle } from "../interfaces/Article";

const url = "http://localhost:3500/api/articles";

class ArticleService {
  add(article: NewArticle): Observable<void> {
    return fromFetch(url, {
      method: "POST",
      body: JSON.stringify(article),
      headers: {
        "Content-Type": "application/json",
      },
    }).pipe(
      switchMap((response) => response.json()),
      timeout(5000)
    );
  }

  get(): Observable<Article[]> {
    return fromFetch(url).pipe(
      switchMap((response) => response.json()),
      timeout(5000)
    );
  }

  remove(ids: string[]) {
    console.log("ids: ", ids);
    return fromFetch(url, {
      method: "DELETE",
      body: JSON.stringify(ids),
      headers: {
        "Content-Type": "application/json",
      },
    }).pipe(
      switchMap((response) => response.text()),
      timeout(5000)
    );
  }
}

export const articleService = new ArticleService();
