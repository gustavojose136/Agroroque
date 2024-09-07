import { Product } from "@/types/product";
import { Icon } from "@iconify/react";

interface CardSectionProps {
  productsCart: Product[];
}

const CartSection = ({ productsCart }: CardSectionProps) => {
  return (
    <div className="mt-[54px] flex h-full flex-col overflow-y-auto rounded-lg bg-white shadow-xl">
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="flex items-start justify-between">
          <h1 className="text-gray-900 text-lg font-medium">Carrinho</h1>
          {/* <div className="ml-3 flex h-7 items-center">
          <button
            type="button"
            // onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-gray-500 relative -m-2 p-2"
          >
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Botao fechar</span>
            <Icon icon="material-symbols:close" className="h-6 w-6" />
          </button>
        </div> */}
        </div>

        <div className="mt-8">
          <div className="flow-root">
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
                      <p className="text-gray-500">Qntd {product.cartQnt}</p>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
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
        <div className="text-gray-900 flex justify-between text-base font-medium">
          <p>Total de itens: {productsCart.length}</p>
        </div>
        <p className="text-gray-500 mt-0.5 text-justify text-sm">
          Faça solicitado dos itens e aguarde 24 horas.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Solicitar
          </a>
        </div>
        {/* <div className="text-gray-500 mt-6 flex justify-center text-center text-sm">
        <p>
          ou{" "}
          <button
            type="button"
            // onClick={() => setOpen(false)}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Continuar escolhendo
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </p>
      </div> */}
      </div>
    </div>
  );
};

export default CartSection;
