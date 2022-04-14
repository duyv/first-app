import { Link } from 'react-router-dom'
import './styles.css'

function Navigation() {
  return (
    <nav className="nav-bar">
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
          <Link to="/week-4">Week 4</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
