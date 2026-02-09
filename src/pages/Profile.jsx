// src/pages/Profile.jsx
import { useUser } from '../context/UserContext'

export default function Profile() {
  // Podrías traer el email desde contexto en el futuro,
  // por ahora lo dejamos estático como antes:
  const email = 'usuario@dominio.com'
  const { logout } = useUser()

  const handleLogout = () => {
    logout() // esto pone token en false
  }

  return (
    <div className="container py-4" style={{ maxWidth: 680 }}>
      <h2>Mi Perfil</h2>
      <p className="mb-3">
        Email: <strong>{email}</strong>
      </p>
      <button
        className="btn btn-outline-dark"
        type="button"
        onClick={handleLogout}
      >
        Cerrar sesión
      </button>
    </div>
  )
}