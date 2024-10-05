"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import CartSection from "@/components/shop/cartSection";
import ProductSection from "@/components/shop/productsSection";
import { Icon } from "@iconify/react";
import { showErrorAlert, showSuccessAlert } from "@/components/ui/successAlert";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_ROUTE = API_URL + "/Equipamento";

const ShopPage = () => {
  const [productsCart, setproductsCart] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [openCart, setOpenCart] = useState<boolean>(false);

  // Função para carregar os produtos
  const getProdutos = async () => {
    try {
      const response = await axios.get(API_ROUTE); // Chama a API para obter os produtos
      console.log(response.data);
      const produtos = response.data.produtos[0].produtos[0].produtos;
      setProducts(produtos); // Atualiza o estado com os produtos recebidos da API
    } catch (error: any) {
      console.error("Erro ao carregar os produtos:", error);
      showErrorAlert("Erro!", "Aconteceu um erro ao carregar os produtos. Tente novamente.");
    }
  };

  // useEffect para carregar os produtos assim que a página for carregada
  useEffect(() => {
    getProdutos(); // Chama a função ao carregar a página
  }, []); // O array vazio [] garante que isso só será executado uma vez, quando o componente for montado

  const addItemToCart = (product: Product) => {
    setproductsCart((prev) => {
      const newCartList = prev.some(
        (item) => item.id === product.id && item.size === product.size
      )
        ? prev.map((item: Product) =>
            item.id === product.id && item.size === product.size
              ? { ...item, cartQntd: (item.cartQntd || 0) + 1 }
              : item
          )
        : [...prev, { ...product, cartQntd: 1 }];

      return newCartList;
    });
  };

  const removeItemFromCart = (product: Product) => {
    setproductsCart((prev) => {
      const newCartList = prev.filter(
        (item) => !(item.id === product.id && item.size === product.size)
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
      "Aguarde 24h para a solicitação ser avaliada. <br>Obrigado."
    );
  };

  return (
    <DefaultLayout>
      <div className="relative flex flex-col gap-4 h-full">
        <Breadcrumb pageName="Shop" />
        <div className="relative flex flex-col gap-10 md:flex-row h-full">
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
            <Icon icon="tdesign:cart" className="text-xl font-bold text-white" />
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
          className="absolute inset-0 z-40 bg-black/50 2xl:hidden"
        ></div>
      ) : (
        ""
      )}
    </DefaultLayout>
  );
};

export default ShopPage;
