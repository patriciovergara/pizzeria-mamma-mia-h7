// src/pages/NotFound.jsx
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-5">404</h1>
      <p className="lead">La página que buscas no existe.</p>
      <Link className="btn btn-dark" to="/">Volver al Home</Link>
    </div>
  )
}
