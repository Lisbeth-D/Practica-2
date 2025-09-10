# API REST – CRUD de Productos (AutoZone)

## Descripción
Este proyecto implementa una **API REST** en **Node.js + Express** para gestionar productos de **AutoZone**.  
Incluye:

- Validaciones con **Zod**  
- Manejo de errores estandarizados  
- Paginación y ordenamiento básico  
---

## Estructura del proyecto
practica1-crud/
├─ src/
│ ├─ controllers/
│ │ └─ productos.js
│ ├─ models/
│ │ └─ productos.js
│ ├─ routes/
│ │ └─ productos.js
│ ├─ services/
│ │ └─ productos.js
│ └─ index.js
├─ package.json
└─ README.md

---

## Instalación

1. Clonar repositorio:
   ```bash
   git clone <URL_DEL_REPO>
   cd practica1-crud

2. Instalar dependencias:
npm install
3. Ejecutar en modo desarrollo:
npm run dev

## Endpoints
1. Listar productos
GET /productos?page=1&limit=10&sort=precio,desc

2. Obtener producto por ID
GET /productos/:id
3. Crear producto
POST /productos
4. Actualizar producto
PUT /productos/:id
5. Eliminar producto
DELETE /productos/:id

## Validaciones
nombre → obligatorio

precio → mayor que 0

stock → mayor o igual a 0

## Ejemplos de Prueba (cURL – AutoZone)
## Crear producto 
1. curl -X POST http://localhost:3000/productos -H "Content-Type: application/json" -d "{\"nombre\":\"Batería LTH 12V\",\"precio\":2500,\"stock\":12}"
2. curl -X POST http://localhost:3000/productos -H "Content-Type: application/json" -d "{\"nombre\":\"Aceite Mobil 5W-30\",\"precio\":550,\"stock\":40}"
3. curl -X POST http://localhost:3000/productos -H "Content-Type: application/json" -d "{\"nombre\":\"Balatas delanteras Nissan Sentra\",\"precio\":1200,\"stock\":20}"
4. curl -X POST http://localhost:3000/productos -H "Content-Type: application/json" -d "{\"nombre\":\"Filtro de aire Toyota Corolla\",\"precio\":350,\"stock\":35}"
5. curl -X POST http://localhost:3000/productos -H "Content-Type: application/json" -d "{\"nombre\":\"Líquido de frenos DOT 4\",\"precio\":180,\"stock\":50}"

## Listar todos los productos
6. curl http://localhost:3000/productos
7. curl "http://localhost:3000/productos?page=1&limit=2"
8. curl http://localhost:3000/productos?sort=precio,asc
9. curl http://localhost:3000/productos?sort=precio,desc


## Obtener producto por ID
10. curl http://localhost:3000/productos/1
11. curl http://localhost:3000/productos/999


## Actualizar producto
12. curl -X PUT http://localhost:3000/productos/2 -H "Content-Type: application/json" -d "{\"stock\":60}"
13. curl -X PUT http://localhost:3000/productos/3 -H "Content-Type: application/json" -d "{\"nombre\":\"Balatas delanteras Chevrolet Aveo\",\"precio\":950}"

## Eliminar producto 
14. curl -X DELETE http://localhost:3000/productos/4
15. curl -X DELETE http://localhost:3000/productos/500
