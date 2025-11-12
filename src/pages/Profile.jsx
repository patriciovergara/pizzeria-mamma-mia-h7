export default function Profile() {
  // Estático por ahora (autenticación viene en los siguientes hitos)
  const email = 'usuario@dominio.com'
  return (
    <div className="container py-4" style={{maxWidth: 680}}>
      <h2>Mi Perfil</h2>
      <p className="mb-3">Email: <strong>{email}</strong></p>
      <button className="btn btn-outline-dark" onClick={() => alert('Cerrar sesión (pendiente)')}>
        Cerrar sesión
      </button>
    </div>
  )
}