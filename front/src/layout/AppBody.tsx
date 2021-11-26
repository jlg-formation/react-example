import { Route, Routes } from "react-router-dom";
import AppHome from "../routes/AppHome";
import AppLegal from "../routes/AppLegal";
import AppAdd from "../stock/AppAdd";
import AppStock from "../stock/AppStock";

function AppBody() {
  return (
    <Routes>
      <Route path="/" element={<AppHome />}></Route>
      <Route path="/legal" element={<AppLegal />}></Route>
      <Route path="/stock" element={<AppStock />}></Route>
      <Route path="/stock/add" element={<AppAdd />}></Route>
    </Routes>
  );
}

export default AppBody;
