# API REST CRUD de Pedidos y Clientes

## Descripción
Esta práctica consiste en una API REST construida con Express y Prisma sobre SQLite, que permite gestionar clientes y pedidos.
Cada pedido incluye datos de cliente, estado, monto y descripción del producto o servicio adquirido. 
---
## Tecnologías
- Node.js
- Express 5
- Prisma ORM
- SQLite
- Dotenv
## Estructura del proyecto
practica2-bdd/
│
├─ prisma/
│   ├─ schema.prisma      # Definición de modelos y base de datos
│   └─ seed.js            # Datos iniciales para poblar la BD
│
├─ routes/
│   └─ pedidos.js         # Rutas de pedidos
│
├─ controllers/
│   └─ pedidosController.js  # Lógica de consultas y filtros
│
├─ server.js              # Configuración de Express
├─ package.json
└─ .env                   # Variables de entorno

## Cliente
| Campo    | Tipo   | Notas               |
| -------- | ------ | ------------------- |
| id       | Int    | Autoincremental, PK |
| nombre   | String | Nombre completo     |
| email    | String | Único               |
| telefono | String | Opcional            |

## Pedido 
| Campo       | Tipo     | Notas                                 |
| ----------- | -------- | ------------------------------------- |
| id          | Int      | Autoincremental, PK                   |
| fecha       | DateTime | Fecha de creación (UTC)               |
| estado      | String   | Pendiente / Completado                |
| monto       | Float    | Monto del pedido                      |
| descripcion | String   | Descripción del pedido (ej. “Aceite”) |
| clienteId   | Int      | FK al cliente                         |

## Instalación

1. Clonar repositorio:
git clone https://github.com/Lisbeth-D/Practica-2.git
cd practica2-bdd

2. Instalar dependencias:
npm install
3. Crear archivo .env con:
DATABASE_URL="file:./dev.db"

## Prisma
1. Generar cliente Prisma:
npx prisma generate

2. Aplicar migraciones:
npx prisma migrate dev --name init

3. Poblar la base de datos (seed):
npx prisma db seed

4. Visualizar datos:
npx prisma studio


## 
| Script                   | Descripción                              |
| ------------------------ | ---------------------------------------- |
| `npm run dev`            | Ejecuta el servidor en modo desarrollo   |
| `npm start`              | Ejecuta el servidor                      |
| `npx prisma migrate dev` | Ejecuta migraciones de Prisma            |
| `npx prisma db seed`     | Población de datos iniciales             |
| `npx prisma studio`      | Abre Prisma Studio para visualizar la BD |
 
## Endpoints
1. Listar todos los pedidos
GET /pedidos

Query Params opcionales:
clienteId → Filtrar por cliente
estado → Filtrar por estado (pendiente / completado)
sort → Campo para ordenar (default: fecha)
order → asc / desc
page → Página (paginación)
limit → Cantidad de resultados por página

## Ejemplos
GET /pedidos?estado=pendiente&sort=fecha&order=desc&page=1&limit=10
Pedido por ID:
GET /pedidos/:id

