export const fetchStudent = () => async (dispatch) => {
  const json = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await json.json();
  dispatch(setStudent(result));
};

export const setStudent = (students) => {
  return {
    type: "SET_STUDENT",
    payload: students,
  };
};

export const addStudent = (student) => {
  return {
    type: "ADD_STUDENT",
    payload: student,
  };
};

export const removeStudent = (index) => {
  return {
    type: "REMOVE_STUDENT",
    payload: index,
  };
};

export const addClass = (classItem) => {
  return {
    type: "ADD_CLASS",
    payload: classItem,
  };
};

export const showProcess = (show) => {
  return {
    type: "SHOW_PROCESS",
    payload: show,
  };
};

export const setData = (data) => {
  return {
    type: "SET_DATA",
    payload: data,
  };
};

export const fetchData = () => async (dispatch) => {
  dispatch(showProcess(true));
  setTimeout(async () => {
    const json = await fetch("https://jsonplaceholder.typicode.com/photos");
    const result = await json.json();
    dispatch(setData(result));
    dispatch(showProcess(false));
  }, 3000);
};
