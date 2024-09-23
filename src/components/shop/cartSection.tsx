import { Product } from "@/types/product";
import { Icon } from "@iconify/react";
import { Span } from "next/dist/trace";

interface CardSectionProps {
  productsCart: Product[];
  removeItemFromCart: (product: Product) => void;
}

const CartSection = ({
  productsCart,
  removeItemFromCart,
}: CardSectionProps) => {
  return (
    <div className="flex h-full min-w-[250px] max-w-[450px] flex-grow flex-col rounded-xl border border-gray/75 bg-white shadow-xl max-h-[700px] 3xl:max-h-[920px] relative">
      <div className="flex-1 px-4 py-6 sm:px-6">
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

        <div className="mt-8">
          <div className="flow-root max-h-[400px] 3xl:max-h-[620px] overflow-y-auto">
            <ul role="list" className="divide-gray-200 -my-6 divide-y">
              {productsCart?.map((product) => (
                <li key={product.id} className="flex py-6">
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
      </div>

      <div className="border-gray-200 border-t px-4 py-6 sm:px-6">
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
          Após solicitar os itens e aguarde 24 horas.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Solicitar
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
