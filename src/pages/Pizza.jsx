// src/pages/Pizza.jsx
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Pizza() {
  const { id } = useParams()
  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        setLoading(true)
        setError('')

        const res = await fetch(`/api/pizzas/${id}`)
        if (!res.ok) {
          throw new Error('No se pudo obtener la información de la pizza')
        }

        const data = await res.json()
        setPizza(data)
      } catch (err) {
        setError(err.message || 'Error al cargar la pizza')
      } finally {
        setLoading(false)
      }
    }

    fetchPizza()
  }, [id])

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <p>Cargando pizza...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container py-5 text-center">
        <p className="text-danger">{error}</p>
      </div>
    )
  }

  if (!pizza) {
    return (
      <div className="container py-5 text-center">
        <p>Pizza no encontrada</p>
      </div>
    )
  }

  return (
    <div className="container py-4" style={{ maxWidth: 960 }}>
      <div className="row g-4 align-items-center">
        <div className="col-12 col-md-6">
          <img
            src={pizza.img}
            alt={pizza.name}
            className="img-fluid rounded shadow-sm"
          />
        </div>

        <div className="col-12 col-md-6">
          <h2>{pizza.name}</h2>

          {pizza.desc && (
            <p className="text-muted mb-3">{pizza.desc}</p>
          )}

          <h5>Ingredientes</h5>
          <ul className="list-unstyled mb-3">
            {pizza.ingredients?.map((ing) => (
              <li key={ing}>🍕 {ing}</li>
            ))}
          </ul>

          <h4>
            Precio:{' '}
            <strong>
              ${Number(pizza.price || 0).toLocaleString('es-CL')}
            </strong>
          </h4>
        </div>
      </div>
    </div>
  )
}
