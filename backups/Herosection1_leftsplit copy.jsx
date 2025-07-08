import Image from "next/image";
import React from "react";
import Herovideo from "../components/ui/Herovideo";

function Herosection1_leftsplit() {
	return (
		<section className=" bg-deev relative h-screen w-screen overflow-hidden text-white">
			{/* Background Video */}
			<Herovideo />
			<div className="absolute inset-0 bg-black/30 z-0" />

				{/* Left box - square-ish content panel */}
				<div className="w-full h-full border-2 flex items-center justify-left px-[15%]">
					<div className="bg-black/60 backdrop-blur-lg p-10 rounded-2xl shadow-2xl max-w-[500px] w-full">
						<h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6 leading-tight">
							CNC obrábění, zámečnická výroba a laserové značení
						</h1>
						<p className="text-lg mb-4">
							Přesná zakázková výroba s důrazem na kvalitu, detail a
							spolehlivost.
						</p>
						<ul className="list-disc list-inside text-sm text-gray-300 mb-6 space-y-1">
							<li>Zakázková strojní výroba na CNC i konvenčních strojích</li>
							<li>Opracování oceli, nerezu, hliníku, plastů</li>
							<li>Laserové značení a sváření</li>
							<li>Kompletní povrchové úpravy</li>
						</ul>
						<a
							href="#why-us"
							className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-xl hover:bg-blue-100 transition"
						>
							Proč si vybrat nás?
						</a>
					</div>
			</div>
		</section>
	);
}

export default Herosection1_leftsplit;
