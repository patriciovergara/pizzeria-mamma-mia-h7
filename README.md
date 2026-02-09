Pizzería Mamma Mía – Hito 7
Aplicación React que simula el sitio web de una pizzería, desarrollada para el Hito 7 – React Router II del bootcamp.
​
En este hito se implementan rutas protegidas, manejo de token mediante contexto y consumo de una API (json-server) para obtener los detalles de cada pizza.
​

Objetivos del hito
Utilizar useParams para obtener el id de la pizza desde la URL y consumir el endpoint GET /api/pizzas/:id.
​

Implementar un UserContext que gestione un token simulado y provea acciones de login y logout.
​

Proteger rutas con React Router y condicionar la navegación según el estado del token.
​
​

Deshabilitar acciones sensibles (como el pago del carrito) cuando el usuario no está autenticado.
​

Características principales
Detalle de pizza

Página Pizza.jsx que usa useParams para obtener el id desde la ruta /pizza/:id.
​

Realiza una petición fetch a /api/pizzas/:id y muestra imagen, descripción, ingredientes y precio formateado.

Autenticación simulada con contexto

UserContext expone token, login y logout.

El token se usa para controlar qué rutas y botones están disponibles, siguiendo los requisitos del hito.
​

Navbar dinámica

Usa UserContext y CartContext.

Muestra siempre los enlaces Home y Total.
​

Con token = true: aparecen Profile y Logout.

Con token = false: aparecen Login y Register.
​

Carrito de compras

Página Cart.jsx con listado de pizzas añadidas, control de cantidades y total formateado.

El botón “Pagar” se deshabilita automáticamente cuando token es false y muestra un mensaje indicando que es necesario iniciar sesión.
​

Rutas protegidas

ProtectedRoute revisa el token y, si es false, redirige a /login.
​
​

La ruta /profile está protegida bajo ProtectedRoute.

Si el usuario ya tiene token = true, las rutas /login y /register redirigen al home (/), impidiendo el acceso a esas páginas.
​

Tecnologías utilizadas
React con Vite.

React Router DOM para enrutamiento y rutas protegidas.
​

Context API para UserContext y CartContext.

Bootstrap 5 para estilos y maquetación.

json-server como API REST fake para pizzas.

Scripts disponibles
En la raíz del proyecto:

npm run dev
Inicia el servidor de desarrollo de Vite en http://localhost:5173 (o el puerto configurado).

npm run api
Inicia json-server viendo el archivo pizzas.json en el puerto 3001, exponiendo los endpoints de la API de pizzas.

npm run build
Genera la versión optimizada para producción.

npm run preview
Sirve localmente la build de producción.

npm run lint
Ejecuta ESLint sobre el proyecto.

Ejecución local con consumo de API
Sigue estos pasos para levantar la aplicación con la API funcionando en local:

Clonar el repositorio


git clone https://github.com/<tu-usuario>/pizzeria-mamma-mia-h6.git
cd pizzeria-mamma-mia-h6
Instalar dependencias


npm install
Levantar la API de pizzas

En una terminal 1 (dentro de la raíz del proyecto):


npm run api
Esto iniciará json-server leyendo pizzas.json y expondrá la API en:

http://localhost:3001/pizzas

http://localhost:3001/pizzas/:id

Levantar el frontend

En una terminal 2 (también en la raíz del proyecto):

bash
npm run dev
Abre en el navegador la URL que indique Vite, por ejemplo:

http://localhost:5173/

Navegación esperada

Desde el Home, puedes ver el listado de pizzas y navegar al detalle /pizza/:id.

En el Navbar verás los botones según el estado del token.

Desde Cart, podrás gestionar el carrito y probar el comportamiento del botón Pagar habilitado/deshabilitado según el token.
​

Notas sobre despliegue
El proyecto está pensado para entorno local con json-server como backend.

GitHub Pages solo sirve contenido estático, por lo que si deseas publicar la app con consumo de API, deberás desplegar json-server o un backend equivalente en un servicio externo (por ejemplo Render o Railway) y actualizar las URLs de la API en el frontend para que apunten a ese dominio.