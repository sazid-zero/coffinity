import {Button} from "../components/Button.tsx";
import {useEffect, useState, useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const brewingTips = [
    'Life begins after coffee.',
    'Brewed with love, sipped with joy.',
    'A cup of coffee, a world of warmth.',
    'Espresso yourself!',
    'Coffee: the hug in a mug.',
    'Rise and grind, one sip at a time.',
    'Savor the moment, sip the magic.',
    'Good days start with great coffee.',
    'Brew it, love it, live it.',
    'Coffee is always a good idea.',
    "Espresso loads faster than CSS Grid.",
    "Hover to find your perfect brew…",
    "Caffeinate your creativity, one line at a time."
];

export function Hero() {
    const [tipIndex, setTipIndex] = useState(0);
    const heroRef = useRef<HTMLDivElement>(null);
    const leftContentRef = useRef<HTMLDivElement>(null);
    const rightContentRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setTipIndex((prev) => (prev + 1) % brewingTips.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!heroRef.current || !leftContentRef.current || !rightContentRef.current) return;

        // Entry animation
        gsap.fromTo(leftContentRef.current, 
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );

        gsap.fromTo(rightContentRef.current,
            { scale: 0, rotate: -45, opacity: 0 },
            { scale: 1, rotate: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
        );

        // Scroll exit animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });

        tl.to(leftContentRef.current, {
            x: 200,
            opacity: 0,
            ease: "none"
        }, 0);

        tl.to(rightContentRef.current, {
            x: -200,
            opacity: 0,
            ease: "none",
            pointerEvents: "none"
        }, 0);

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div
            ref={heroRef}
            className="relative h-screen grid grid-cols-1 md:grid-cols-2 pl-4 pr-4 lg:pl-16 lg:pr-16 text-white overflow-hidden"
        >
            <div
                ref={leftContentRef}
                className="pt-22 lg:pt-32 space-y-1"
            >
                <h1 className="text-lg font-bold">Welcome To</h1>
                <div className="flex space-x-1 mb-6">
                    <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-[#EA2F14] via[#E6521F] to-[#FFD63A] text-transparent bg-clip-text">Coffinity</h1>
                    <img src="/icons/coffee.png" loading="lazy" className="h-6 w-6 md:h-12 md:w-12"/>
                </div>
                <h1 className="text-xl md:text-4xl font-bold mb-2">Crafted for Moments of Warmth and Connection</h1>

                <p className="mb-6 text-lg text-[#C9B194]">Fuel your day with community, creativity, and the perfect cup.</p>

                <p className="mb-6 italic text-sm text-[#B19785] animate-pulse">
                    Responsively brewed since 2025 ☕
                </p>
                <div className=" flex space-x-4">
                    <Button title={"Grab a Brew"} width="128px" height="44px" />
                    <Button title={"Join Coffinity"} width="128px" height="44px" />
                </div>

                <div className="min-h-8 max-w-100 rounded-full items-center p-4 bg-white/10 backdrop-blur-2xl lg:mt-36 mt-4" >
                    <p className=" font-mono text-sm font-bold text-neutral-300 ">
                        {brewingTips[tipIndex]}
                    </p>
                </div>
            </div>


            <div className="w-full h-full items-center justify-center flex md:pt-8 pt-2 ">
                <img
                    ref={rightContentRef}
                    loading={"lazy"}
                    src="/icons/coffe.png"
                    alt="Coffee Cup"
                    className="w-60 lg:w-150 absolute justify-self-center hover-rotate cursor-pointer"
                />
            </div>
        </div>
    );
}

