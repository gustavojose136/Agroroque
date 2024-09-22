import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SignIn from "./auth/login/page";

export const metadata: Metadata = {
  title:
    "Agroque",
  description: "Loja de equipamentos agrícolas",
};

export default function Home() {
  return (
    <>
      {/* <DefaultLayout>
        <ECommerce />
      </DefaultLayout> */}
      <SignIn />
    </>
  );
}
