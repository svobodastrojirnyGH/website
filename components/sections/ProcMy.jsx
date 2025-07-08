"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
	{
		icon: "/icons/lathe.svg",
		title: "Moderní technologie",
		text: "CNC stroje, laserové značení a špičkové vybavení pro přesné výsledky.",
        alt: "Soustruh Ikonka"
	},
	{
		icon: "/icons/brain.svg",
		title: "Zkušený tým",
		text: "Odborníci s desítkami let praxe ve strojírenské a zámečnické výrobě.",
        alt: "Mozek Ikonka"
	},
	{
		icon: "/icons/caliper.svg",
		title: "Zakázková řešení",
		text: "Přizpůsobíme se vašim potřebám – od kusové výroby po kompletní sestavy.",
        alt: "Šublera Ikonka"
	},
	{
		icon: "/icons/document.svg",
		title: "Kvalita a spolehlivost",
		text: "Důsledná kontrola kvality, čisté provedení a dodržení termínů samozřejmostí.",
        alt: "Dokument Ikonka"
	},
];

const cardAnim = {
	duration: 0.6,
	initDelay: 0.5,
	stagger: 0.4,
};

function ProcMy() {
	useEffect(() => {
		const el = document.querySelector(".procmy-line");
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					el.classList.add("animate");
					observer.unobserve(el); // remove after first trigger
				}
			},
			{ threshold: 0.6 } // adjust sensitivity
		);

		if (el) observer.observe(el);
	}, []);
	return (
		<section className="bg-gray-100  py-16 px-6">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="font-bold  mb-12">
					<svg
						height="100"
						stroke="#1d4ed8"
						strokeWidth="2"
						className="procmy-line md:text-[75px] sm:text-[65px] text-[40px]"
						width="100%"
					>
						<text
							x="50%"
							dominantBaseline="middle"
							textAnchor="middle"
							y="50%"
						>
							Proč právě nás?
						</text>
					</svg>


				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{cards.map((card, index) => (
						<motion.div
							key={index}
							className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{
								duration: cardAnim.duration,
								delay: cardAnim.initDelay + index * cardAnim.stagger,
								ease: "linear",
							}}
						>
							{/* <div className="text-blue-600 text-4xl mb-4">{card.icon}</div> */}
							<Image
								src={card.icon}
								height={75}
								width={75}
								className="mx-auto mb-4"
                                alt={card.alt}
							/>
							<h3 className="text-xl font-semibold text-gray-800 mb-2">
								{card.title}
							</h3>
							<p className="text-gray-600 text-sm">{card.text}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

export default ProcMy;
