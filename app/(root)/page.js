import Herosection from "@/components/sections/Herosection";
import Kontakt from "@/components/sections/Kontakt";
import ProcMy from "@/components/sections/ProcMy";
import Recenze from "@/components/sections/Recenze";
import Stepper from "@/components/sections/Stepper";
import StrojirenskaVyroba from "@/components/sections/StrojirenskaVyroba";
import ZamecnickaVyroba from "@/components/sections/ZamecnickaVyroba";
import Footer from "@/components/ui/Footer";

export default function Home() {
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
