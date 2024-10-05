import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgroRoque - Dashboard",
  description: "",
};

export default function Dashboard() {
  return (
    <DefaultLayout>
      <ECommerce />
    </DefaultLayout>
  );
}
