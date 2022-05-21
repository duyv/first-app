import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/week-1">Week 1</Link>
        </li>
        <li>
          <Link to="/week-2">Week 2</Link>
        </li>
        <li>
          <Link to="/week-3">Week 3</Link>
        </li>
        <li>
          <Link to="/student-list-redux">Redux</Link>
        </li>
        <li>
          <Link to="/week-8">Week 8</Link>
        </li>
        <li>
          <Link to="/week-9">Week 9</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
