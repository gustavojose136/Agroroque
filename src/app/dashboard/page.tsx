"use client";
import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useEffect } from "react";

export default function Dashboard() {
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log("searchParams", searchParams);
    const loggedUser = {
      id: searchParams.get("id"),
      name: searchParams.get("name"), 
      email: searchParams.get("email"),
      pic: searchParams.get("pic"),
    };

    if (loggedUser.id) {
      console.log(loggedUser);

      const cleanUrl = window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }, [searchParams]);

  return (
    <DefaultLayout>
      <ECommerce />
    </DefaultLayout>
  );
}
