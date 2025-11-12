import { useEffect, useState } from 'react'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import { API_URL } from '../services/api'
import { formatCurrencyCLP } from '../utils/format'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(`${API_URL}/pizzas`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setPizzas(data) // ← ahora vienen de la API
      } catch (err) {
        setError('No se pudo cargar el catálogo de pizzas.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <div className="container py-4">Cargando pizzas…</div>
  if (error) return <div className="container py-4 alert alert-danger">{error}</div>

  return (
    <>
      <Header />

      <section className="container py-4">
        <div className="row g-4">
          {pizzas.map((pz) => (
            <div className="col-12 col-sm-6 col-lg-4" key={pz.id}>
              <CardPizza
                id={pz.id}
                name={pz.name}
                price={pz.price}
                img={pz.img}
                ingredients={pz.ingredients}
                desc={pz.desc}
                formatCurrencyCLP={formatCurrencyCLP}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
