function AppAdd() {
  return (
    <main className="home">
      <h1>Ajouter un article</h1>
      <form>
        <label>
          <div>Nom</div>
          <input type="text" />
        </label>
        <label>
          <div>Prix</div>
          <input type="text" />
        </label>
        <label>
          <div>Quantité</div>
          <input type="text" />
        </label>
        <button>Ajouter</button>
      </form>
    </main>
  );
}

export default AppAdd;