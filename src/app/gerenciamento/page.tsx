// src/app/aprovacoes/page.tsx
"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import axios from "axios";
import { showErrorAlert } from "@/components/ui/successAlert";
import { useEffect, useState } from "react";
import { User } from "@/types/user";
import TableThreeUser from "@/components/Tables/TableThreeUser";

enum Role {
  Funcionario = 1,
  Supervisor,
  OperadorEstoque,
  Administrador,
}

const Titles = ["Colaborador", "Função"];

const Gerenciamento = () => {
  const [users, setUsers] = useState<User[]>([]);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const API_ROUTE = `${API_URL}/Usuario`;

  const getUsers = async () => {
    console.log(API_ROUTE)

    try {
      const response = await axios.get(API_ROUTE);
      console.log(response.data);
      const users = response.data.users || [];
      if(users) setUsers(users);
    } catch (error: any) {
      console.error("Erro ao carregar os colaboradores:", error);
      showErrorAlert(
        "Erro!",
        "Aconteceu um erro ao carregar os colaboradores. Tente novamente.",
      );
    }
  };

  const updateUser = async (user: User) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const API_ROUTE = `${API_URL}/updateUser`;

      const response = await axios.put(API_ROUTE, user);
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
    roleName: getRoleString(user.role),
  }));

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Aprovações" />
      <div className="flex flex-col gap-10">
        <TableThreeUser tableNames={Titles} itens={usersWithRoles}  updateUser={updateUser}/>
      </div>
    </DefaultLayout>
  );
};

export default Gerenciamento;
