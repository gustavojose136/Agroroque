"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import Image from "next/image";

const RetiradaPage = () => {
  const router = useRouter();

  const handleViewClick = (id: string) => {
    router.push(`/aprovacoes/${id}`);
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Retirada" />
      <div className="flex w-full h-full justify-center align-center">
        <div className="border-gray-100 relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg bg-white shadow-md">
          <a
            className=""
            href="#"
          >
            <Image
              src={"/images/finger-print.gif"}
              width={160}
              height={160}
              style={{
                width: "auto",
                height: "auto",
                objectFit: "cover",
              }}
              alt="profile"
            />
          </a>
          <div className="mt-4 flex flex-col justify-center gap-4  px-5 pb-5">
            <a
              href="#"
              onClick={() => handleViewClick("1")}
              className="hover:bg-gray-700 flex items-center justify-center rounded-md bg-slate-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-950 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Avancar (Provisorio para testes)
            </a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default RetiradaPage;
