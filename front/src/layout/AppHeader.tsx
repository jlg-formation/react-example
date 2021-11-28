import { Link } from "react-router-dom";
import { themeService } from "../services/theme.service";
import AppToggle from "../widgets/AppToggle";

function AppHeader() {
  function toggleTheme() {
    console.log("toggle the theme");
    themeService.toggle();
  }
  console.log("app header start");
  return (
    <header>
      <Link to="/">
        <span className="icon-logo"></span>
        <span>Gestion Stock</span>
      </Link>
      <AppToggle
        initialState={themeService.theme$.value === "dark"}
        action={toggleTheme}
        label={{
          off: <span className="icon-sun"></span>,
          on: <span className="icon-moon"></span>,
        }}
      ></AppToggle>
    </header>
  );
}

export default AppHeader;
