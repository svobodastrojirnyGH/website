import GalleryClient from "@/components/gallery/GalleryClient";
import PageHeader from "@/components/ui/PageHeader";
import { client } from "@/sanity/lib/client";
import { GALLERY_QUERY } from "@/sanity/lib/queries";

async function fetchGroupedImages() {
	const galleryItems = await client.fetch(GALLERY_QUERY);

	const grouped = galleryItems.reduce((acc, item) => {
		const cat = item.galleryCategory?.title;
		// Is there already a cat?
		if (!acc[cat]) acc[cat] = [];    
        
		acc[cat].push(item);

		return acc;
	}, {});
	return grouped;
	/*
    {
        'Zamecnicke Konstrukce' : [
                {item1},
                {item2},
                {item3},
                ...
            ],

        }
    }
    */
}

async function page() {

	const groupedGalleryItems = await fetchGroupedImages();

	return (
        <div>
      <PageHeader
        title="Galerie"
        image="/images/subpage-hero/cnc4.webp"
        breadcrumb={[
          { label: 'Domů', href: '/' },
          { label: 'Galerie' }
        ]}
      />
        <GalleryClient groupedGalleryItems={groupedGalleryItems} />
        </div>
	);
}

export default page;
