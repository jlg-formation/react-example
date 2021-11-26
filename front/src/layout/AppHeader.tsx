import logo from "../assets/logo.svg";

function AppHeader() {
  return (
    <header>
      <a href="/">
        <img src={logo} alt="Logo Gestion Stock" />
        <span>Gestion Stock</span>
      </a>
    </header>
  );
}

export default AppHeader;
