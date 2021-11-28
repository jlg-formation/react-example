import { useState } from "react";
import { Link } from "react-router-dom";

function AppStock() {
  const [loading, setLoading] = useState(true);
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
        {loading ? (
          <span>Loading...</span>
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
              <tr>
                <td className="name">Tournevis</td>
                <td className="price">1.23 €</td>
                <td className="qty">345</td>
              </tr>
              <tr>
                <td className="name">Tournevis</td>
                <td className="price">1.23 €</td>
                <td className="qty">345</td>
              </tr>
              <tr>
                <td className="name">Tournevis</td>
                <td className="price">1.23 €</td>
                <td className="qty">345</td>
              </tr>
              <tr>
                <td className="name">Tournevis</td>
                <td className="price">1.23 €</td>
                <td className="qty">345</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}

export default AppStock;
