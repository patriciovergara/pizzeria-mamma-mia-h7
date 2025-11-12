import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../services/api'
import { formatCurrencyCLP } from '../utils/format'

export default function Pizza() {
  const { id = 'p001' } = useParams() // si alguien entra a /pizza sin id
  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(`${API_URL}/pizzas/${id}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setPizza(data)
      } catch (err) {
        setError('No se pudo cargar la pizza.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [id])

  if (loading) return <div className="container py-4">Cargando pizza…</div>
  if (error) return <div className="container py-4 alert alert-danger">{error}</div>
  if (!pizza) return null

  return (
    <div className="container py-4" style={{ maxWidth: 960 }}>
      <div className="row g-4 align-items-center">
        <div className="col-12 col-md-6">
          <img src={pizza.img} alt={pizza.name} className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-12 col-md-6">
          <h2 className="mb-2">{pizza.name}</h2>
          <p className="text-muted">{pizza.desc}</p>
          <h5 className="mt-3">Ingredientes</h5>
          <ul className="list-unstyled mb-3">
            {pizza.ingredients?.map((ing, i) => <li key={i}>🍕 {ing}</li>)}
          </ul>
          <h4>Precio: ${formatCurrencyCLP(pizza.price)}</h4>
        </div>
      </div>
    </div>
  )
}