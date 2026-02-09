// src/pages/Login.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

const initial = { email: '', password: '' }

const Login = () => {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const { login } = useUser()
  const navigate = useNavigate()

  const onChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const validate = () => {
    const errs = {}
    const emailRegex = /^\S+@\S+\.\S+$/

    if (!form.email.trim()) errs.email = 'El email es obligatorio'
    else if (!emailRegex.test(form.email)) errs.email = 'Formato de email inválido'

    if (!form.password) errs.password = 'La contraseña es obligatoria'
    else if (form.password.length < 6) errs.password = 'Mínimo 6 caracteres'

    return errs
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const v = validate()
    setErrors(v)

    if (Object.keys(v).length === 0) {
      // 🎯 Login exitoso: activamos el token y redirigimos
      login()
      setStatus('success')
      setForm(initial)
      navigate('/profile') // o '/' si prefieres
    } else {
      setStatus('error')
    }
  }

  return (
    <div className="container py-4" style={{ maxWidth: 480 }}>
      <h2 className="mb-3">Login</h2>

      {status === 'success' && (
        <div className="alert alert-success">✅ Login exitoso</div>
      )}
      {status === 'error' && (
        <div className="alert alert-danger">
          ❌ Revisa los campos marcados en rojo
        </div>
      )}

      <form onSubmit={onSubmit} noValidate>
        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="tucorreo@dominio.com"
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder="Mínimo 6 caracteres"
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        <button className="btn btn-dark w-100" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  )
}

export default Login