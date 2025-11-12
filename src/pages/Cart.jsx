// src/components/Cart.jsx
import { useMemo, useState } from 'react'
import { pizzaCart as initialCart } from '../pizzas'
import { formatCurrencyCLP } from '../utils/format'

const Cart = () => {
  const [items, setItems] = useState(initialCart)

  const inc = (id) => {
    setItems(curr =>
      curr.map(it => it.id === id ? { ...it, qty: it.qty + 1 } : it)
    )
  }

  const dec = (id) => {
    setItems(curr => {
      const next = curr
        .map(it => (it.id === id ? { ...it, qty: it.qty - 1 } : it))
        .filter(it => it.qty > 0) // elimina si qty llega a 0
      return next
    })
  }

  const total = useMemo(
    () => items.reduce((acc, it) => acc + it.price * it.qty, 0),
    [items]
  )

  const pay = () => {
    if (items.length === 0) {
      alert('Tu carrito está vacío.')
      return
    }
    alert(`Pago simulado por $${formatCurrencyCLP(total)}. ¡Gracias por tu compra!`)
  }

  return (
    <div className="container py-4" style={{ maxWidth: 720 }}>
      <h2 className="mb-3">🛒 Carrito</h2>

      {items.length === 0 ? (
        <div className="alert alert-info">No hay productos en el carrito.</div>
      ) : (
        <ul className="list-group mb-3">
          {items.map((it) => (
            <li key={it.id} className="list-group-item d-flex align-items-center">
              <img
                src={it.img}
                alt={it.name}
                style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 8 }}
                className="me-3"
              />
              <div className="me-auto">
                <div className="fw-semibold">{it.name}</div>
                <small className="text-muted">Precio: ${formatCurrencyCLP(it.price)}</small>
              </div>

              <div className="btn-group me-3" role="group" aria-label="Cantidad">
                <button className="btn btn-outline-secondary" onClick={() => dec(it.id)}>−</button>
                <span className="btn btn-outline-secondary disabled">{it.qty}</span>
                <button className="btn btn-outline-secondary" onClick={() => inc(it.id)}>+</button>
              </div>

              <div className="text-end" style={{ width: 110 }}>
                <div className="fw-semibold">
                  ${formatCurrencyCLP(it.price * it.qty)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Total: ${formatCurrencyCLP(total)}</h5>
        <button className="btn btn-dark" onClick={pay}>Pagar</button>
      </div>
    </div>
  )
}

export default Cart
