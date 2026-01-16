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
                <div className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-xl z-[100] flex flex-col items-center justify-center space-y-8 text-white text-2xl p-6">
                    <button className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors" onClick={() => setShowMobileMenu(false)}>
                        <FaTimes className="text-3xl" />
                    </button>
                    <div className="flex flex-col items-center space-y-8 w-full">
                        {nav.map((item) => (
                            <div 
                                key={item} 
                                className="cursor-pointer hover:text-amber-400 transition-colors font-medium tracking-wide" 
                                onClick={() => scrollToSection(item)}
                            >
                                {item}
                            </div>
                        ))}
                        <div className="pt-4">
                            <Button title={"Sign Up"} width={"160px"} height={"50px"} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}