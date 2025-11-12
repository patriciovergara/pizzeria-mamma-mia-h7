# 🍕 Pizzería Mamma Mía – Hito 5

En este quinto hito del proyecto React + Vite, integré React Router DOM para manejar la navegación entre páginas sin recargar el sitio.
Aprendí a estructurar mi aplicación como una SPA (Single Page Application), organizando las vistas dentro de src/pages/ y conectándolas mediante rutas declaradas en App.jsx.

Este hito se enfoca completamente en el frontend y la navegación, por lo que no se requiere el backend activo.

⚙️ 1) Instalación y configuración del router

Desde la terminal del proyecto ejecuté:

npm i react-router-dom


Luego configuré el router en src/main.jsx utilizando BrowserRouter con basename para asegurar compatibilidad con GitHub Pages:

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
  </BrowserRouter>
)

🧱 2) Organización del proyecto

Reorganicé los componentes y páginas en la siguiente estructura:

src/
├─ components/
│  ├─ Navbar.jsx
│  ├─ Footer.jsx
│  └─ CardPizza.jsx
├─ pages/
│  ├─ Home.jsx
│  ├─ RegisterPage.jsx
│  ├─ LoginPage.jsx
│  ├─ Cart.jsx
│  ├─ Pizza.jsx
│  ├─ Profile.jsx
│  └─ NotFound.jsx
├─ services/
│  └─ api.js
├─ App.jsx
└─ main.jsx


Con esto logré mantener una estructura limpia y fácil de mantener.

🚏 3) Rutas creadas en App.jsx

Agregué todas las rutas solicitadas por el enunciado:

import { Routes, Route, Navigate } from 'react-router-dom'

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/register" element={<RegisterPage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/pizza/:id" element={<Pizza />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/404" element={<NotFound />} />
  <Route path="*" element={<Navigate to="/404" replace />} />
</Routes>


Esto permite navegar por todas las páginas desde la barra de direcciones o usando los enlaces del menú.

🧭 4) Navbar con navegación dinámica

En el componente Navbar.jsx utilicé Link y NavLink para navegar entre las páginas sin recargar el sitio:

<NavLink to="/">Home</NavLink>
<NavLink to="/register">Register</NavLink>
<NavLink to="/login">Login</NavLink>
<NavLink to="/profile">Profile</NavLink>
<Link to="/cart">🛒 Total: $25.950</Link>


El botón del carrito lleva a la ruta /cart, y tal como pide la pauta, no incluí un link directo a /pizza/p001 en el menú.

❌ 5) Página 404 – NotFound.jsx

Creé una página simple para manejar rutas no existentes con un enlace para volver al Home:

import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1>404</h1>
      <p>La página que buscas no existe.</p>
      <Link className="btn btn-dark" to="/">Volver al Home</Link>
    </div>
  )
}


Probé ingresando a rutas inexistentes (por ejemplo /xyz) y se redirige correctamente a /404.

👤 6) Página Profile.jsx

Agregué una vista estática con un email de ejemplo y un botón de cierre de sesión:

export default function Profile() {
  const email = 'usuario@dominio.com'
  return (
    <div className="container py-4" style={{ maxWidth: 600 }}>
      <h2>Mi Perfil</h2>
      <p>Email: <strong>{email}</strong></p>
      <button className="btn btn-outline-dark">Cerrar sesión</button>
    </div>
  )
}


El botón es decorativo, ya que la autenticación se implementará en hitos posteriores.

🧩 7) Comportamiento de las rutas

Verifiqué que al navegar desde el Navbar o escribir directamente las rutas:

/ → muestra el Home

/register → formulario de registro

/login → formulario de inicio de sesión

/cart → carrito

/pizza/p001 → detalle de la pizza

/profile → perfil del usuario

/404 → página de error

La URL cambia sin recargar el sitio (funcionamiento SPA correcto).

🧪 8) Pruebas realizadas

Para comprobar el router:

Corrí el frontend con npm run dev.

Navegué entre las rutas desde el Navbar.

Observé en el navegador que no se recargaba la página completa (SPA).

Ingresé manualmente a rutas inexistentes (/algo) → redirige a /404.

Revisé cada vista: RegisterPage, LoginPage, Profile, Cart, etc.

No fue necesario tener el backend activo para estas pruebas.

🌐 9) Despliegue en GitHub Pages

En vite.config.js configuré:

export default defineConfig({
  plugins: [react()],
  build: { outDir: 'docs' },
  base: '/pizzeria-mamma-mia-h5/'
})


Luego ejecuté:

npm run build
git add .
git commit -m "build: hito 5 router + pages"
git push


Y activé GitHub Pages →
Branch: main
Folder: /docs

[#Ver demo en GitHub Pages](https://patriciovergara.github.io/pizzeria-mamma-mia-h5/)

🧠 10) Conclusión

En este hito implementé con éxito React Router DOM, estructurando mi aplicación como una SPA, gestionando rutas, páginas de error y navegación sin recarga.
Además dejé el proyecto preparado para futuras funcionalidades (autenticación, carrito y API real).

Autor: Patricio Vergara
Proyecto académico — Hito 5 (React + Vite + React Router DOM) 🍕