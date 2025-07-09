import { useState } from "react";
import { Button } from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";

export function Nav() {
    const nav = ["Home", "Menu", "About", "Featured", "Contact"];
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const scrollToSection = (section: string) => {
        const target = document.getElementById(section);
        if (target) target.scrollIntoView({ behavior: "smooth" });
        setShowMobileMenu(false);
    };

    return (
        <>
            {/* Desktop Navbar */}
            <div className="hidden md:flex fixed w-full h-18 backdrop-blur-xs items-center justify-between z-50 p-8">
                <div className="flex items-center space-x-0">
                    <h1 className="text-xl font-bold text-transparent bg-gradient-to-r from-[#EA2F14] via-[#E6521F] to-[#FFD63A] bg-clip-text">Coffinity</h1>
                    <img src="/icons/coffee.png" className="h-7 w-7" />
                </div>
                <div className="flex items-center justify-center space-x-6">
                    {nav.map((item) => (
                        <div
                            key={item}
                            className="text-sm font-semibold text-white cursor-pointer"
                            onClick={() => scrollToSection(item)}
                        >
                            {item}
                        </div>
                    ))}
                    <Button title={"Sign Up"} width={"112px"} height={"40px"} />
                </div>
            </div>

            {/* Mobile Navbar Icon */}
            <div className="md:hidden fixed w-full h-16 backdrop-blur-sm flex items-center justify-between px-6 z-50">
                <h1 className="text-xl font-bold text-transparent bg-gradient-to-r from-[#EA2F14] via-[#E6521F] to-[#FFD63A] bg-clip-text">Coffinity</h1>
                <button onClick={() => setShowMobileMenu(true)}>
                    <FaBars className="text-white text-2xl" />
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {showMobileMenu && (
                <div className="md:hidden h-120 w-96 fixed mt-16 right-6 bg-white/20 bg-opacity-95 backdrop-blur-md rounded-2xl z-40 flex flex-col items-center justify-center space-y-6 text-white text-xl">
                    <button className="absolute top-6 right-6" onClick={() => setShowMobileMenu(false)}>
                        <FaTimes className="text-3xl" />
                    </button>
                    {nav.map((item) => (
                        <div key={item} className="cursor-pointer" onClick={() => scrollToSection(item)}>
                            {item}
                        </div>
                    ))}
                    <Button title={"Sign Up"} width={"140px"} height={"44px"} />
                </div>
            )}
        </>
    );
}