"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableTwo from "@/components/Tables/TableTwo";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function SolicitacaoPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { id } = params;

  // Fetch or logic to handle `id`
  return (
    <DefaultLayout>
      <div>
        <div className="flex justify-between mb-5">
          <button
            onClick={() => router.back()}
            className="flex w-[10%] items-center justify-center gap-3.5"
          >
            <Icon icon="ph:arrow-left-bold" className="text-2xl" />
            Voltar
          </button>
          <h1>Detalhes da Solicitação {id}</h1>
        </div>
        <TableTwo />
        <div className="flex justify-between pt-3">
          <button
            className="flex w-[10%] items-center justify-center gap-3.5 rounded-lg border border-stroke bg-danger p-4 text-white hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50"
            onClick={() => router.back()}
          >
            Recusar
          </button>
          <button
            className="flex w-[10%] items-center justify-center gap-3.5 rounded-lg border border-stroke bg-primary p-4 text-white hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50"
            onClick={() => router.back()}
          >
            Aprovar
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
}
