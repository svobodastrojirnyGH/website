export const revalidate = 86400; //1 day

import { client } from "@/sanity/lib/client";
import { MACHINERY_QUERY } from "@/sanity/lib/queries";
import PageHeader from "@/components/ui/PageHeader";
import TechCard from "@/components/TechCard";

export default async function page() {
	const machineryItems = await client.fetch(MACHINERY_QUERY); 

	const grouped = machineryItems.reduce((acc, item) => {
		const category = item.machineryCategory?.title || "Uncategorized";
		if (!acc[category]) acc[category] = [];
		acc[category].push(item);
		return acc;
	}, {});

	return (
		<div>
			<PageHeader
				title="Technologie"
				image="/images/subpage-hero/cnc1.webp"
				breadcrumb={[{ label: "Domů", href: "/" }, { label: "Technologie" }]}
			/>
			<div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
				{Object.entries(grouped).map(([category, machines]) => (
					<section key={category}>
						<h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
							{category}
						</h2>
						<div>
							{machines.map((machine) => (
								<TechCard key={machine._id} machineryItem={machine} />
							))}
						</div>
					</section>
				))}
			</div>
		</div>
	);
}
