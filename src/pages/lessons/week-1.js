import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClass, addStudent } from "../../redux/actions";

export function Week1() {
  const studentList = useSelector((state) => state.studentReducer);
  const classList = useSelector((state) => state.classReducer);
  const dispatch = useDispatch();

  const onAddClass = (event) => {
    event.preventDefault();
    const name = event.target["name"].value;
    const description = event.target["description"].value;
    event.target.reset();

    dispatch(addClass({ id: classList.length, name: name, description: description }));
  };

  const onAddStudent = (event) => {
    event.preventDefault();
    const name = event.target["name"].value;
    const email = event.target["email"].value;
    const description = event.target["description"].value;
    event.target.reset();

    // dispatch({
    //   type: "ADD_STUDENT",
    //   payload: { id: studentList.length, name: name, email: email, description: description },
    // });

    dispatch(addStudent({ id: studentList.length, name: name, email: email, description: description }));
  };

  useEffect(() => {
    localStorage.setItem("studentList", JSON.stringify(studentList));
  }, [onAddStudent]);

  return (
    <div>
      <h1>Week 1</h1>
      <form className="form-horizontal" onSubmit={onAddStudent}>
        <input className="form-input" type="text" name="name" />
        <input className="form-input" type="text" name="email" />
        <textarea className="form-input" type="text" name="description" />
        <input type="submit" />
      </form>
      <br />
      <br />
      <br />
      <form className="form-horizontal" onSubmit={onAddClass}>
        <input className="form-input" type="text" name="name" />
        <textarea className="form-input" type="text" name="description" />
        <input type="submit" />
      </form>
    </div>
  );
}
