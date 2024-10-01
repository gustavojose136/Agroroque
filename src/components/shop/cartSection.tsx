"use client";

import { Product } from "@/types/product";
import { Icon } from "@iconify/react";
import { Span } from "next/dist/trace";
import { SetStateAction, useEffect } from "react";

interface CardSectionProps {
  productsCart: Product[];
  removeItemFromCart: (product: Product) => void;
  solicitar: () => void;
  openCart: boolean;
  setOpenCart: (value: SetStateAction<boolean>) => void;
}

const CartSection = ({
  productsCart,
  removeItemFromCart,
  solicitar,
  openCart,
  setOpenCart,
}: CardSectionProps) => {
  useEffect(() => {
    const cartListDiv = document.getElementById("cartList");
    if (cartListDiv) {
      if (productsCart.length > 2) cartListDiv.classList.add("overflow-y-auto");
      else cartListDiv.classList.remove("overflow-y-auto");
    }
  }, [productsCart]);

  useEffect(() => {
    const cartDiv = document.getElementById("cartDiv");

    if (cartDiv) {
      if (!openCart) {
        cartDiv.classList.remove("translate-x-1/2");
        cartDiv.classList.add("translate-x-[100vw]", "lg:translate-x-[70vw]");
      } else {
        cartDiv.classList.remove(
          "translate-x-[100vw]",
          "lg:translate-x-[70vw]",
        );
        cartDiv.classList.add("translate-x-1/2");
      }
    }
  }, [openCart]);

  return (
    <div
      id="cartDiv"
      className="absolute z-50 flex h-auto max-h-[700px] min-w-[250px] max-w-[450px] flex-grow flex-col rounded-xl border border-gray/75 bg-white shadow-xl transition-all duration-500 2xl:relative 2xl:translate-x-0 3xl:max-h-[920px]"
    >
      <div className="z-50 flex-1 px-4 py-6 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-2">
          <div className="flex flex-row justify-between items-center gap-2 w-full">
            <h1 className="text-gray-900 text-xl font-medium">Carrinho</h1>
            <Icon
            onClick={() => {setOpenCart(false)}}
              icon="zondicons:close"
              className="text-xl font-bold text-black lg:hidden"
            />
          </div>
          {productsCart.length < 1 ? (
            <span className="text-gray-900 text-md font-normal">
              Nenhum item adicionado ao carrinho.
            </span>
          ) : (
            ""
          )}
        </div>

        <div
          id="cartList"
          className="mt-8 h-auto max-h-[400px] scroll-smooth py-2 3xl:max-h-[620px]"
        >
          <ul role="list" className="divide-gray-200 -my-6 h-full divide-y">
            {productsCart?.map((product) => (
              <li key={product.id} className="flex h-full py-6">
                <div className="border-gray-200 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="text-gray-900 flex justify-between text-base font-medium">
                      <h3>{product.name}</h3>
                    </div>
                    <p className="text-gray-500 mt-1 text-sm">
                      Cor: {product.color}
                    </p>
                    <p className="text-gray-500 mt-1 text-sm">
                      Tamanho: {product.size}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qntd {product.cartQntd}</p>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={() => {
                          removeItemFromCart(product);
                        }}
                      >
                        <Icon
                          icon="ph:trash-thin"
                          className="text-2xl font-bold"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-gray-200 z-50 border-t px-4 py-6 sm:px-6">
        <div className="text-gray-900 flex justify-between text-xl font-medium">
          <p>
            Total de itens:{" "}
            {productsCart.reduce(
              (total, item) => total + (item.cartQntd || 0),
              0,
            )}
          </p>
        </div>
        <p className="text-gray-500 text-md mt-0.5 text-justify">
          Após solicitar os itens a aprovação pode demorar 24 horas.
        </p>
        <div className="mt-6">
          <button
            onClick={() => {
              solicitar();
            }}
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Solicitar
          </button>
        </div>
      </div>

      {/* CART TABLET BTN */}
      <div className="absolute left-[-2rem] top-[2rem] z-50 hidden lg:block 2xl:hidden">
        <button
          onClick={() => {
           setOpenCart(!openCart)
          }}
          className="relative rounded-full bg-black p-4 "
        >
          {openCart ? (
            <Icon
              icon="zondicons:close"
              className="text-xl font-bold text-white"
            />
          ) : (
            <Icon
              icon="tdesign:cart"
              className="text-xl font-bold text-white"
            />
          )}
          {productsCart.length > 0 ? (
            <span
              className={
                "absolute left-0 top-[0rem] z-1 inline h-5 w-5 rounded-full bg-primary text-sm text-white shadow-md"
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
  );
};

export default CartSection;
