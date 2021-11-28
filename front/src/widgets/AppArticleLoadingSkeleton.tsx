function AppArticleLoadingSkeleton(): JSX.Element {
  return (
    <table className="skeleton">
      <thead>
        <tr>
          <th className="name">Nom</th>
          <th className="price">Prix</th>
          <th className="qty">Quantité</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3].map((a) => (
          <tr key={a}>
            <td className="name">x</td>
            <td className="price">x</td>
            <td className="qty">x</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AppArticleLoadingSkeleton;
