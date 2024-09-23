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
import ProductSection from "@/components/shop/productsSection";

const DEFAULT: Product[] = [
  {
    id: "0",
    imageSrc: "/images/shop/capacete.jpeg",
    imageAlt: "capecete",
    name: "Capacete",
    category: "OBRIGATÓRIO",
    color: "Preto",
    stockQnt: 1,
  },
  {
    id: "1",
    imageSrc: "/images/shop/capacete.jpeg",
    imageAlt: "capecete",
    name: "Capacete",
    category: "OBRIGATÓRIO",
    color: "Branco",
    stockQnt: 1,
  },
  {
    id: "2",
    imageSrc: "/images/shop/capacete.jpeg",
    imageAlt: "capecete",
    name: "Capacete",
    category: "OBRIGATÓRIO",
    color: "Branco",
    stockQnt: 1,
  },
  {
    id: "3",
    imageSrc: "/images/shop/capacete.jpeg",
    imageAlt: "capecete",
    name: "Capacete",
    category: "OBRIGATÓRIO",
    color: "Branco",
    stockQnt: 1,
  },
  {
    id: "4",
    imageSrc: "/images/shop/capacete.jpeg",
    imageAlt: "capecete",
    name: "Capacete",
    category: "OBRIGATÓRIO",
    color: "Branco",
    stockQnt: 1,
  },
];

const ShopPage = () => {
  const [productsCart, setproductsCart] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>(DEFAULT);

  const addItemToCart = (product: Product) => {
    setproductsCart((prev) => {
      const newCartList = prev.some((item) => item.id === product.id)
        ? prev.map((item: Product) =>
            item.id === product.id
              ? { ...item, cartQntd: (item.cartQntd || 0) + 1 }
              : item,
          )
        : [...prev, { ...product, cartQntd: 1 }];

      return newCartList;
    });
  };

  const removeItemFromCart = (product: Product) => {
    setproductsCart((prev) => {
      const newCartList = prev.filter((item) => item.id !== product.id);
  
      return newCartList;
    });
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-4">
        <Breadcrumb pageName="Shop" />
        <div className="relative flex flex-row gap-10">
          <div className="mx-auto flex max-w-242.5 justify-start">
            <ProductSection products={products} addItemToCart={addItemToCart} />
          </div>

          <CartSection productsCart={productsCart} removeItemFromCart={removeItemFromCart} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ShopPage;
