"use client";

import { Product } from "@/types/product";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

interface ProductSectionProps {
  products: Product[];
  addItemToCart: (product: Product) => void;
}

function ProductSection({ products, addItemToCart }: ProductSectionProps) {
  return (
    <div className="grid h-[600px] w-full auto-rows-auto grid-cols-1 gap-4 overflow-y-auto px-2 md:grid-cols-3">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="border-gray-100 relative flex max-h-[284px] w-full max-w-sm flex-col rounded-lg bg-white shadow-md md:max-w-xs"
        >
          <div className="relative mx-3 mt-3 flex h-44 overflow-hidden rounded-xl">
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
            <span className="absolute left-0 top-0 m-2 rounded-full bg-black px-2 text-center text-xs font-medium text-white">
              {product.category}
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-4 px-5 pb-5">
            <div className="flex w-full flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-center gap-1  align-middle">
                <span className="font-semibold text-black">
                  Tamanho: {product.size}
                </span>
              </div> <br/>
              <h5 className="text-xl tracking-tight text-slate-900">
                {product.name}
              </h5>

              <div className="shadow-1 flex items-center justify-center rounded-xl border border-stroke px-2 py-1 drop-shadow-sm">
                <div className="flex flex-row items-center justify-center gap-1  align-middle">
                  <span className="font-semibold text-black">
                    {product.stockQnt}x
                  </span>
                  <span className="text-sm">Estoque</span>
                </div>
              </div>
            </div>

            <button
              className="hover:bg-gray-700 flex items-center justify-center rounded-md bg-slate-800 px-5 py-2.5 text-center text-xs font-medium text-white hover:bg-slate-950 focus:outline-none"
              onClick={() => {
                addItemToCart(product);
              }}
            >
              ADICIONAR
              <Icon
                icon="tdesign:cart"
                className="ml-3 text-lg font-bold text-white"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductSection;
