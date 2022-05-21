import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudent, removeStudent, setStudent } from "../../redux/actions";

export function Week8() {
  const students = useSelector((state) => state.studentReducer);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then((response) => response.json())
  //       .then((json) => dispatch(setStudent(json)));
  //   }, []);

  useEffect(() => {
    dispatch(fetchStudent());
  }, []);

  const onRemoveStudent = (id) => {
    dispatch(removeStudent(id));
  };

  return (
    <div>
      <h1>Week 8 - Customer List - Redux - Middleware</h1>
      <ul>
        {students.map((student, index) => (
          <div key={index}>
            <span>{student.title}</span>
            <button onClick={() => onRemoveStudent(student.id)}>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
