import { themeService } from "../services/theme.service";

function AppHeader() {
  function toggleTheme() {
    console.log("toggle the theme");
    themeService.toggle();
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
