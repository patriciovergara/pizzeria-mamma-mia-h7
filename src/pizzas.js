import imgNapolitana from './assets/img/napolitana.jpg'
import imgEspanola   from './assets/img/espanola.jpg'
import imgPeperoni   from './assets/img/peperoni.jpg'
import imgVegetariana from './assets/img/vegetariana.jpeg'
import imgCuatroQuesos from './assets/img/cuatro-quesos.jpeg'
import imgHawaiana from './assets/img/hawaiana.jpg'

export const pizzas = [
  {
    id: 1,
    name: 'Pizza Napolitana',
    price: 5950,
    ingredients: ['mozzarella', 'tomates', 'jamón', 'orégano'],
    img: imgNapolitana,
    desc: 'Clásica y fresca, ideal para los puristas.',
  },
  {
    id: 2,
    name: 'Pizza Española',
    price: 6950,
    ingredients: ['mozzarella', 'gorgonzola', 'parmesano', 'provolone'],
    img: imgEspanola,
    desc: 'Potente mezcla de quesos para los valientes.',
  },
  {
    id: 3,
    name: 'Pizza Peperoni',
    price: 6950,
    ingredients: ['mozzarella', 'peperoni', 'orégano'],
    img: imgPeperoni,
    desc: 'La favorita: crocante y sabrosa.',
  },
  {
    id: 4,
    name: 'Pizza Vegetariana',
    price: 6990,
    ingredients: ['mozzarella', 'pimentón', 'champiñones', 'aceitunas'],
    img: imgVegetariana,
    desc: 'Colorida, liviana y llena de sabor.',
  },
  {
    id: 5,
    name: 'Pizza Cuatro Quesos',
    price: 7490,
    ingredients: ['mozzarella', 'gouda', 'parmesano', 'roquefort'],
    img: imgCuatroQuesos,
    desc: 'Cremosidad al máximo en cada bocado.',
  },
  {
    id: 6,
    name: 'Pizza Hawaiana',
    price: 6590,
    ingredients: ['mozzarella', 'jamón', 'piña'],
    img: imgHawaiana,
    desc: 'Dulce-salada, polémica pero deliciosa.',
  },
]

// Carrito de ejemplo (simulado) para arrancar el componente Cart
export const pizzaCart = [
  { id: 1, name: 'Pizza Napolitana', price: 5950, img: imgNapolitana, qty: 1 },
  { id: 3, name: 'Pizza Peperoni',  price: 6950, img: imgPeperoni,   qty: 2 },
]