"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
	{
		number: 1,
		title: "Zadání & konzultace",
		text: "Společně si ujasníme požadavky, technické detaily a cíle projektu.",
	},
	{
		number: 2,
		title: "Výroba & kontrola",
		text: "Precizní zpracování na CNC a klasických strojích s důkladnou kontrolou kvality.",
	},
	{
		number: 3,
		title: "Dodání & podpora",
		text: "Hotový výrobek doručíme včas a jsme připraveni na případné úpravy či servis..",
	},
];

const stepsAnims = {
	opacity: { duration: 1.2, initDelay: 0, stagger: 0.7 },
	scale: { duration: 0.6, initDelay: 0, stagger: 0.8 },
};

function Stepper() {
	return (
		<div className="max-w-screen-lg pt-8 pb-18 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between font-exo2">
			<div className="text-center">
				<h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
					Jak spolupráce{" "}
					<span className="gradient-text drop-shadow-[0_0_10px_rgba(96,165,250,0.25)] ">
						probíhá?
					</span>
				</h3>
			</div>

			<div className="mt-20">
				<ul className="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">
					{steps.map((step, index) => (
						<motion.li
                        key={index}
                        className=" bg-gray-100 p-5 pb-10 text-center"
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{
								opacity: { duration: stepsAnims.opacity.duration, ease: "easeOut", delay: stepsAnims.opacity.initDelay + index*stepsAnims.opacity.stagger},
								scale: { duration: stepsAnims.scale.duration, ease: "backOut", delay: stepsAnims.scale.initDelay + index*stepsAnims.scale.stagger },
							}}
						>
							<div className="flex flex-col items-center ">
								<div className="flex-shrink-0 relative top-0 -mt-16">
									<div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-700 text-white border-4 border-white text-xl font-semibold">
										{step.number}
									</div>
								</div>
								<div className="mt-4">
									<h4 className="text-lg leading-6 font-semibold text-gray-900">
										{step.title}
									</h4>
									<p className="mt-2 md:pb-0 pb-8 text-base leading-6 text-gray-500">
										{step.text}
									</p>
								</div>
							</div>
						</motion.li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Stepper;
