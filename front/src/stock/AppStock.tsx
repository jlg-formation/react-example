import { useCallback, useContext, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import { lastValueFrom } from "rxjs";
import { ArticleContext } from "../context";
import { Article } from "../interfaces/Article";
import AppArticleLoadingSkeleton from "../widgets/AppArticleLoadingSkeleton";

function AppStock() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string>("");
  const [selectedArticles, setSelectedArticles] = useState(new Set<Article>());
  const [isRemoving, setIsRemoving] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const articleService = useContext(ArticleContext);

  const toggle = (a: Article) => () => {
    selectedArticles.has(a)
      ? selectedArticles.delete(a)
      : selectedArticles.add(a);
    setSelectedArticles(new Set(selectedArticles));
  };

  const remove = () => {
    (async () => {
      setIsRemoving(true);
      const ids = [...selectedArticles].map((a) => a.id);
      await lastValueFrom(articleService.remove(ids));
      await refresh();
      setIsRemoving(false);
    })();
  };

  const refresh = useCallback(async () => {
    try {
      setIsRefreshing(true);
      const articles = await lastValueFrom(articleService.get());
      setArticles(articles);
    } catch (err) {
      console.error("err: ", err);
      setError("Cannot load the articles");
    } finally {
      setIsRefreshing(false);
    }
  }, [articleService]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <main>
      <h1>Liste des articles</h1>
      <div className="content">
        <nav>
          <button onClick={refresh}>
            <span
              className={
                isRefreshing ? "icon-spin5 animate-spin" : "icon-arrows-cw"
              }
            ></span>
          </button>
          <Link to="/stock/add">
            <button>
              <span className="icon-plus"></span>
            </button>
          </Link>
          {selectedArticles.size > 0 && (
            <button onClick={remove}>
              <span
                className={
                  isRemoving ? "icon-spin5 animate-spin" : "icon-trash"
                }
              ></span>
            </button>
          )}
        </nav>
        {isRefreshing ? (
          <AppArticleLoadingSkeleton />
        ) : error !== "" ? (
          error
        ) : (
          <table>
            <thead>
              <tr>
                <th className="name">Nom</th>
                <th className="price">Prix</th>
                <th className="qty">Quantité</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((a) => (
                <tr
                  key={a.id}
                  onClick={toggle(a)}
                  className={selectedArticles.has(a) ? "selected" : ""}
                >
                  <td className="name">{a.name}</td>
                  <td className="price">
                    <NumberFormat
                      value={a.price}
                      displayType={"text"}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      thousandSeparator={true}
                      suffix={" €"}
                    />
                  </td>
                  <td className="qty">{a.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}

export default AppStock;
