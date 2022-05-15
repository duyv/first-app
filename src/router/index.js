import { Route, Routes } from "react-router-dom";
import { Student, Week1, Week2, Week3 } from "../pages/lessons";
import { Film } from "../pages/lessons/film";
import { Week4 } from "../pages/lessons/week-4";
import NoData from "../pages/nodata";

function RootRouter() {
  return (
    <Routes>
      <Route path="/week-1" element={<Week1 />}>
        <Route path=":student_id" element={<Student />} />
      </Route>
      <Route path="/week-2" element={<Week2 />} />
      <Route path="/week-3" element={<Week3 />} />
      <Route path="/week-4" element={<Week4 />} >
        <Route path=":film_id" element={<Film />} />
      </Route>
      <Route path="*" element={<NoData />} />
    </Routes>
  );
}

export default RootRouter;
