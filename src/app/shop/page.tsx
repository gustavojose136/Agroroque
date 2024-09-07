"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import CartSection from "@/components/shop/cartSection";

// export const metadata: Metadata = {
//   title: "Next.js Profile | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Profile page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };

const DEFAULT: Product[] = [
  {
    id: "2",
    imageSrc: "/images/shop/capacete.jpeg",
    imageAlt: "capecete",
    name: "Capacete",
    category: "EPI",
    color: "Preto",
    cartQnt: 1,
  },
  {
    id: "2",
    imageSrc: "/images/shop/capacete.jpeg",
    imageAlt: "capecete",
    name: "Capacete",
    category: "EPI",
    color: "Branco",
    cartQnt: 1,
  },
  {
    id: "2",
    imageSrc: "/images/shop/capacete.jpeg",
    imageAlt: "capecete",
    name: "Capacete",
    category: "EPI",
    color: "Branco",
    cartQnt: 1,
  },
];

const count = 9;

const ShopPage = () => {
  const [productsCart, setproductsCart] = useState<Product[]>([]);

  useEffect(() => {
    setproductsCart(DEFAULT);
  }, []);

  useEffect(() => {
    // console.log(productsCart);
  }, [productsCart]);

  return (
    <DefaultLayout>
      <div className="flex flex-row gap-10">
        <div className="mx-auto max-w-242.5">
        <Breadcrumb pageName="Shop" />

          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={index}
                className="border-gray-100 relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg bg-white shadow-md"
              >
                <a
                  className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  href="#"
                >
                  <Image
                    src={"/images/shop/capacete.jpeg"}
                    width={160}
                    height={160}
                    style={{
                      width: "auto",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    alt="profile"
                  />
                  <span className="absolute left-0 top-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    EPI
                  </span>
                </a>
                <div className="mt-4 flex flex-col gap-4 px-5 pb-5">
                  <div className="flex w-full flex-row items-center justify-between">
                    <h5 className="text-xl tracking-tight text-slate-900">
                      Capacete
                    </h5>

                    <div className="flex items-center justify-center rounded-xl border border-stroke p-2 shadow-1">
                      <div className="flex flex-row items-center justify-center gap-1 ">
                        <span className="font-semibold text-black ">5x</span>
                        <span className="text-sm">Estoque</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="hover:bg-gray-700 flex items-center justify-center rounded-md bg-slate-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-950 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <Icon
                      icon="tdesign:cart"
                      className="mr-3 text-xl font-bold text-white"
                    />
                    Adicionar ao carrinho
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CartSection productsCart={productsCart} />
      </div>
    </DefaultLayout>
  );
};

export default ShopPage;
