import { motion } from "framer-motion";

const quoteBubbles = [
    "My debug break starts at Coffinity.",
    "React and espresso... a match made in localhost.",
    "Every commit deserves a caramel macchiato.",
];

const About = () => {
    return (
        <section className="py-52 text-white px-6 relative overflow-hidden">
            {/* Floating Quotes */}
            {quoteBubbles.map((quote, i) => (
                <motion.div
                    key={i}
                    className="absolute backdrop-blur-md bg-white/5 border border-white/10 text-sm italic text-gray-200 px-4 py-2 rounded-full shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.4 }}
                    viewport={{amount:0.5}}
                    style={{
                        top: `${20 + i * 60}px`,
                        left: `${10 + i * 15}%`,
                    }}
                >
                    {quote}
                </motion.div>
            ))}

            <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                <h2 className="text-4xl font-bold">☕ Our Blend of Purpose</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Coffinity is more than coffee—it’s a sanctuary for coders, creators, and quiet thinkers. Every pixel is brewed with intention, just like every roast.
                </p>
                <p className="text-sm italic text-gray-400">
                    Crafted for developers. Inspired by espresso.
                </p>


                <div className="mt-12 space-y-4 text-left max-w-md mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="border-l-4 border-amber-500 pl-4"
                    >
                        <h4 className="text-md font-semibold text-white">2024 – The Roast Begins</h4>
                        <p className="text-sm text-gray-400">Coffinity was concepted over a cappuccino and a CSS bug. Ambition met aroma.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="border-l-4 border-pink-500 pl-4"
                    >
                        <h4 className="text-md font-semibold text-white">2025 – Brewing Interfaces</h4>
                        <p className="text-sm text-gray-400">Animations, gradients, and beans—it all came together in a signature user experience.</p>
                    </motion.div>
                </div>
            </div>


        </section>

    );
};

export default About;