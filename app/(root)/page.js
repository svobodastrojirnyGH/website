import Herosection from "@/components/sections/Herosection";
import Kontakt from "@/components/sections/Kontakt";
import ProcMy from "@/components/sections/ProcMy";
import Recenze from "@/components/sections/Recenze";
import Sluzba from "@/components/sections/Sluzba";

import Stepper from "@/components/sections/Stepper";

import { zamecnickePrace, strojirenskaVyroba } from "@/data/sluzbyData";

export default async function Home({searchParams}) {

    const submitted = await (await searchParams).submitted;

	return (
		<>
        <Herosection />
        <ProcMy />
        <Sluzba data={strojirenskaVyroba} />
        <Sluzba data={zamecnickePrace} />
        <Stepper />
        <Kontakt callbackUrl={"/"} submitted={submitted}/>
        <Recenze />
		</>
	);
}
