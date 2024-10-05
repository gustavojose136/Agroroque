// src/app/aprovacoes/page.tsx
"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import axios from "axios";
import { showErrorAlert } from "@/components/ui/successAlert";
import { useEffect, useState } from "react";
import { User } from "@/types/user";
import TableThreeUser from "@/components/Tables/TableThreeUser";
import Cookies from "js-cookie";

enum Role {
  Funcionario = 1,
  Supervisor,
  OperadorEstoque,
  Administrador,
}

const Titles = ["Colaborador", "Função"];

const Gerenciamento = () => {
  const [users, setUsers] = useState<User[]>([{ id: -1, name: "" },{ id: -1, name: "" },{ id: -1, name: "" }]);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {}, users);

  const getUsers = async () => {
    const API_ROUTE = `${API_URL}/Usuario`;
    try {
      const token = Cookies.get("token");
      const response = await axios.get(API_ROUTE, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
    } catch (error: any) {
      console.error("Erro ao carregar os colaboradores:", error);
      showErrorAlert(
        "Erro!",
        "Aconteceu um erro ao carregar os colaboradores. Tente novamente.",
      );
    }
  };

  const updateUser = async (user: User) => {
    const API_ROUTE = `${API_URL}/Usuario/${user.id}`;
    try {
      const token = Cookies.get("token");
      const response = await axios.put(API_ROUTE, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
    } catch (error: any) {
      console.error("Erro ao atualizar o colaborador:", error);
      showErrorAlert(
        "Erro!",
        "Aconteceu um erro ao atualizar o colaborador. Tente novamente.",
      );
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  function getRoleString(roleValue: number = -1): string {
    switch (roleValue) {
      case Role.Funcionario:
        return "Funcionário";
      case Role.Supervisor:
        return "Supervisor";
      case Role.OperadorEstoque:
        return "Operador-Estoque";
      case Role.Administrador:
        return "Administrador";
      default:
        return "Indefinido";
    }
  }

  const usersWithRoles = users.map((user) => ({
    ...user,
    roleName: getRoleString(user.perfilUsuario),
  }));

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Gerenciamento" />
      <div className="flex flex-col gap-10">
        <TableThreeUser
          tableNames={Titles}
          itens={usersWithRoles}
          updateUser={updateUser}
        />
      </div>
    </DefaultLayout>
  );
};

export default Gerenciamento;
