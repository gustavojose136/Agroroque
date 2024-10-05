"use client";

import { User } from "@/types/user";
import CustomSelect from "../ui/customSelect";

export interface ITableThreeUserProps {
  tableNames: string[];
  itens: User[];
  updateUser: (user: User) => Promise<void>;
}

const roles = ["Funcionário", "Supervisor", "Operador-Estoque"];

const TableThreeUser = ({
  tableNames,
  itens,
  updateUser,
}: ITableThreeUserProps) => {

  const selectChange = (id: number) => {
    const user: User | undefined = itens.find((user) => user.id === id);
    if (user) {
      updateUser(user);
    } else {
      console.error("Usuário não encontrado com o ID:", id);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {tableNames?.map((item, key) => (
                <th
                  className={`px-4 py-4 font-medium text-black dark:text-white ${
                    key === tableNames.length - 1
                      ? ""
                      : "dark:border-strokedark"
                  }`}
                  key={key}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {itens.map((item, key) => (
              <tr key={key} className="cursor-pointer hover:bg-gray-3">
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {item.name}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <CustomSelect
                    items={roles}
                    selectedRole={item.roleName || "Indefinido"}
                    selectChange={selectChange}
                    id={item.id}
                  ></CustomSelect>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThreeUser;
