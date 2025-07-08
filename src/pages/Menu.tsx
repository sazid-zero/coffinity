import { motion } from "framer-motion";
import { useState } from "react";
import { FaCoffee } from "react-icons/fa";
import { MenuModal } from "../components/MenuModal";


const Menu = () => {
    const menuItems = [
        { id: 1, category: "Hot Drinks", name: "Espresso", price: 3.5, desc: "Rich and bold, served black", image: "espresso2.jpg" },
        { id: 2, category: "Hot Drinks", name: "Latte", price: 4.5, desc: "Creamy with latte art", image: "latte.jpg" },
        { id: 3, category: "Cold Drinks", name: "Iced Coffee", price: 4.0, desc: "Chilled and refreshing", image: "ice-coffee.jpg" },
        { id: 4, category: "Pastries", name: "Croissant", price: 2.5, desc: "Buttery and flaky", image: "croissant.jpg" },
        { id: 5, category: "Specials", name: "Caramel Macchiato", price: 5.0, desc: "Sweet and seasonal", image: "caramel.jpg" },
        { id: 6, category: "Specials", name: "Cappuccino", price: 6.0, desc: "Sweet and milky", image: "cappuccino.jpg" },
    ];

    const categories = [...new Set(menuItems.map((item) => item.category))];
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedItem, setSelectedItem] = useState<typeof menuItems[0] | null>(null);

    const filteredItems = selectedCategory
        ? menuItems.filter((item) => item.category === selectedCategory)
        : menuItems;

    const categoryStyle = (category: string) => {
        const palette: Record<string, { text: string; icon: string; border: string }> = {
            "Hot Drinks": { text: "text-amber-300", icon: "#fbbf24", border: "border-amber-500" },
            "Cold Drinks": { text: "text-blue-300", icon: "#60a5fa", border: "border-blue-500" },
            Pastries: { text: "text-yellow-300", icon: "#facc15", border: "border-yellow-500" },
            Specials: { text: "text-pink-300", icon: "#f472b6", border: "border-pink-500" },
        };
        return palette[category] || { text: "text-white", icon: "#ffffff", border: "border-white" };
    };

    return (
        <section className="py-24 min-h-screen text-white relative overflow-hidden">
            <h2 className="text-4xl font-bold text-center mb-6">Our Brews & Bites</h2>
            <p className="text-center mb-12">Explore our handcrafted menu, brewed with love since 2025.</p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {/* All Filter */}
                <motion.button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-4 py-2 rounded-full border font-medium text-sm transition duration-300 ${
                        selectedCategory === null
                            ? "bg-white text-gray-900 shadow-lg"
                            : "border-white/40 text-white"
                    }`}
                    whileTap={{ scale: 0.95 }}
                >
                    All
                </motion.button>

                {/* Category Filters */}
                {categories.map((category) => {
                    const style = categoryStyle(category);
                    return (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full font-medium text-sm transition duration-300 ${
                                selectedCategory === category
                                    ? `bg-white text-gray-900 ${style.border} shadow-lg`
                                    : `${style.border} ${style.text} hover:bg-white/10`
                            }`}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    );
                })}
            </div>

            {/* Cards */}
            <div className="max-w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => {
                    const style = categoryStyle(item.category);
                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{duration:1, delay: index * 0.2 }}
                            viewport={{ amount:0.3, once:true }}

                            className="bg-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-amber-200 group hover:scale-105 transition-all duration-300 cursor-pointer"
                            onClick={() => setSelectedItem(item)}
                        >
                            {/* Top Text Section */}
                            <div className="p-4 flex justify-between items-start">
                                <div>
                                    <h4 className={`text-lg font-semibold group-hover:text-white transition ${style.text}`}>
                                        {item.name}
                                    </h4>
                                    <p className="text-sm text-gray-300">{item.desc}</p>
                                </div>
                                <div className={`flex items-center gap-2 text-lg font-semibold ${style.text}`}>
                                    <FaCoffee style={{ color: style.icon }} />
                                    ${item.price.toFixed(2)}
                                </div>
                            </div>

                            {/* Bottom Image Section */}
                            <div className="w-full h-[160px] md:h-[220px] lg:h-[260px]">
                                <img
                                    src={`/menu/${item.image}`}
                                    alt={item.name}
                                    className="w-full h-full object-cover object-center rounded-b-xl"
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Modal Render */}
            {selectedItem && <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
        </section>
    );
};

export default Menu;