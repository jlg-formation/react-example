import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { lastValueFrom, timer } from "rxjs";
import { NewArticle } from "../interfaces/Article";
import { articleService } from "../services/article.service";

function AppAdd() {
  const [article, setArticle] = useState<NewArticle>({
    name: "Tournevis",
    qty: 10,
    price: 1.23,
  });

  const [isAdding, setIsAdding] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    console.log("A name was submitted: ", article);
    (async () => {
      setIsAdding(true);
      await lastValueFrom(articleService.add(article));
      await lastValueFrom(timer(2000));
      setIsAdding(false);
      navigate("/stock");
    })();
  };

  const handleChange: (
    attr: keyof NewArticle
  ) => ChangeEventHandler<HTMLInputElement> =
    (attr: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const newArticle = { ...article, [attr]: event.target.value };
      setArticle(newArticle);
    };

  return (
    <main>
      <h1>Ajouter un article</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <div>Nom</div>
          <input
            type="text"
            value={article.name}
            onChange={handleChange("name")}
          />
        </label>
        <label>
          <div>Prix</div>
          <input
            type="number"
            value={article.price}
            onChange={handleChange("price")}
          />
        </label>
        <label>
          <div>Quantité</div>
          <input
            type="number"
            value={article.qty}
            onChange={handleChange("qty")}
          />
        </label>
        <button className="primary">
          <span
            className={isAdding ? "icon-spin5 animate-spin" : "icon-plus"}
          ></span>
          Ajouter
        </button>
      </form>
    </main>
  );
}

export default AppAdd;
