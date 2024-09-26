import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import { HomeCarrouselWrapper } from "@/components/home/home-carrousel-wrapper";
import DefaultNav from "@/components/ui/defaultNav";

export const metadata: Metadata = {
  title: "AgroRoque",
  description: "",
};

export default function Home() {
  return (
    <>
      <DefaultNav />
      <div className="flex flex-col items-center justify-center ">
        <div className="relative w-full">
          <div className="absolute left-[-70px] top-[-205px] h-full w-full py-20">
            <Image
              className="opacity-[0.07] grayscale"
              src={"/images/logo/logo-horizontal.png"}
              alt="Logo"
              fill
              objectFit="contain"
              objectPosition="start"
            />
          </div>
          <HomeCarrouselWrapper />
        </div>

        <section className=" dark:bg-slate-800" id="contact">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mb-4">
              <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                <h2 className="font-heading text-gray-900 mb-4 text-xl font-bold tracking-tight dark:text-white sm:text-5xl">
                  Contato
                </h2>
              </div>
            </div>
            <div className="flex items-stretch justify-center">
              <div className="flex h-full flex-row pr-6">
                <div className="flex w-1/2 flex-col gap-6 px-20">
                  <p className="text-gray-600 text-balance text-start text-lg dark:text-slate-400">
                    Nossa equipe está pronta para atender suas necessidades com
                    segurança e eficiência.
                    <br />
                     Entre em contato para saber mais ou
                    solicitar um orçamento.
                  </p>
                </div>

                <div className="flex w-1/2 justify-end px-20">
                  <ul className="flex flex-col gap-4">
                    <li className="flex">
                      <div className="text-gray-50 rounde-xl flex h-10 w-10 items-center justify-center bg-accent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                        </svg>
                      </div>
                      <div className="mb-4 ml-4">
                        <h3 className="text-gray-900 mb-2 text-lg font-medium leading-6 dark:text-white">
                          Endereço
                        </h3>
                        <p className="text-gray-600 dark:text-slate-400">
                          Av. Laurindo Barbosa de Macedo, 1026 Sala 1 – Centro
                        </p>
                        <p className="text-gray-600 dark:text-slate-400">
                          Ortigueira/PR
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="text-gray-50 flex h-10 w-10 items-center justify-center rounded bg-accent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                          <path d="M15 7a2 2 0 0 1 2 2"></path>
                          <path d="M15 3a6 6 0 0 1 6 6"></path>
                        </svg>
                      </div>
                      <div className="mb-4 ml-4">
                        <h3 className="text-gray-900 mb-2 text-lg font-medium leading-6 dark:text-white">
                          Contatos
                        </h3>
                        <p className="text-gray-600 dark:text-slate-400">
                          Tel: (42) 3273-5299 / 3277-1126
                        </p>
                        <p className="text-gray-600 dark:text-slate-400">
                          Email: agroroque@uol.com.br
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="text-gray-50 flex h-10 w-10 items-center justify-center rounded bg-accent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                          <path d="M12 7v5l3 3"></path>
                        </svg>
                      </div>
                      <div className="mb-4 ml-4">
                        <h3 className="text-gray-900 mb-2 text-lg font-medium leading-6 dark:text-white">
                          Horário de Funcionamento
                        </h3>
                        <p className="text-gray-600 dark:text-slate-400">
                          Seg - Sexta: 08:00 - 18:00
                        </p>
                        <p className="text-gray-600 dark:text-slate-400">
                          Sabado &amp; Domingo: 08:00 - 12:00
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
