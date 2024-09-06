import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Package } from "@/types/package";
import { Solicitacao } from "@/types/solicitacao";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Titles = ["Colaborador", "Itens", "Status", "Data", "Ações"];

const itens: Solicitacao[] = [
  {
    id: "1",
    colaborador: "Joao Kleber",
    status: "Pendente",
    itens: 3,
    data: "Jan 06,2024",
  },
  {
    id: "2",
    colaborador: "Maria da Penha",
    status: "Pendente",
    itens: 3,
    data: "Jan 06,2024",
  },
  {
    id: "3",
    colaborador: "Agostinho Carrara",
    status: "Pendente",
    itens: 3,
    data: "Jan 06,2024",
  },
  {
    id: "2",
    colaborador: "Jeff Bezos",
    status: "Pendente",
    itens: 3,
    data: "Jan 06,2024",
  }
  
];

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Aprovações" />

      <div className="flex flex-col gap-10">
        {/* <TableOne Title="penis" ItensName={Titles} />
        <TableTwo /> */}
        <TableThree ItensName={Titles} Itens={itens}/>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
