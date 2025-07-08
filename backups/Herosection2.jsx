import React from 'react'

function Herosection2() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-white">
				{/* Background image */}
				<div className="absolute inset-0 z-0">
					<Image
						src="/cnc1.jpg"
						alt="CNC obrábění"
						fill
						className="object-cover object-center"
						priority
					/>
					<div className="absolute inset-0 bg-black/25" />{" "}
					{/*bg-gradient-to-r from-blue-900/80 to-cyan-700/60 */}
				</div>

				{/* Content */}
				<div className="relative z-10 text-center px-6 max-w-4xl">
					<h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-wider drop-shadow-lg text-blue-700">
						STROJÍRNY SVOBODA s.r.o.
					</h1>
					<p className="text-lg md:text-2xl mb-8 drop-shadow-md">
						Precizní CNC obrábění, zámečnické konstrukce a laserové značení.
					</p>
					<a
						href="#why-us"
						className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl hover:bg-blue-100 transition"
					>
						Proč si vybrat nás?
					</a>
				</div>
			</section>
  )
}

export default Herosection2