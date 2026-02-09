// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { token, logout } = useUser();
  const { total } = useCart(); // total viene de tu CartContext

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        {/* Marca */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <span role="img" aria-label="pizza">
            🍕
          </span>
          <span className="fw-bold">Pizzería Mamma Mía</span>
        </Link>

        {/* Botón hamburguesa para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido colapsable */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Lado izquierdo */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home */}
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-semibold" : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            {/* Carrito / Total */}
            <li className="nav-item">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center gap-1 ${
                    isActive ? "active fw-semibold" : ""
                  }`
                }
              >
                <span role="img" aria-label="carrito">
                  🛒
                </span>
                <span>
                  Total: $
                  {Number(total || 0).toLocaleString("es-CL")}
                </span>
              </NavLink>
            </li>

            {/* Profile solo cuando token = true */}
            {token && (
              <li className="nav-item">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active fw-semibold" : ""}`
                  }
                >
                  <span role="img" aria-label="user">
                    👤
                  </span>{" "}
                  Profile
                </NavLink>
              </li>
            )}
          </ul>

          {/* Lado derecho: Login / Register / Logout */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {token ? (
              // Con token: solo Logout
              <li className="nav-item">
                <button
                  className="btn btn-outline-light"
                  type="button"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            ) : (
              // Sin token: Login + Register
              <>
                <li className="nav-item me-2">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `btn btn-outline-light ${
                        isActive ? "border-2 fw-semibold" : ""
                      }`
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      `btn btn-warning ${isActive ? "fw-semibold" : ""}`
                    }
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
