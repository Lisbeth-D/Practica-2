import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const cliente1 = await prisma.cliente.create({
    data: { nombre: "Juan Pérez", email: "juan@mail.com", telefono: "1234567890" },
  });

  const cliente2 = await prisma.cliente.create({
    data: { nombre: "María López", email: "maria@mail.com", telefono: "0987654321" },
  });

  await prisma.pedido.createMany({
    data: [
      { fecha: new Date(), estado: "pendiente", monto: 150, descripcion: "Aceite de motor", clienteId: cliente1.id },
      { fecha: new Date(), estado: "completado", monto: 300, descripcion: "Filtro de aire", clienteId: cliente1.id },
      { fecha: new Date(), estado: "pendiente", monto: 200, descripcion: "Batería 12V", clienteId: cliente2.id },
      { fecha: new Date(), estado: "completado", monto: 500, descripcion: "Juego de llantas", clienteId: cliente2.id },
    ],
  });
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
