
import {motion} from "framer-motion";
import {Button} from "../components/Button.tsx";


export function Hero() {

        return (
            <motion.div
                className="h-screen grid grid-cols-1 lg:grid-cols-[60%_40%] p-8 lg:pl-16 lg:pr-16 text-white"
            >
                {/* Left Side Content */}
                <motion.div
                    className="pt-32 space-y-6"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ amount: 0.3}}
                >
                    <h1 className="text-5xl font-bold">Welcome To</h1>
                    <div className="flex space-x-1">
                    <h1 className="text-lg font-bold">our</h1>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-[#EA2F14] via[#E6521F] to-[#FFD63A] text-transparent bg-clip-text">Coffee Shop</h1>
                    </div>
                    <p className="text-lg text-[#C9B194]">Fuel your day with community, creativity, and the perfect cup.</p>
                    <Button title={""}></Button>
                </motion.div>

                {/* Right Side Image */}
                <div className="w-full h-full items-center justify-center flex">
                <motion.img
                    src="/coffe.png"
                    alt="Coffee Cup"
                    className="w-120 h-120 justify-self-center"
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

