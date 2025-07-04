# Il Vero Ristorante

Aplicación web para un restaurante italiano que permite ver el menú y gestionar los platos desde un panel de administración.

## Características

- Catálogo de platos organizados por categorías
- Panel de administración protegido
- Gestión completa de platos (CRUD)
- Diseño responsive
- Interfaz moderna y amigable

## Tecnologías

- Frontend:
  - React
  - React Router
  - Tailwind CSS
  - Axios

- Backend:
  - Node.js
  - Express
  - MongoDB
  - JWT para autenticación

## Requi

- Node.js (v14 o superior)
- MongoDB / Atlas
- npm o yarn

## Ejecución

1. Iniciar el backend:
```bash
cd backend
npm run dev
```

2. En otra terminal, iniciar el frontend:
```bash
npm run dev
```

3. Crear usuario administrador:
```bash
cd backend
npm run create-admin
```

## Acceso al Panel de Administración

- URL: `/login`
- Usuario: `admin`
- Contraseña: `admin123`

## Estructura del Proyecto

```
APIS_UADE/
├── src/                    # Frontend source
│   ├── components/        # Componentes React
│   ├── services/         # Servicios API
│   ├── config/          # Configuración
│   └── assets/         # Recursos estáticos
│
└── backend/             # Backend source
    ├── src/           # Código fuente
    ├── routes/       # Rutas API
    ├── controllers/ # Controladores
    ├── models/     # Modelos MongoDB
    └── scripts/   # Scripts útiles
```

## Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request