// src/pages/Home.jsx
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'

export default function Home() {
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        setLoading(true)
        setError('')

        const res = await fetch('/api/pizzas')
        if (!res.ok) {
          throw new Error('No se pudieron cargar las pizzas')
        }

        const data = await res.json()
        setPizzas(data)
      } catch (err) {
        setError(err.message || 'Error al cargar las pizzas')
      } finally {
        setLoading(false)
      }
    }

    fetchPizzas()
  }, [])

  return (
    <>
      <Header />

      <div className="container py-4">
        {loading && (
          <div className="text-center py-5">
            <p>Cargando pizzas...</p>
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-5">
            <p className="text-danger">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="row g-4">
            {pizzas.map((pz) => (
              <div key={pz.id} className="col-12 col-sm-6 col-lg-4">
                <CardPizza {...pz} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

