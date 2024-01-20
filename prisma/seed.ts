"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const db = new PrismaClient();

export const createProducts = async () => {
  try {
    await db.product.createMany({
      data: [
        {
          name: "Next.js Course",
          description: "Learn Next.js and build a complete application",
          price: 29.99,
          ratings: 4.5,
          discount: 0,
          featuredImage: "https://i.imgur.com/yD1beHb.jpg",
          category: "Web Development",
          company: "y17godara",
          addedBy: "y17godara",
        },
        {
          name: "React.js Course",
          description: "Learn React.js and build a complete application",
          price: 29.99,
          ratings: 4.0,
          discount: 30,
          featuredImage: "https://i.imgur.com/6B0Wbtr.png",
          category: "Web Development",
          company: "y17godara",
          addedBy: "y17godara",
        },
        {
          name: "Node.js Course",
          description: "Learn Node.js and build a Discord Bot",
          price: 29.99,
          ratings: 4.5,
          discount: 50,
          featuredImage: "https://i.imgur.com/6B0Wbtr.png",
          category: "Backend Development",
          company: "y17godara",
          addedBy: "y17godara",
        },
      ],
    });

    return { ok: true, res: "Products created" };
  } catch (err: any) {
    return { ok: false, res: err.message };
  }
};

export const createUsers = async () => {
  const users: any[] = [
    {
      name: "dummy 1",
      email: "dummy1@mail.com",
      emailVerified: new Date(),
      image: "https://i.imgur.com/6B0Wbtr.png",
      password: "12345678",
      isBlocked: false,
      isTwoFactorEnabled: false,
    },
    {
      name: "dummy 2",
      email: "dummy2@gmail.com",
      emailVerified: new Date(),
      image: "https://i.imgur.com/6B0Wbtr.png",
      password: "12345678",
      isBlocked: false,
      isTwoFactorEnabled: false,
    },
    {
      name: "dummy 3",
      email: "dummy3@gmail.com",
      emailVerified: new Date(),
      image: "https://i.imgur.com/6B0Wbtr.png",
      password: "12345678",
      isBlocked: false,
      isTwoFactorEnabled: false,
    },
    // ADMIN
    {
      name: "admin 1",
      email: "admin1@gmail.com",
      emailVerified: new Date(),
      image: "https://i.imgur.com/6B0Wbtr.png",
      password: "12345678",
      isBlocked: false,
      isTwoFactorEnabled: false,
      role: "ADMIN",
    },
    {
      name: "admin 2",
      email: "admin2@gmail.com",
      emailVerified: new Date(),
      image: "https://i.imgur.com/6B0Wbtr.png",
      password: "12345678",
      isBlocked: false,
      isTwoFactorEnabled: false,
      role: "ADMIN",
    },
    {
      name: "admin 3",
      email: "admin3@gmail.com",
      emailVerified: new Date(),
      image: "https://i.imgur.com/6B0Wbtr.png",
      password: "12345678",
      isBlocked: false,
      isTwoFactorEnabled: false,
      role: "ADMIN",
    },
  ];

  try {
    const hashedPasswordUsers = await Promise.all(
      users.map(async (user) => {
        return {
          ...user,
          password: await bcrypt.hash(user.password, 10),
        };
      })
    );

    await db.user.createMany({
      data: hashedPasswordUsers as any,
    });

    return { ok: true, res: "Users / Admins created" };
  } catch (err: any) {
    return { ok: false, res: err.message };
  }
};

export const featuredProducts = async () => {
  try {
    await db.siteFeaturedProducts.createMany({
      data: [
        {
          href: "/products/nextjs-course",
          bannerURL: "https://i.imgur.com/yD1beHb.jpg",
        },
        {
          href: "/products/reactjs-course",
          bannerURL: "https://i.imgur.com/Nwojxxi.jpeg",
        },
        {
          href: "/products/nodejs-course",
          bannerURL: "https://i.imgur.com/OVD7UfQ.jpeg",
        },
      ],
    });

    return { ok: true, res: "Featured Products created" };
  } catch (err: any) {
    return { ok: false, res: err.message };
  }
};

export const siteDeals = async () => {
  try {
    await db.siteDeals.createMany({
      data: [
        {
          discount: 30,
          href: "/products/nextjs-course",
          bannerURL: "https://i.imgur.com/yD1beHb.jpg",
        },
        {
          discount: 30,
          href: "/products/reactjs-course",
          bannerURL: "https://i.imgur.com/Nwojxxi.jpeg",
        },
        {
          discount: 30,
          href: "/products/nodejs-course",
          bannerURL: "https://i.imgur.com/OVD7UfQ.jpeg",
        },
      ],
    });

    return { ok: true, res: "Site Deals created" };
  } catch (err: any) {
    return { ok: false, res: err.message };
  }
};

export const newlyAddedProducts = async () => {
  try {
    await db.newlyAddedProducts.createMany({
      data: [
        {
          href: "/products/nextjs-course",
          bannerURL: "https://i.imgur.com/yD1beHb.jpg",
        },
        {
          href: "/products/reactjs-course",
          bannerURL: "https://i.imgur.com/Nwojxxi.jpeg",
        },
        {
          href: "/products/nodejs-course",
          bannerURL: "https://i.imgur.com/OVD7UfQ.jpeg",
        },
      ],
    });

    return { ok: true, res: "Newly Added Products created" };
  } catch (err: any) {
    return { ok: false, res: err.message };
  }
};

/* Seed */
const seed = async () => {
  console.log("Seeding database...");

  /* Create Products */
  const addProducts = await createProducts();
  if (!addProducts.ok) {
    console.error(addProducts.res);
    return;
  }
  console.log(addProducts.res);

  /* Create Users */
  const addUser = await createUsers();
  if (!addUser.ok) {
    console.error(addUser.res);
    return;
  }
  console.log(addUser.res);

  /* Create FeaturedProducts */
  const addFeaturedProducts = await featuredProducts();
  if (!addFeaturedProducts.ok) {
    console.error(addFeaturedProducts.res);
    return;
  }
  console.log(addFeaturedProducts.res);

  /* Site Deals */
  const addSiteDeals = await siteDeals();
  if (!addSiteDeals.ok) {
    console.error(addSiteDeals.res);
    return;
  }
  console.log(addSiteDeals.res);

  /* Newly Added Products */
  const addNewlyAddedProducts = await newlyAddedProducts();
  if (!addNewlyAddedProducts.ok) {
    console.error(addNewlyAddedProducts.res);
    return;
  }
  console.log(addNewlyAddedProducts.res);

  console.log("Done seeding database.");
  return;
};

/* Run seed */
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
