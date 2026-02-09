📘 Pizzería Mamma Mía (Hito 7)
🍕 Descripción del proyecto
En este hito extendí la aplicación de Pizzería Mamma Mía incorporando rutas protegidas, un UserContext para simular autenticación y el consumo de una API REST para obtener el detalle de cada pizza mediante useParams.
​
​
El objetivo fue consolidar el flujo de navegación seguro, diferenciando vistas públicas y privadas, y conectar la vista de detalle con un endpoint real (/api/pizzas/:id) servido con json-server.
​

Para probar el consumo de API, sigue los pasos de “Cómo ejecutar el proyecto con API local”.

🛠 Tecnologías utilizadas
React + Vite

React Router DOM (rutas protegidas, useParams, Navigate, Outlet)
​

React Context API (UserContext, CartContext)
​

json-server como API fake de pizzas

Bootstrap 5

JavaScript ES6

CSS personalizado

📦 Funcionalidades implementadas
✔ 1. Detalle de pizza con useParams y API
Componente: src/pages/Pizza.jsx.

Usa useParams() para leer el id desde la ruta /pizza/:id.
​

Realiza fetch('/api/pizzas/:id') para obtener los datos desde json-server y renderiza: imagen, nombre, descripción, ingredientes y precio formateado en CLP.
​
​

✔ 2. UserContext con token simulado
Archivo: src/context/UserContext.jsx.

Administra:

token: estado booleano que representa si el usuario está autenticado.

login(): cambia token a true.

logout(): cambia token a false.
​

Este contexto se usa en distintas partes de la app para mostrar/ocultar opciones y proteger rutas.
​

✔ 3. Navbar dinámica con autenticación
Archivo: src/components/Navbar.jsx.

Integra UserContext y CartContext.

Comportamiento según token:
​

Siempre visibles: enlaces Home y Cart/Total.

Con token = true: botón Profile y botón Logout (que dispara logout).

Con token = false: botones Login y Register.

✔ 4. Carrito con botón “Pagar” protegido
Archivo: src/pages/Cart.jsx.

Muestra el detalle del carrito: imagen, nombre, cantidad, subtotal por producto y total global usando CartContext.

El botón “Pagar”:

Está deshabilitado cuando token es false.

Muestra un mensaje de aviso indicando que es necesario iniciar sesión para pagar.
​

✔ 5. Rutas protegidas y redirecciones
Archivo de enrutado: src/router/AppRouter.jsx.

Componente de protección: src/router/ProtectedRoute.jsx.
​
​

Comportamiento:

Ruta /profile está protegida mediante ProtectedRoute; si token es false, redirige a /login.
​

Rutas /login y /register:

Si token es true, redirigen automáticamente al home (/), impidiendo que un usuario autenticado vuelva a esas pantallas.
​

Rutas públicas: /, /pizza/:id, /cart y * (404).
​

✔ 6. Carrito global y navegación (heredado del Hito 6)
Se mantiene el CartContext con:

cart, addToCart(), removeFromCart(), total.

La navegación con React Router conserva las vistas:

/, /register, /login, /profile, /cart, /pizza/:id, *.
​

📁 Estructura del proyecto (resumen)
text
src/
  assets/
    img/
  components/
    Navbar.jsx
    Header.jsx
    CardPizza.jsx
    Footer.jsx
  context/
    CartContext.jsx
    UserContext.jsx
  pages/
    Home.jsx
    RegisterPage.jsx
    LoginPage.jsx
    Profile.jsx
    Cart.jsx
    Pizza.jsx
    NotFound.jsx
  router/
    AppRouter.jsx
    ProtectedRoute.jsx
  pizzas.json          // fuente de datos para json-server
  App.jsx
  main.jsx
  index.css
🚀 Cómo ejecutar el proyecto con API local
Para probar la app con el consumo real del endpoint /api/pizzas/:id, necesitas levantar dos servidores: el de la API (json-server) y el de Vite.

1. Clonar el repositorio

git clone https://github.com/patriciovergara/pizzeria-mamma-mia-h7.git
cd pizzeria-mamma-mia-h7
2. Instalar dependencias

npm install
3. Levantar la API de pizzas (json-server)
En una terminal 1, dentro de la raíz del proyecto:


npm run api
Esto ejecuta:


json-server --watch pizzas.json --port 3001
La API quedará disponible en:

http://localhost:3001/pizzas

http://localhost:3001/pizzas/:id

4. Levantar el frontend (Vite)
En una terminal 2, también en la raíz del proyecto:


npm run dev
Abre el enlace que te muestre Vite (por defecto):

http://localhost:5173/

5. Flujo de prueba sugerido
Entra al Home y revisa el listado de pizzas.

Haz clic en “Ver más” (o el enlace configurado) para ir a /pizza/:id y ver el detalle obtenido desde la API.

Agrega algunas pizzas al carrito y verifica que el total se actualiza en el Navbar.

Entra a Cart y prueba el botón “Pagar” con y sin token (según la lógica de login/logout que definas).
​

📦 Cómo generar la versión para producción

npm run build
Vite generará la versión optimizada en la carpeta:


dist/
Para publicar en GitHub Pages deberás configurar el deploy de la carpeta dist y, si quieres mantener el consumo de API en producción, desplegar json-server o una API equivalente en un servicio externo (Render, Railway, etc.) y actualizar las URLs de la API en el frontend.

🎯 Conclusión
En este hito integré rutas protegidas, un UserContext para gestionar el token de autenticación, y el consumo de una API REST para el detalle de pizzas, manteniendo el carrito global y la navegación completa implementada en el hito anterior.
​
​
El resultado es una aplicación más segura y cercana a un escenario real, con control de acceso a secciones privadas, manejo de sesión simulado y una experiencia de compra coherente de extremo a extremo.