import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function Week1() {
  const [students, setStudents] = useState([
    { id: 0, name: "test 123", email: "test123@gmail.com", description: ",my descriptiton" },
  ]);
  const navigate = useNavigate();

  const onAddStudent = (event) => {
    event.preventDefault();
    const name = event.target["name"].value;
    const email = event.target["email"].value;
    const description = event.target["description"].value;
    event.target.reset();
    setStudents((prevStudent) => [
      ...prevStudent,
      { id: prevStudent.length, name: name, email: email, description: description },
    ]);
  };

  const goToDetail = (student) => {
    navigate(`/week-1/${student.id}`, { state: student });
  };

  return (
    <div>
      <h1>Week 1</h1>
      <form className="form-horizontal" onSubmit={onAddStudent}>
        <input className="form-input" type="text" name="name" />
        <input className="form-input" type="text" name="email" />
        <textarea className="form-input" type="text" name="description" />
        <input type="submit" />
      </form>

      <ul>
        {students.map((student, index) => (
          <div key={index}>
            <span>{student.name}</span>
            <button onClick={() => goToDetail(student)}>Detail</button>
          </div>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
