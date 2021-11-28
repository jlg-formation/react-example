import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { lastValueFrom } from "rxjs";
import { Article } from "../interfaces/Article";
import { articleService } from "../services/article.service";

function AppStock() {
  const [articles, setArticles] = useState<Article[] | undefined>(undefined);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const articles = await lastValueFrom(articleService.get());
        setArticles(articles);
      } catch (err) {
        console.log("err: ", err);
        setError("Cannot load the articles");
      }
    })();
  }, []);

  return (
    <main>
      <h1>Liste des articles</h1>
      <div className="content">
        <nav>
          <button>
            <span className="icon-arrows-cw"></span>
          </button>
          <Link to="/stock/add">
            <button>
              <span className="icon-plus"></span>
            </button>
          </Link>
          <button>
            <span className="icon-trash"></span>
          </button>
        </nav>
        {articles === undefined ? (
          error !== "" ? (
            error
          ) : (
            <span>Loading...</span>
          )
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
                <tr key={a.id}>
                  <td className="name">{a.name}</td>
                  <td className="price">{a.price} €</td>
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
