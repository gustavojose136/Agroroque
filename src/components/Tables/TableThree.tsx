'use client'

import { Package } from "@/types/package";
import { ITableOneProps } from "./TableOne";
import { Solicitacao } from "@/types/solicitacao";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export interface ITableThreeProps {
  ItensName: string[];  
  Itens: Solicitacao[];
}

const TableThree = ({ ItensName, Itens }: ITableThreeProps) => {
  const router = useRouter();

  const handleViewClick = (id: string) => {
    router.push(`/aprovacoes/${id}`);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {ItensName?.map((item, key) => (
                <th
                  className={`px-4 py-4 font-medium text-black dark:text-white ${
                    key === ItensName.length - 1 ? "" : "dark:border-strokedark"
                  }`}
                  key={key}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Itens.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.colaborador}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.itens}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                      packageItem.status === "Paid"
                        ? "bg-success text-success"
                        : packageItem.status === "Unpaid"
                        ? "bg-danger text-danger"
                        : "bg-warning text-warning"
                    }`}
                  >
                    {packageItem.status}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.data}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary">
                      <Icon icon="mdi:check-bold" className="text-2xl" />
                    </button>
                    <button className="hover:text-primary">
                      <Icon icon="dashicons:no" className="text-2xl" />
                    </button>
                    <button
                      className="hover:text-primary"
                      onClick={() => handleViewClick(packageItem.id)} // Redireciona com o ID
                    >
                      <Icon icon="mdi:eye-outline" className="text-2xl" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
