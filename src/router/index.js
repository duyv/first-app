import { Route, Routes } from "react-router-dom";
import { Week1, Week2, Week3 } from "../pages/lessons";
import NoData from "../pages/nodata";

function RootRouter() {
  return (
    <Routes>
      <Route path="/week-1" element={<Week1 />} />
      <Route path="/week-2" element={<Week2 />} />
      <Route path="/week-3" element={<Week3 />} />
      <Route path="*" element={<NoData />} />
    </Routes>
  );
}

export default RootRouter;
