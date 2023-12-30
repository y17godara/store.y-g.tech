import prisma from "@/lib/db";
import { type Product } from "@/types/index";

// Dummy Products
const products: Product[] = [
  {
    id: "1",
    productId: "8364256-9295-d1d837c09aea",
    name: "NextJs 14 - Template",
    description:
      "This is Template for NextJs 14 Personal Portfolio Website : Styled Using TailwindCss and Headless UI on Top of Shadcn Ui Library and Used Mongodb and Prisma as Database.",
    price: 10,
    ratings: 4,
    discount: 30,
    image: "https://i.imgur.com/OeuV5Lf.png",
    category: "y17godara",
    company: "y17godara",
    addedBy: "y17godara",
    createdAt: "2023-12-26T02:35:43.322Z",
    updatedAt: "2023-12-26T02:39:29.277Z",
  },
  {
    id: "2",
    productId: "38cd8bfe-eec7-4ba7-9bec-",
    name: "NextJs 14 - Template",
    description:
      "This is Template for NextJs 14 Personal Portfolio Website : Styled Using TailwindCss and Headless UI on Top of Shadcn Ui Library and Used Mongodb and Prisma as Database.",
    price: 10,
    ratings: 5,
    discount: 10,
    image: "https://i.imgur.com/OeuV5Lf.png",
    category: "unknown",
    company: "y17godara",
    addedBy: "unknown",
    createdAt: "2023-12-26T05:04:38.321Z",
    updatedAt: "2023-12-26T05:02:57.410Z",
  },
  {
    id: "3",
    productId: "38c48bfe-ca47b64c7b6",
    name: "NextJs 14 - Template",
    description:
      "This is Template for NextJs 14 Personal Portfolio Website : Styled Using TailwindCss and Headless UI on Top of Shadcn Ui Library and Used Mongodb and Prisma as Database.",
    price: 10,
    ratings: 5,
    discount: 10,
    image: "https://i.imgur.com/OeuV5Lf.png",
    category: "unknown",
    company: "y17godara",
    addedBy: "unknown",
    createdAt: "2023-12-26T05:04:38.321Z",
    updatedAt: "2023-12-26T05:02:57.410Z",
  },
];

export async function GET() {
  console.log("get all products.. ... ... ...");
  try {
    // Add Dummy Products to database as seed
    const seedProducts = await prisma.product.createMany({
      data: products,
      skipDuplicates: true,
    });

    console.log("seedProducts : ", seedProducts);

    return Response.json({ seedProducts }, { status: 200 });
  } catch (error: any) {
    // If something went wrong
    return Response.json(
      { message: "Something went Wrong, Try again Later" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect(); // Disconnect from database
  }
}
