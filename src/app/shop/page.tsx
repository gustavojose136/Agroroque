"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import CartSection from "@/components/shop/cartSection";
import ProductSection from "@/components/shop/productsSection";
import { Icon } from "@iconify/react";
import { showErrorAlert, showSuccessAlert } from "@/components/ui/successAlert";

const DEFAULT: Product[] = [
  {
    id: "0",
    imageSrc: "/images/shop/capacete.jpeg",
    imageAlt: "capecete",
    name: "Capacete",
    category: "OBRIGATÓRIO",
    color: "Preto",
    stockQnt: 1,
    size: "P",
  },
  {
    id: "1",
    imageSrc: "/images/shop/capacete.jpeg",
    imageAlt: "capecete",
    name: "Capacete",
    category: "OBRIGATÓRIO",
    color: "Branco",
    stockQnt: 1,
    size: "P",
  },
  {
    id: "2",
    imageSrc: "/images/shop/capacete.jpeg",
    imageAlt: "capecete",
    name: "Capacete",
    category: "OBRIGATÓRIO",
    color: "Branco",
    stockQnt: 1,
    size: "P",
  },
  {
    id: "3",
    imageSrc: "/images/shop/capacete.jpeg",
    imageAlt: "capecete",
    name: "Capacete",
    category: "OBRIGATÓRIO",
    color: "Branco",
    stockQnt: 1,
    size: "P",
  },
  {
    id: "4",
    imageSrc: "/images/shop/capacete.jpeg",
    imageAlt: "capecete",
    name: "Capacete",
    category: "OBRIGATÓRIO",
    color: "Branco",
    stockQnt: 1,
    size: "P",
  },
];

const ShopPage = () => {
  const [productsCart, setproductsCart] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>(DEFAULT);

  const [openCart, setOpenCart] = useState<boolean>(false);

  const addItemToCart = (product: Product) => {
    setproductsCart((prev) => {
      const newCartList = prev.some(
        (item) => item.id === product.id && item.size === product.size,
      )
        ? prev.map((item: Product) =>
            item.id === product.id && item.size === product.size
              ? { ...item, cartQntd: (item.cartQntd || 0) + 1 }
              : item,
          )
        : [...prev, { ...product, cartQntd: 1 }];

      return newCartList;
    });
  };

  const removeItemFromCart = (product: Product) => {
    setproductsCart((prev) => {
      const newCartList = prev.filter(
        (item) => !(item.id === product.id && item.size === product.size),
      );

      return newCartList;
    });
  };

  const solicitar = () => {
    console.log(productsCart);

    if (productsCart.length <= 0) {
      return showErrorAlert("Opss!", "O carrinho está vazio, selecione algo para solicitar.");
    }

    
    showSuccessAlert(
      "Solicitado!",
      "Aguarde 24h para a solicitação ser avaliada. <br>Obrigado.",
    );
  };

  return (
    <DefaultLayout>
      <div className="relative flex flex-col gap-4">
        <Breadcrumb pageName="Shop" />
        <div className="relative flex flex-col gap-10 md:flex-row">
          <div className="mx-auto flex w-full max-w-242.5 justify-start md:pr-16 xl:pr-0">
            <ProductSection products={products} addItemToCart={addItemToCart} />
          </div>

          <CartSection
            productsCart={productsCart}
            removeItemFromCart={removeItemFromCart}
            solicitar={solicitar}
            openCart={openCart}
            setOpenCart={setOpenCart}
          />
        </div>

        {/* MOBILE CART BUTTON */}
        <div className="absolute right-[1.5rem] top-[1rem] lg:hidden">
          <button
            onClick={() => {
              setOpenCart(!openCart);
            }}
            className="relative rounded-full bg-black p-4 "
          >
            <Icon
              icon="tdesign:cart"
              className="text-xl font-bold text-white"
            />
            {productsCart.length > 0 ? (
              <span
                className={
                  "absolute right-0 top-[0rem] z-1 inline h-5 w-5 rounded-full bg-primary text-sm text-white"
                }
              >
                {productsCart.length}
              </span>
            ) : (
              ""
            )}
          </button>
        </div>
      </div>

      {openCart ? (
        <div
          onClick={() => {
            setOpenCart(false);
          }}
          className="absolute inset-0 z-40 bg-black/50 lg:hidden"
        ></div>
      ) : (
        ""
      )}
    </DefaultLayout>
  );
};

export default ShopPage;
