import hero from '../assets/img/header.jpg'

const Header = () => (
  <header className="position-relative text-white">
    <img
      src={hero}
      alt="Pizzería Mamma Mía"
      className="w-100 object-fit-cover"
      style={{ maxHeight: '320px' }}
    />
    <div className="position-absolute top-50 start-50 translate-middle text-center">
      <h1 className="display-5 fw-bold">¡Pizzería Mamma Mía!</h1>
      <p className="lead mb-0">¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </div>
  </header>
)
export default Header
