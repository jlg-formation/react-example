import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { distinctUntilChanged } from "rxjs";
import { themeService, ThemeValue } from "../services/theme.service";
import AppToggle from "../widgets/AppToggle";

function AppHeader() {
  const [theme, setTheme] = useState<ThemeValue>(themeService.theme$.value);

  useEffect(() => {
    const subscription = themeService.theme$
      .pipe(distinctUntilChanged())
      .subscribe((theme) => {
        setTheme(theme);
      });
    return function cleanup() {
      subscription.unsubscribe();
    };
  });

  function toggleTheme() {
    themeService.toggle();
  }
  return (
    <header>
      <Link to="/">
        <span className="icon-logo"></span>
        <span>Gestion Stock</span>
      </Link>
      <AppToggle
        initialState={theme === "dark"}
        action={toggleTheme}
        label={{
          on: <span className="icon-moon"></span>,
          off: <span className="icon-sun"></span>,
        }}
      ></AppToggle>
    </header>
  );
}

export default AppHeader;
