import express from "express";
import { getPedidos, getPedidoById } from "../controllers/pedidosController.js";

const router = express.Router();

router.get("/", getPedidos);      // GET /pedidos
router.get("/:id", getPedidoById); // GET /pedidos/:id

export default router;
