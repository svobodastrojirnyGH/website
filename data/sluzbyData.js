'use client'
import CraneIcon from "@/components/icons/CraneIcon";
import LaserIcon from "@/components/icons/LaserIcon";
import WeldingIcon from "@/components/icons/WeldingIcon";
import { Cog, Hammer, Layers, Sparkles } from "lucide-react";


export const strojirenskaVyroba = {
  title: "Strojírenská výroba",
  animationX: -200,
  image: "/images/homepage/strojirenska-vyroba.webp",
  items: [
    {
      icon: Layers,
      title: "Různorodé materiály",
      description:
        "Obrábíme ocel, hliník, nerez i technické plasty (např. POM-C, PTFE).",
    },
    {
      icon: Cog,
      title: "CNC a konvenční stroje",
      description:
        "Přesné CNC i klasické stroje pro výrobu složitých dílů s vysokou přesností.",
    },
    {
      icon: Sparkles,
      title: "Povrchové úpravy",
      description:
        "Dodáváme s požadovanou úpravou – kalení, nitridace, galvanické pokovování, žíhání a další.",
    },
    {
      icon: LaserIcon  ,
      title: "Laserové značení",
      description:
        "Pro trvalé, přesné a elegantní označení dílů bez mechanického kontaktu.",
    },
  ],
};


export const zamecnickePrace = {
  title: "Zámečnické práce",
  animationX: 200,
  image: "/images/homepage/zvareni.webp",
  items: [
    {
      icon: Hammer,
      title: "Zakázkové konstrukce",
      description:
        "Vyrábíme ocelové konstrukce a komponenty, včetně povrchových úprav.",
    },

    {
      icon: WeldingIcon,
      title: "Ruzne zvářecí metódy",
      description:
        "Svářime MIG, TIG, plamenem i laserem.",
    },
    {
      icon: Sparkles,
      title: "Finální opracování a úpravy",
      description:
        "Každý svár čistě zbroušený a připravený k použití nebo montáži.",
    },
    {
      icon: CraneIcon,
      title: "Montáž na místě",
      description:
        "Zajišťujeme i kompletní montáže přímo na místě - řešení na klíč.",
    },
  ],
};
