# Hacker Recipes

Bienvenido a **Hacker Recipes**, el destino definitivo para recetas rápidas y eficientes diseñadas para hackers, desarrolladores y entusiastas de la tecnología que necesitan alimentar sus sesiones de codificación con el mínimo esfuerzo.

## 🚀 Características

- **Navegación Dinámica**: La barra de navegación se genera dinámicamente en función del archivo `pages.json`, lo que garantiza un fácil acceso a todas las recetas.
- **Diseño Responsivo**: El sitio web está diseñado para ser completamente responsivo, proporcionando una experiencia fluida en todos los dispositivos.
- **Recetas Rápidas**: Cada receta está diseñada para ser preparada en menos de 30 minutos, perfecta para esas maratones de codificación nocturnas.
- **Interfaz Minimalista**: Una interfaz limpia y simple que se centra en entregar contenido sin distracciones.

## 🛠️ Cómo Funciona

1. **Navegación Dinámica**: El archivo `script.js` obtiene el archivo `pages.json` y genera dinámicamente la barra de navegación. Cada receta se carga en el área de contenido cuando se hace clic.
2. **Carga de Contenido**: El contenido de cada receta se carga en el área de contenido principal utilizando una etiqueta `<object>`, asegurando una experiencia de usuario fluida y rápida.
3. **Estilo**: El archivo `styles.css` proporciona un diseño elegante y de tema oscuro que es fácil para la vista, perfecto para la navegación nocturna.

## 📂 Estructura del Proyecto

- `index.html`: El punto de entrada principal del sitio web, que contiene la estructura de la página.
- `pages/`: Un directorio que contiene archivos HTML individuales para cada receta.
- `pages.json`: Un archivo JSON que enumera todas las recetas y sus URL correspondientes.
- `script.js`: Un archivo JavaScript responsable de generar dinámicamente la barra de navegación y cargar el contenido.
- `styles.css`: Un archivo CSS que proporciona el estilo para el sitio web.
- `favicon.ico`: El favicon del sitio web.

## 🏁 Cómo Empezar

Para comenzar con Hacker Recipes, simplemente clona el repositorio y abre `index.html` en tu navegador web preferido. La barra de navegación se generará dinámicamente y podrás comenzar a navegar por las recetas de inmediato.

Dado que este proyecto utiliza JavaScript para cargar contenido dinámicamente, necesitarás ejecutar un servidor local para ver el sitio web correctamente. Puedes usar un servidor simple como `http-server` o cualquier otro servidor de tu elección.

---

¡Disfruta de tus sesiones de codificación con deliciosas y rápidas recetas de Hacker Recipes! 🍽️
