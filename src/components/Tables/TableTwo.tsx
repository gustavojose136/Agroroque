import Image from "next/image";
import { Product } from "@/types/product";

const productData: Product[] = [
  {
    id: "1",
    imageSrc: "/images/product/product-01.png",
    name: "Apple Watch Series 7",
    category: "Electronics",
    color: "branco",
    cartQntd: 5,
    size: "M",
  },
  {
    id: "1",
    imageSrc: "/images/product/product-02.png",
    name: "Apple Watch Series 7",
    category: "Electronics",
    color: "branco",
    cartQntd: 5,
    size: "M",
  },
  {
    id: "1",
    imageSrc: "/images/product/product-03.png",
    name: "Apple Watch Series 7",
    category: "Electronics",
    color: "branco",
    cartQntd: 5,
    size: "M",
  },
  {
    id: "1",
    imageSrc: "/images/product/product-04.png",
    name: "Apple Watch Series 7",
    category: "Electronics",
    color: "branco",
    cartQntd: 5,
    size: "M",
  },
];

const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Epis Solicitadas
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Produto</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Categoria</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Cor</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Tamanho</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Quantidade</p>
        </div>
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <Image
                  src={
                    product.imageSrc
                      ? product.imageSrc
                      : "/images/product/product-01.png"
                  }
                  width={60}
                  height={50}
                  alt="Product"
                />
              </div>
              <p className="text-sm text-black dark:text-white">
                {product.name}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.category}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {product.color}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{product.size}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm">{product.cartQntd}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableTwo;
