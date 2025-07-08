import { Cog, Hammer, Layers, Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";
import LaserIcon from "../icons/LaserIcon";
import WeldingIcon from "../icons/WeldingIcon";
import CraneIcon from "../icons/CraneIcon";

function ZamecnickaVyroba() {
	return (
		<section className="bg-gray-50 py-20">
			<div className="max-w-7xl mx-auto px-4">
				{/* Title */}
				<h2 className="text-4xl font-bold text-center text-blue-800 mb-10 md:mb-8 uppercase">
					Zámečnícka Výroba
				</h2>
                

				{/* Layout */}
				<div className="grid md:grid-cols-2 gap-8 relative">
					{/* Text (desktop only) */}
					<div className="hidden md:flex flex-col justify-center">
						<Content iconsColor="text-cyan-600" textColor="text-black" />
					</div>
					{/* Image */}
					<div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg ">
						<Image
							src="/images/zvareni.jpg"
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
				</div>
			</div>
		</section>
	);
}

function Content({ iconsColor, textColor }) {
	return (
		<ul className="vyroba-list-ul ">
			<li className="vyroba-list-li">
				<Hammer className={`${iconsColor} vyroba-list-icon`} />
				<div className="vyroba-list-li-subwrap">
					<h3 className={`vyroba-list-li-titles ${textColor}`}>
						Zakázkové konstrukce
					</h3>
					<p className={`${textColor}/80`}>
						  Vyrábíme ocelové konstrukce a komponenty, včetně povrchových úprav.
					</p>
				</div>
			</li>
			<li className="vyroba-list-li">
				<WeldingIcon className={`${iconsColor} vyroba-list-icon`} />
				<div className="vyroba-list-li-subwrap">
					<h3 className={`vyroba-list-li-titles ${textColor}`}>
						Ruzne zvářecí metódy
					</h3>
					<p className={`${textColor}/80`}>
						Svářime MIG, TIG, plamenem i laserem.

					</p>
				</div>
			</li>
			<li className="vyroba-list-li">
				<Sparkles className={`${iconsColor} vyroba-list-icon`} />
				<div className="vyroba-list-li-subwrap">
					<h3 className={`vyroba-list-li-titles ${textColor}`}>
						Finální opracování a úpravy
					</h3>
					<p className={`${textColor}/80`}>
						Každý svár čistě zbroušený a připravený k použití nebo montáži.
					</p>
				</div>
			</li>
			<li className="vyroba-list-li">
				<CraneIcon className={`${iconsColor} vyroba-list-icon`} />
				<div className="vyroba-list-li-subwrap">
					<h3 className={`vyroba-list-li-titles ${textColor}`}>
						Montáž na místě
					</h3>
					<p className={`${textColor}/80`}>
						Zajišťujeme i kompletní montáže přímo na místě – řešení na klíč.
					</p>
				</div>
			</li>
		</ul>
	);
}

export default ZamecnickaVyroba;
