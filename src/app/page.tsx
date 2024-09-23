import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { HomeCarrouselWrapper } from "./home/page";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AgroRoque",
  description: "",
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl">AgroRoque</h1>
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
      </div>
    </>
  );
}
