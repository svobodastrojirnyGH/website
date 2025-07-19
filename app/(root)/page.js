import Herosection from "@/components/sections/Herosection";
import Kontakt from "@/components/sections/Kontakt";
import ProcMy from "@/components/sections/ProcMy";
import Recenze from "@/components/sections/Recenze";
import Stepper from "@/components/sections/Stepper";
import StrojirenskaVyroba from "@/components/sections/StrojirenskaVyroba";
import ZamecnickaVyroba from "@/components/sections/ZamecnickaVyroba";
import Footer from "@/components/ui/Footer";

export default function Home() {

    console.log("NEXT_PUBLIC_SANITY_API_VERSION")
  console.log(process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-07-16')

  console.log("NEXT_PUBLIC_SANITY_DATASET")
  console.log(process.env.NEXT_PUBLIC_SANITY_DATASET)
  console.log("NEXT_PUBLIC_SANITY_PROJECT_ID")
   console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
	return (
		<>
        <Herosection />
        <ProcMy />
        <StrojirenskaVyroba />
        <ZamecnickaVyroba />
        <Stepper />
        <Kontakt />
        <Recenze />
        <Footer />
{/* 
<Herosection />
<WhyUsSection />          // 1 – trust
<MachiningSection />      // 2 – CNC
<MetalworkSection />      // 3 – Zámečnictví
<ProcessSection />        // 4 – How it works
<AboutUsPreview />        // 5 – Short about us
<ContactCta />      
			 */}
		</>
	);
}
