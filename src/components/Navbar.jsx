import { Link, NavLink } from 'react-router-dom'

const active = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'

export default function Navbar() {
  const total = 25950 // estático por ahora, sólo navegación
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Pizzería Mamma Mía</Link>
        <ul className="navbar-nav flex-row gap-3">
          <li className="nav-item"><NavLink className={active} to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink className={active} to="/register">Register</NavLink></li>
          <li className="nav-item"><NavLink className={active} to="/login">Login</NavLink></li>
          <li className="nav-item"><NavLink className={active} to="/profile">Profile</NavLink></li>
          <li className="nav-item">
            <Link className="btn btn-outline-light" to="/cart">🛒 Total: ${total.toLocaleString('es-CL')}</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}