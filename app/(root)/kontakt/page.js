import ContactForm from "@/components/ContactForm";
import Kontakt from "@/components/sections/Kontakt";
import PageHeader from "@/components/ui/PageHeader";
import React from "react";

async function page({ searchParams }) {
	const submitted = await (await searchParams).submitted;
	return (
		<div>
			<PageHeader
				title="Kontakt"
				image="/images/subpage-hero/cnc5.webp"
				breadcrumb={[{ label: "Domů", href: "/" }, { label: "Kontakt" }]}
			/>

			<Kontakt callbackUrl={"/kontakt"} submitted={submitted} /> 

				{/* Google Map */}
				<div className="mt-20 max-w-7xl mx-auto rounded-lg overflow-hidden shadow-lg h-96">
					{/* Replace the src URL below with your Google Maps embed link */}
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.0506950360436!2d15.28740017680881!3d50.010405018950046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c3f9aa73c85d9%3A0x716a7a77193d3e8f!2sStroj%C3%ADrny%20Svoboda%20s.r.o.!5e0!3m2!1sen!2ssk!4v1753023456045!5m2!1sen!2ssk"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="Google Maps Location"
					/>
				</div>
		</div>
	);
}

export default page;
