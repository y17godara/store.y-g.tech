"use server";

import { PrismaClient } from "@prisma/client";
import { products } from "@/prisma/dummy.data";

const db = new PrismaClient();

const createProducts = async () => {
  try {
    await db.product.createMany({
      data: products as any,
    });

    return { ok: true, res: "Products created" };
  } catch (err: any) {
    return { ok: false, res: err.message };
  }
};

const seed = async () => {
  console.log("Seeding database...");

  const addProducts = await createProducts();
  if (!addProducts.ok) {
    console.error(addProducts.res);
    return;
  }

  console.log(addProducts.res);

  console.log("Done seeding database.");
  return;
};

seed()
  .then(() => {
    db.$disconnect();
    console.log("Disconnected from database.");
    process.exit(0);
  })
  .catch((err: any) => {
    db.$disconnect();
    console.log("Disconnected from database.");
    console.error(err);
    process.exit(1);
  });
