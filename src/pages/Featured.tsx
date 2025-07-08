import { motion } from "framer-motion";

const featuredItems = [
    {
        id: 1,
        title: "Latte Art Mastery",
        desc: "Each swirl crafted with milk, imagination, and steady hands.",
        image: "latte-art.png",
        tag: "Barista Pick",
    },
    {
        id: 2,
        title: "Mocha Noir",
        desc: "A dark roast infusion kissed by chocolate shadows.",
        image: "mocha-splash.png",
        tag: "Fan Favorite",
    },
    {
        id: 3,
        title: "Beanwave Blend",
        desc: "Smooth, robust, and rhythmically bold—like a coder’s playlist.",
        image: "beanwave.png",
        tag: "New Arrival",
    },
];

export const Featured = () => {
    return (
        <section className="py-24 bg-gradient-to-r from-black to-amber-950 text-white px-6">
            <h2 className="text-4xl font-bold text-center mb-10">🌟 Featured Flavors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
                {featuredItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="relative bg-white/10 p-6 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-all cursor-pointer"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        {/* Floating PNG */}
                        <img
                            src={`/featured/${item.image}`}
                            alt={item.title}
                            className="absolute -top-6 -right-6 w-20 h-20 pointer-events-none opacity-80 hover:animate-bounce"
                        />

                        <div className="space-y-2">
                            <h3 className="text-2xl font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-300">{item.desc}</p>
                            <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-amber-600 text-white">
                {item.tag}
              </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};