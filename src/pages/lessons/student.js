import { useLocation, useParams } from "react-router-dom";

export function Student() {
  const params = useParams();
  const location = useLocation();
  const { name, email, description } = location.state || {};
  return (
    <div>
      <h1>Student: {params.student_id}</h1>
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>Description: {description}</h1>
    </div>
  );
}
