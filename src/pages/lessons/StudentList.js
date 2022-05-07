import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { removeStudent } from "../../redux/actions";

export function StudentList() {
  const students = useSelector((state) => state.studentReducer);
  const classList = useSelector((state) => state.classReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToDetail = (student) => {
    navigate(`/student-list-redux/${student.id}`, { state: student });
  };

  const onRemoveStudent = (id) => {
    dispatch(removeStudent(id));
  };

  useEffect(() => {
    localStorage.setItem("studentList", JSON.stringify(students));
  }, [onRemoveStudent]);

  return (
    <div>
      <h1>Week 7 - Students List - Redux</h1>
      <ul>
        {students.map((student, index) => (
          <div key={index}>
            <span>{student.name}</span>
            <button onClick={() => goToDetail(student)}>Detail</button>
            <button onClick={() => onRemoveStudent(student.id)}>Remove</button>
          </div>
        ))}
      </ul>
      <ul>
        {classList.map((classItem, index) => (
          <div key={index}>
            <span>{classItem.name}</span>
            <button onClick={() => goToDetail(classItem)}>Detail</button>
          </div>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
