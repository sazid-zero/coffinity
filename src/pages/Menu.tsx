import { motion } from "framer-motion";
import { useState } from "react";
import { FaCoffee } from "react-icons/fa";

const Menu = () => {
    const menuItems = [
        { id: 1, category: "Hot Drinks", name: "Espresso", price: 3.5, desc: "Rich and bold, served black" },
        { id: 2, category: "Hot Drinks", name: "Latte", price: 4.5, desc: "Creamy with latte art" },
        { id: 3, category: "Cold Drinks", name: "Iced Coffee", price: 4.0, desc: "Chilled and refreshing" },
        { id: 4, category: "Pastries", name: "Croissant", price: 2.5, desc: "Buttery and flaky" },
        { id: 5, category: "Specials", name: "Caramel Macchiato", price: 5.0, desc: "Sweet and seasonal" },
    ];

    const categories = [...new Set(menuItems.map(item => item.category))];
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredItems = selectedCategory
        ? menuItems.filter(item => item.category === selectedCategory)
        : menuItems;

    return (
        <section className="py-16 bg-gray-900 text-white">
            <h2 className="text-4xl font-bold text-center mb-6">Our Brews & Bites</h2>
            <p className="text-center mb-12">Explore our handcrafted menu, brewed with love since 2025.</p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {categories.map(category => (
                    <motion.button
                        key={category}
                        onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                        className={`px-4 py-2 rounded-full font-medium text-sm transition duration-300 ${
                            selectedCategory === category
                                ? "bg-amber-500 text-white shadow-lg"
                                : "bg-white/10 text-white hover:bg-amber-600"
                        }`}
                        whileTap={{ scale: 0.95 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            {/* Menu Cards */}
            <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-white/10 rounded-lg flex justify-between items-center group hover:shadow-md transition-shadow"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div>
                            <h4 className="text-lg font-semibold group-hover:text-amber-300 transition-colors">{item.name}</h4>
                            <p className="text-sm text-gray-300">{item.desc}</p>
                        </div>
                        <div className="flex items-center gap-2 text-amber-400 text-lg">
                            <FaCoffee />
                            ${item.price.toFixed(2)}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Menu;