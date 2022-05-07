import { Route, Routes } from "react-router-dom";
import { Student, StudentList, Week1, Week2, Week3 } from "../pages/lessons";
import NoData from "../pages/nodata";

function RootRouter() {
  return (
    <Routes>
      <Route path="/week-1" element={<Week1 />}></Route>
      <Route path="/week-2" element={<Week2 />} />
      <Route path="/week-3" element={<Week3 />} />
      <Route path="/student-list-redux" element={<StudentList />}>
        <Route path=":student_id" element={<Student />} />
      </Route>
      <Route path="*" element={<NoData />} />
    </Routes>
  );
}

export default RootRouter;
