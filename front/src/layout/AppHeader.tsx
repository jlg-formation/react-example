function AppHeader() {
  function toggleTheme() {
    console.log("toggle theme");
    if (window.document.body.classList.contains("light")) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else if (window.document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }
  return (
    <header>
      <a href="/">
        <span className="icon-logo"></span>
        <span>Gestion Stock</span>
      </a>
      <button onClick={toggleTheme}>Dark/Light</button>
    </header>
  );
}

export default AppHeader;
