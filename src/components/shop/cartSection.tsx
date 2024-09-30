"use client";

import { Product } from "@/types/product";
import { Icon } from "@iconify/react";
import { Span } from "next/dist/trace";
import { useEffect } from "react";

interface CardSectionProps {
  productsCart: Product[];
  removeItemFromCart: (product: Product) => void;
  solicitar: () => void;
  openCart: boolean;
}

const CartSection = ({
  productsCart,
  removeItemFromCart,
  solicitar,
  openCart,
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
        cartDiv.classList.add("translate-x-[100vw]");
      } else cartDiv.classList.remove("translate-x-[100vw]");
    }
  }, [openCart]);

  return (  
    <div
      id="cartDiv"
      className="absolute md:relative md:translate-x-0 z-50 flex h-auto max-h-[700px] min-w-[250px] max-w-[450px] flex-grow flex-col rounded-xl border border-gray/75 bg-white shadow-xl transition-all duration-500 3xl:max-h-[920px]"
    >
      <div className="flex-1 px-4 py-6 sm:px-6 z-50">
        <div className="flex flex-col items-start justify-between gap-2">
          <h1 className="text-gray-900 text-xl font-medium">Carrinho</h1>
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

      <div className="border-gray-200 border-t px-4 py-6 sm:px-6 z-50">
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
    </div>
  );
};

export default CartSection;
