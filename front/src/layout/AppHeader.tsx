import { Link } from "react-router-dom";
import { themeService } from "../services/theme.service";

function AppHeader() {
  function toggleTheme() {
    console.log("toggle the theme");
    themeService.toggle();
  }
  return (
    <header>
      <Link to="/">
        <span className="icon-logo"></span>
        <span>Gestion Stock</span>
      </Link>
      <button onClick={toggleTheme}>Dark/Light</button>
    </header>
  );
}

export default AppHeader;
