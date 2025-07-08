import { motion } from "framer-motion";

const Contact = () => {
    return (
        <>
            <div className="w-full overflow-hidden -mt-20">
                <svg viewBox="0 0 1440 320" className="w-full h-[100px] text-amber-950 fill-current">
                    <path d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,128C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L0,320Z" />
                </svg>
            </div>

            <section className="py-24 px-6 bg-gradient-to-r from-amber-950 to-[#4B352A] text-white">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <motion.h2
                        className="text-4xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        📬 Brew Us a Message
                    </motion.h2>
                    <p className="text-gray-400">
                        Whether you're a fellow coder, a curious sipper, or just love good UI—we’d love to hear from you.
                    </p>

                    <form className="space-y-4 mt-10">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 bg-black/10 backdrop-blur-2xl border border-white/20 rounded-lg text-white placeholder-gray-200"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 bg-black/10 backdrop-blur-2xl border border-white/20 rounded-lg text-white placeholder-gray-200"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={4}
                            className="w-full px-4 py-3 bg-black/10 backdrop-blur-2xl border border-white/20 rounded-lg text-white placeholder-gray-200"
                        />
                        <motion.button
                            type="submit"
                            className="mt-4 px-6 py-3 bg-gradient-to-r from-[#EA2F14] via-[#F7AD45] to-[#EA2F14] bg-[length:200%_200%] rounded-full font-medium transition"
                            animate={{
                                backgroundPositionX: ["0%", "100%", "0%"],
                                scale: 1,  // normal scale
                            }}
                            transition={{
                                backgroundPositionX: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                },
                                scale: { duration: 0.5 },  // no delay when resetting scale
                            }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.5 }, // instant zoom on hover
                            }}
                        >
                            Send Brew
                        </motion.button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;