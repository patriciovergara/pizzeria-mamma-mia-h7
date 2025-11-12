import PropTypes from 'prop-types'
import { formatCurrencyCLP } from '../utils/format'

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card pizza-card h-100">
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body d-flex flex-column">
        <h5 className="pizza-title">{name}</h5>

        <div className="section-divider"></div>

        <div className="ing-title">Ingredientes:</div>

        <div className="ing-row pizza-subtle">
          <span className="ing-bullet">🧀</span>
          <span>{ingredients.join(', ')}</span>
        </div>

        <div className="price-line">Precio: ${formatCurrencyCLP(price)}</div>

        <div className="btns-row mt-auto">
          <button className="btn btn-outline-secondary">Ver Más »»</button>
          <button className="btn btn-dark">Añadir 🧾</button>
        </div>
      </div>
    </div>
  )
}

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
}

export default CardPizza
