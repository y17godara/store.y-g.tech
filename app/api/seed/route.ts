import db from "@/lib/db";
import { Product as ProductType } from "@/types";

export async function GET(req: any, res: any) {
  try {
    // Create Products
    const products = await Promise.all(
      Products.map(async (product) => {
        const createdProduct = await db.product.create({
          data: {
            ...product,
            createdAt: new Date(product.createdAt),
            updatedAt: new Date(product.updatedAt),
            images: {
              create: product.images.map((image) => ({
                ...image,
                createdAt: new Date(),
                updatedAt: new Date(),
              })),
            },
          },
        });

        return createdProduct;
      })
    );

    const data = {
      products: products,
    };

    return { data };
  } catch (error) {
    console.error(error);
    return { error: "Error 503 to Get Latest Deals" };
  }
}

const Products: ProductType[] = [
  {
    id: "clre6jxgc0000y0wxzy3lrwyh",
    productId: "clre6jxgc0000y0wxzy3lrwyh",
    name: "Apple iPhone 11 Pro Max",
    description: "Apple iPhone 11 Pro Max (512GB) - Space Grey",
    price: 1300,
    ratings: 4.5,
    discount: 10,
    featuredImage: "https://i.imgur.com/SyCyk3w.jpeg",
    images: [
      {
        id: "clre6jxgc0000y0wxzy3lrwyh",
        imageUrl: "https://i.imgur.com/SyCyk3w.jpeg",
        productId: "clre6jxgc0000y0wxzy3lrwyh",
        createdAt: "2021-06-01T12:00:00.000Z",
        updatedAt: "2021-06-01T12:00:00.000Z",
      },
    ],
    category: "Electronics",
    company: "Apple",
    addedBy: "y17godara",
    createdAt: "2021-06-01T12:00:00.000Z",
    updatedAt: "2021-06-01T12:00:00.000Z",
  },
  {
    id: "clre6jxgc0000y0wxzy3lrwy2",
    productId: "clre6jxgc0000y0wxzy3lrwy2",
    name: "Apple iPhone 12 Pro Max",
    description: "Apple iPhone 12 Pro Max (512GB) - Space Grey",
    price: 1400,
    ratings: 4.5,
    discount: 10,
    featuredImage: "https://i.imgur.com/UTlc5k4.jpeg",
    images: [
      {
        id: "clre6jxgc0000y0wxzy3lrwyh",
        imageUrl: "https://i.imgur.com/SyCyk3w.jpeg",
        productId: "clre6jxgc0000y0wxzy3lrwyh",
        createdAt: "2021-06-01T12:00:00.000Z",
        updatedAt: "2021-06-01T12:00:00.000Z",
      },
    ],
    category: "Electronics",
    company: "Apple",
    addedBy: "y17godara",
    createdAt: "2021-06-01T12:00:00.000Z",
    updatedAt: "2021-06-01T12:00:00.000Z",
  },
  {
    id: "clre6jxgc0000y0wxzy3lrwy3",
    productId: "clre6jxgc0000y0wxzy3lrwy3",
    name: "Apple iPhone 12 Pro",
    description: "Apple iPhone 12 Pro (512GB) - Space Grey",
    price: 1200,
    ratings: 4.5,
    discount: 10,
    featuredImage: "https://i.imgur.com/ctgDfc5.jpeg",
    images: [
      {
        id: "clre6jxgc0000y0wxzy3lrwyh",
        imageUrl: "https://i.imgur.com/SyCyk3w.jpeg",
        productId: "clre6jxgc0000y0wxzy3lrwyh",
        createdAt: "2021-06-01T12:00:00.000Z",
        updatedAt: "2021-06-01T12:00:00.000Z",
      },
    ],
    category: "Electronics",
    company: "Apple",
    addedBy: "y17godara",
    createdAt: "2021-06-01T12:00:00.000Z",
    updatedAt: "2021-06-01T12:00:00.000Z",
  },
];
