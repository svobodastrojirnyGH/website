import Image from "next/image";
import React from "react";
import Herovideo from "../ui/Herovideo";
import Link from "next/link";

function Herosection() {
	return (
		<section className="font-exo2 relative h-[100vh] w-full flex items-center justify-center text-white overflow-hidden bg-gray-900">
			{/* Background Video */}
            <Herovideo />

			{/* Content */}
			<div className="px-6  bg-zinc-900/25 py-8 h-full md:h-auto justify-center lg:rounded-lg flex flex-col relative z-10 text-center max-w-6xl mb-16">
				<div className="">
					<h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-6 text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
						CNC obrábění, zámečnická výroba a laserové značení
					</h1>
					<p className="text-lg md:text-2xl mb-2 text-white text-shadow-sm drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
						Precizní CNC obrábění a moderní strojní výroba
					</p>
				</div>
				<div className="flex flex-col items-center sm:flex-row mt-8 justify-center gap-6 text-lg sm:text-xl">
					<Link
						href="/kontakt"
						className="w-50 sm:w-auto px-6 py-3 rounded-lg bg-blue-700 hover:bg-blue-600 text-white shadow-lg"
					>
						Kontaktujte nás
					</Link>
					<Link
						href="#sluzbyStart"
						className="w-50 sm:w-auto px-6 py-3 rounded-lg bg-black/45 hover:bg-white/75   backdrop-blur-2xl text-white border-white/45 border-2"
					>
						Co nabízíme
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Herosection;
