// app/components/layout/Navbar.js
"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();
    
	useEffect(() => {
		const handleScroll = () => {
			const heroHeight = window.innerHeight;
			// Force scrolled = true on non-homepages
			setScrolled(pathname !== "/" || window.scrollY >= 0.85 * heroHeight);
		};

		handleScroll(); // Ensure correct initial state
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const heroHeight = window.innerHeight;
			setScrolled(pathname !== "/" || window.scrollY >= 0.85 * heroHeight);
		};

		handleScroll(); // 🧠 ← Call it right away on path change

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [pathname]);

	const navLinks = [
		{ label: "O NÁS", href: "/o-nas" },
		{ label: "SLUŽBY", href: "/sluzby" },
		{ label: "TECHNOLOGIE", href: "/technika" },
		{ label: "GALERIE", href: "/galerie" },
		{ label: "KONTAKT", href: "/kontakt" },
	];

	return (
		<header
			className={`${
    pathname === '/' ? 'fixed' : 'relative'
  } top-0 left-0 w-full z-50 shadow-msd h-16 text-white ${
				scrolled
					? "bg-zinc-900"
					: "md:bg-gradient-to-b md:from-zinc-900 md:to-transparent bg-zinc-900/75"
			}`}
		>
			{" "}
			{/* bg-zinc-900/75 */}
			<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between md:justify-start space-x-12 items-center">
				{/* Logo */}
				<Link href="/">
					<Image
						src="/logos/nat_blue600_linear_256x44.webp"
						alt="logo"
						height={45}
						width={256}
						className="w-64 h-auto"
					/>
				</Link>

				{/* Desktop nav */}
				<nav className="hidden  w-full  md:flex justify-around font-medium">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="hover:text-cyan-300"
						>
							{link.label}
						</Link>
					))}
				</nav>

				{/* Mobile toggle */}
				<button
					onClick={() => setIsOpen((prev) => !prev)}
					className="md:hidden focus:outline-none"
				>
					{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</div>
			{/* Animated Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden absolute left-0 right-0 bg-blue-800 overflow-hidden"
					>
						<div className="px-4 py-4 space-y-2 text-sm font-medium">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="block hover:text-cyan-300"
									onClick={() => setIsOpen(false)}
								>
									{link.label}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
