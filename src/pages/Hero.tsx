import {motion} from "framer-motion";
import {Button} from "../components/Button.tsx";
import {useEffect, useState} from "react";

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

    useEffect(() => {
        const interval = setInterval(() => {
            setTipIndex((prev) => (prev + 1) % brewingTips.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="h-screen grid grid-cols-1 lg:grid-cols-2 p-8 lg:pl-16 lg:pr-16 text-white"
        >
            {/* Left Side Content */}
            <motion.div
                className="pt-32 space-y-1"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ amount: 0.3}}
            >
                <h1 className="text-lg font-bold">Welcome To</h1>
                <div className="flex space-x-1 mb-6">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-[#EA2F14] via[#E6521F] to-[#FFD63A] text-transparent bg-clip-text">Coffinity</h1>
                    <img src="/icons/coffee.png" className="h-12 w-12"/>
                </div>
                <h1 className="text-4xl font-bold mb-2">Crafted for Moments of Warmth and Connection</h1>

                <p className="mb-6 text-lg text-[#C9B194]">Fuel your day with community, creativity, and the perfect cup.</p>



                <p className="mb-6 italic text-sm text-[#B19785] animate-pulse">
                    Responsively brewed since 2025 ☕
                </p>
                <div className=" flex space-x-4">
                    <Button title={"Grab a Brew"} width="128px" height="44px" />
                    <Button title={"Join Coffinity"} width="128px" height="44px" />
                </div>

                <div className="min-h-8 max-w-100 rounded-full items-center p-4 bg-white/10 backdrop-blur-2xl mt-36" >
                <motion.p
                    className=" font-mono text-sm font-bold text-neutral-300 "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {brewingTips[tipIndex]}
                </motion.p>
                </div>
            </motion.div>

            {/* Right Side Image */}
            <div className="w-full h-full items-center justify-center flex pt-8">
                <motion.img
                    src="/coffe.png"
                    alt="Coffee Cup"
                    className=" justify-self-center"
                    initial={{ scale: 0, rotate: -45, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: 0, opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ amount: 0.3 }}
                />
            </div>
        </motion.div>
    );
}





                    {/* import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../components/Button.tsx";

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

    useEffect(() => {
        const interval = setInterval(() => {
            setTipIndex((prev) => (prev + 1) % brewingTips.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div className="h-screen grid grid-cols-1 lg:grid-cols-[60%_40%] px-8 lg:px-16 text-white relative">

            <motion.div
                className="pt-40 flex flex-col space-y-6 z-10"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ amount: 0.3 }}
            >
                <div className="grid grid-cols-1 space-y-1 items-center ">
                <h1 className="text-lg font-bold">Welcome to </h1>
                    <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-[#EA2F14] via-[#E6521F] to-[#FFD63A] bg-clip-text tracking-tighter">Coffinity</h1>
                </div>

                <p className="text-lg text-[#C9B194]">
                    From clean design to cozy corners, every sip inspires ideas.
                </p>


                <motion.p
                    className="font-mono text-sm text-neutral-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {brewingTips[tipIndex]}
                </motion.p>


                <p className="italic text-sm text-[#B19785] animate-pulse">
                    Responsively brewed since 2025 ☕
                </p>


                <div className="flex space-x-4">
                    <Button title={"Grab a Brew"} width="128px" height="44px" />
                    <Button title={"Join Coffinity"} width="128px" height="44px" />
                </div>
            </motion.div>


            <div className="w-full h-full flex items-center justify-center relative z-10">

                <div className="absolute top-[52%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 steam-cloud animate-steam z-10"></div>
                <motion.img
                    src="/coffe.png"
                    alt="Coffee Cup"
                    className=""
                    initial={{ scale: 0, rotate: -45, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ amount: 0.3 }}
                />
            </div>
        </motion.div>
    );
} */}