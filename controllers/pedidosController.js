import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// GET /pedidos → lista de pedidos
export const getPedidos = async (req, res) => {
  try {
    let { clienteId, estado, sort = "fecha", order = "desc", page = 1, limit = 10 } = req.query;
    page = Number(page);
    limit = Number(limit);

    const pedidos = await prisma.pedido.findMany({
      where: {
        ...(clienteId && { clienteId: Number(clienteId) }),
        ...(estado && { estado }),
      },
      orderBy: { [sort]: order },
      skip: (page - 1) * limit,
      take: limit,
      include: { cliente: true },
    });

    // Mapear fechas a formato legible
    const pedidosFormateados = pedidos.map(p => ({
      ...p,
      fecha: p.fecha.toLocaleString()  // convierte a fecha y hora local legible
    }));

    res.json(pedidosFormateados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener pedidos" });
  }
};

// GET /pedidos/:id → pedido específico
export const getPedidoById = async (req, res) => {
  try {
    const { id } = req.params;

    const pedido = await prisma.pedido.findUnique({
      where: { id: Number(id) },
      include: { cliente: true },
    });

    if (!pedido) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }

    // Formatear fecha
    const pedidoFormateado = {
      ...pedido,
      fecha: pedido.fecha.toLocaleString()
    };

    res.json(pedidoFormateado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener pedido" });
  }
};
