"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/home/home-carrousel";

export function HomeCarrouselWrapper() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="h-full w-full py-20">
      <h2 className="font-sans mx-auto max-w-7xl pl-4 text-xl font-bold text-neutral-800 dark:text-neutral-200 md:text-5xl">
        ESPAÇO DO COLABORADOR
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Shopping",
    title: "Solicite seus EPIs",
    src: "/images/home/epis.png",
  },
  {
    category: "Eventos",
    title: "Não perca os próximos eventos.",
    src: "/images/home/eventos.jpg",
  },
  {
    category: "Bônus e Férias",
    title: "Ver detalhes sobre bônus e férias",
    src: "/images/home/ferias.jpg",
  },

  {
    category: "Dúvidas",
    title: "Entre em contato para tirar suas dúvidas.",
    src: "/images/home/duvidas.jpg",
  },
];
