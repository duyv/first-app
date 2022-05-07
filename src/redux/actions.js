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
