// src/pages/Cart.jsx
import { useCart } from '../context/CartContext'
import { useUser } from '../context/UserContext'

export default function Cart() {
  const { cart, addToCart, removeFromCart, total } = useCart()
  const { token } = useUser()

  const handlePay = () => {
    if (!token) return
    // acá podrías simular un pago real o solo un alert
    alert('Pago realizado con éxito 😎')
  }

  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <p>Agrega algunas pizzas desde el Home 🍕</p>
      </div>
    )
  }

  return (
    <div className="container py-4" style={{ maxWidth: 800 }}>
      <h2 className="text-center mb-4">🛒 Carrito</h2>

      <table className="table align-middle">
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td style={{ width: '80px' }}>
                <img src={item.img} className="img-fluid rounded" alt={item.name} />
              </td>

              <td>{item.name}</td>

              <td className="text-end">
                ${item.price.toLocaleString('es-CL')}
              </td>

              <td className="text-center">
                <div className="btn-group">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => removeFromCart(item.id)}
                  >
                    -
                  </button>
                  <span className="btn btn-light">{item.qty}</span>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>
              </td>

              <td className="text-end fw-bold">
                ${(item.qty * item.price).toLocaleString('es-CL')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mt-4 gap-3">
        <h3 className="text-md-start text-center mb-0">
          Total: ${total.toLocaleString('es-CL')}
        </h3>

        <div className="text-md-end text-center">
          <button
            className="btn btn-success px-4"
            onClick={handlePay}
            disabled={!token}
          >
            Pagar
          </button>
          {!token && (
            <p className="text-danger small mt-2 mb-0">
              Debes iniciar sesión para poder pagar.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
