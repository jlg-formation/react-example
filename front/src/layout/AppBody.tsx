import { Route, Routes } from "react-router-dom";
import AppHome from "../routes/AppHome";
import AppLegal from "../routes/AppLegal";

function AppBody() {
  return (
    <Routes>
      <Route path="/" element={<AppHome />}></Route>
      <Route path="/legal" element={<AppLegal />}></Route>
    </Routes>
  );
}

export default AppBody;
