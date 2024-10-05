// src/app/aprovacoes/page.tsx
"use client"; // Deixe essa diretiva se este arquivo precisa ser client-side

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableThree from "@/components/Tables/TableThree";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Solicitacao } from "@/types/solicitacao";
import axios from "axios";
import { showErrorAlert } from "@/components/ui/successAlert";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Titles = [
  "Colaborador",
  "Itens",
  "Status",
  "Data Solicitação",
  "Data Aprovação",
  "Ações Rapidas",
];

const TablesPage = () => {
  const [solicitacoes, setSolicitacoes] = useState<Solicitacao[]>([]);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const getSolicitacoes = async () => {
    const API_ROUTE = `${API_URL}/SolicitacaoEquipamento`;
    try {
      const token = Cookies.get("token");
      const response = await axios.get(API_ROUTE, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      const produtos =
        response.data.produtos?.[0]?.produtos?.[0]?.produtos || [];
      setSolicitacoes(produtos);
    } catch (error: any) {
      console.error("Erro ao carregar os produtos:", error);
      showErrorAlert(
        "Erro!",
        "Aconteceu um erro ao carregar os produtos. Tente novamente.",
      );
    }
  };

  useEffect(() => {
    getSolicitacoes();
  }, []);

  const itens: Solicitacao[] = [
    {
      id: "1",
      colaborador: "Joao Kleber",
      status: "Pendente",
      itens: 3,
      dataSol: "Jan 06,2024",
      dataApro: "Esperando avaliação...",
    },
    {
      id: "2",
      colaborador: "Maria da Penha",
      status: "Pendente",
      itens: 3,
      dataSol: "Jan 06,2024",
      dataApro: "Esperando avaliação...",
    },
    {
      id: "3",
      colaborador: "Agostinho Carrara",
      status: "Pendente",
      itens: 3,
      dataSol: "Jan 06,2024",
      dataApro: "Esperando avaliação...",
    },
    {
      id: "4",
      colaborador: "Jeff Bezos",
      status: "Pendente",
      itens: 3,
      dataSol: "Jan 06,2024",
      dataApro: "Esperando avaliação...",
    },
  ];

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Solicitações" />
      <div className="flex flex-col gap-10">
        <TableThree ItensName={Titles} Itens={itens} />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
