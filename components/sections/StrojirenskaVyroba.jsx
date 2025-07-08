"use client";
import { Cog, Layers, Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";
import LaserIcon from "../icons/LaserIcon";
import { motion } from "framer-motion";

function StrojirenskaVyroba() {
	return (
		<section className="bg-white py-10 bg-deev overflow-x-hidden scroll-mt-64" id="sluzby">
			<motion.div
				className="max-w-7xl mx-auto px-4"
				initial={{ opacity: 0, x: -500 }} // start: invisible & 50px left
				whileInView={{ opacity: 1, x: 0 }} // end: visible & in place
				viewport={{ once: true, amount: 0.6 }} // trigger once when 60% in view
				transition={{ duration: 1, ease: "easeOut" }}
			>
				{/* Title */}

				<h2 className="text-4xl font-bold text-center text-white bg-blue-800 rounded-lg shadow-lg py-4 mb-10 md:mb-14">
					Strojírenská výroba
				</h2>

				{/*         <h2 className="text-4xl font-bold text-center text-blue-800 mb-10 md:mb-14">
          Strojírenská výroba
        </h2> */}

				{/* Layout */}
				<div className="grid md:grid-cols-2 gap-8 relative">
					{/* Image */}
					<div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg order-2 md:order-2">
						<Image
							src="/images/strojirenska-vyroba.jpg"
							alt="Strojírenská výroba"
							fill
							className="object-cover"
							priority
						/>
						{/* Overlay text (mobile only) */}
						<div className="md:hidden absolute inset-0 bg-black/40 backdrop-blur-sm text-white p-6 flex flex-col justify-center">
							<Content iconsColor="text-cyan-400" textColor="text-white" />
						</div>
					</div>

					{/* Text (desktop only) */}
					<div className="hidden md:flex flex-col justify-center">
						<Content iconsColor="text-blue-700" textColor="text-black" />
					</div>
				</div>
			</motion.div>
		</section>
	);
}

function Content({ iconsColor, textColor }) {
	return (
		<ul className="space-y-8">
			<li className="vyroba-list-li">
				<Layers className={`${iconsColor} vyroba-list-icon`} />
				<div className="vyroba-list-li-subwrap">
					<h3 className={`vyroba-list-li-titles ${textColor}`}>
						Různorodé materiály
					</h3>
					<p className={`${textColor}/80 `}>
						Obrábíme ocel, hliník, nerez i technické plasty (např. POM-C, PTFE).
					</p>
				</div>
			</li>
			<li className="vyroba-list-li">
				<Cog className={`${iconsColor} vyroba-list-icon`} />
				<div className="vyroba-list-li-subwrap">
					<h3 className={`vyroba-list-li-titles ${textColor}`}>
						CNC a konvenční stroje
					</h3>
					<p className={`${textColor}/80`}>
						Přesné CNC i klasické stroje pro výrobu složitých dílů s vysokou
						přesností.
					</p>
				</div>
			</li>
			<li className="vyroba-list-li">
				<Sparkles className={`${iconsColor} vyroba-list-icon`} />
				<div className="vyroba-list-li-subwrap">
					<h3 className={`vyroba-list-li-titles ${textColor}`}>
						Povrchové úpravy
					</h3>
					<p className={`${textColor}/80`}>
						Dodáváme s požadovanou úpravou - kalení, nitridace, galvanické
						pokovování, žíhání a další.
					</p>
				</div>
			</li>
			<li className="vyroba-list-li">
				<LaserIcon className={`${iconsColor} vyroba-list-icon`} />
				<div className="vyroba-list-li-subwrap">
					<h3 className={`vyroba-list-li-titles ${textColor}`}>
						Laserové značení
					</h3>
					<p className={`${textColor}/80`}>
						Pro trvalé, přesné a elegantní označení dílů bez mechanického
						kontaktu.
					</p>
				</div>
			</li>
		</ul>
	);
}

export default StrojirenskaVyroba;
