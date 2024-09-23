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
    <div className="grid grid-cols-3 auto-rows-auto gap-4 h-[600px] overflow-y-auto">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="border-gray-100 relative max-h-[284px] flex w-full max-w-xs flex-col overflow-hidden rounded-lg bg-white shadow-md"
        >
          <a
            className="relative mx-3 mt-3 h-44 flex overflow-hidden rounded-xl"
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
            <span className="absolute left-0 top-0 m-2 rounded-full bg-black px-2 text-center text-xs font-medium text-white">
              {product.category}
            </span>
          </a>
          <div className="mt-4 flex flex-col gap-4 px-5 pb-5">
            <div className="flex w-full flex-row items-center justify-between">
              <h5 className="text-xl tracking-tight text-slate-900">
                {product.name}
              </h5>

              <div className="shadow-1 flex items-center justify-center rounded-xl border border-stroke px-2 py-1 drop-shadow-sm">
                <div className="flex flex-row gap-1 items-center justify-center  align-middle">
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
