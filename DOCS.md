# Documentación del Proyecto RESTO WEB

## Descripción General
RESTO WEB es una aplicación web moderna desarrollada con React y Vite, que utiliza Tailwind CSS para el estilizado y React Router para la navegación. La aplicación está diseñada para mostrar recetas y detalles culinarios.

## Estructura del Proyecto

### Directorios Principales
- `/src`: Contiene todo el código fuente de la aplicación
  - `/components`: Componentes reutilizables
  - `/layouts`: Estructuras de layout
  - `/assets`: Recursos estáticos

### Archivos Principales
- `index.html`: Punto de entrada HTML
- `main.jsx`: Punto de entrada de la aplicación React
- `App.jsx`: Componente principal de la aplicación
- `vite.config.js`: Configuración de Vite
- `tailwind.config.js`: Configuración de Tailwind CSS

## Tecnologías Utilizadas

### Frontend
- React 18.2.0
- React Router DOM 7.5.3
- Tailwind CSS 3.3.3
- React Icons 4.11.0
- React Scroll 1.9.0

### Herramientas de Desarrollo
- Vite 4.4.5
- ESLint
- PostCSS
- Autoprefixer

## Instalación y Ejecución

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Para producción:
   ```bash
   npm run build
   npm run preview
   ```

## Estructura de Componentes

Los componentes principales se encuentran en `/src/components` y incluyen:
- `Navbar.jsx`: Barra de navegación principal
- `RecipeDetails.jsx`: Componente para mostrar detalles de recetas

## Estilos y Diseño

- Se utiliza Tailwind CSS para el estilizado
- Los estilos globales se encuentran en `src/index.css`
- Componentes específicos tienen sus propios archivos CSS cuando es necesario

## Navegación

La aplicación utiliza React Router DOM para manejar la navegación entre diferentes secciones de la aplicación.

## Mejores Prácticas

- Uso de componentes reutilizables
- Separación clara de responsabilidades
- Estilos consistentes con Tailwind
- Manejo de rutas con React Router
- Optimización de rendimiento con Vite

## Contribución

Para contribuir al proyecto:
1. Crear una rama para nuevas características
2. Realizar los cambios necesarios
3. Ejecutar los tests
4. Crear un Pull Request
