"use client"

import { useState, useMemo } from "react"
import { FaCoffee } from "react-icons/fa"
import { motion } from "framer-motion"
import { MenuModal } from "../components/MenuModal"


const menuItems = [
    {
        id: 1,
        category: "Hot Drinks",
        name: "Espresso",
        price: 3.5,
        desc: "Rich and bold, served black",
        image: "espresso2.jpg",
    },
    { id: 2, category: "Hot Drinks", name: "Latte", price: 4.5, desc: "Creamy with latte art", image: "latte.jpg" },
    {
        id: 3,
        category: "Cold Drinks",
        name: "Iced Coffee",
        price: 4.0,
        desc: "Chilled and refreshing",
        image: "ice-coffee.jpg",
    },
    { id: 4, category: "Pastries", name: "Croissant", price: 2.5, desc: "Buttery and flaky", image: "croissant.jpg" },
    {
        id: 5,
        category: "Specials",
        name: "Caramel Macchiato",
        price: 5.0,
        desc: "Sweet and seasonal",
        image: "caramel.jpg",
    },
    { id: 6, category: "Specials", name: "Cappuccino", price: 6.0, desc: "Sweet and milky", image: "cappuccino.jpg" },

    {
        id: 7,
        category: "Pastries",
        name: "Burger",
        price: 8.5,
        desc: "Juicy beef patty with fresh toppings",
        image: "burger.jpg",
    },
    { id: 8, category: "Pastries", name: "Bagel", price: 3.0, desc: "Fresh baked with cream cheese", image: "bagel.jpg" },
    {
        id: 9,
        category: "Pastries",
        name: "Muffin",
        price: 2.8,
        desc: "Blueberry burst in every bite",
        image: "muffin.jpg",
    },
    {
        id: 10,
        category: "Pastries",
        name: "Salad",
        price: 7.5,
        desc: "Fresh greens with house dressing",
        image: "salad.jpg",
    },
    {
        id: 11,
        category: "Pastries",
        name: "Sandwich",
        price: 6.5,
        desc: "Grilled chicken with avocado",
        image: "sandwich.jpg",
    },
    {
        id: 12,
        category: "Pastries",
        name: "Donut",
        price: 2.2,
        desc: "Glazed perfection with sprinkles",
        image: "donut.jpg",
    },
]

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [selectedItem, setSelectedItem] = useState<(typeof menuItems)[0] | null>(null)

    const categories = useMemo(() => [...new Set(menuItems.map((item) => item.category))], [])

    const filteredItems = useMemo(
        () => (selectedCategory ? menuItems.filter((item) => item.category === selectedCategory) : menuItems),
        [selectedCategory],
    )
    const getCategoryStyle = (category: string) => {
        switch (category) {
            case "Hot Drinks":
                return {
                    textColor: "#D6D85D",
                    iconColor: "#D6D85D",
                    borderColor: "#D6D85D",
                }
            case "Cold Drinks":
                return {
                    textColor: "#06b6d4",
                    iconColor: "#06b6d4",
                    borderColor: "#0891b2",
                }
            case "Pastries":
                return {
                    textColor: "#FE4F2D",
                    iconColor: "#FE4F2D",
                    borderColor: "#FE4F2D",
                }
            case "Specials":
                return {
                    textColor: "#F564A9",
                    iconColor: "#F564A9",
                    borderColor: "#F564A9",
                }
            default:
                return {
                    textColor: "#ffffff",
                    iconColor: "#ffffff",
                    borderColor: "#ffffff",
                }
        }
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    } as const

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    } as const

    return (
        <section className="py-12 md:py-24 min-h-screen text-white relative overflow-hidden">

            <div className="block md:hidden mb-8">
                <h2 className="text-3xl font-bold text-center mb-4">Our Brews & Bites</h2>
                <p className="text-center mb-8 px-4">Explore our handcrafted menu, brewed with love since 2025.</p>
            </div>


            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1, once: true }}
                className="hidden md:block"
            >
                <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-6">
                    Our Brews & Bites
                </motion.h2>

                <motion.p variants={itemVariants} className="text-center mb-12">
                    Explore our handcrafted menu, brewed with love since 2025.
                </motion.p>
            </motion.div>


            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-10 px-4">
                <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-3 py-2 md:px-4 md:py-2 rounded-full border-2 font-medium text-xs md:text-sm transition duration-300 ${
                        selectedCategory === null
                            ? "bg-white text-gray-900 shadow-lg border-white"
                            : "border-white/40 text-white hover:bg-white/10"
                    }`}
                >
                    All
                </button>

                {categories.map((category) => {
                    const style = getCategoryStyle(category)
                    return (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-3 py-2 md:px-4 md:py-2 rounded-full border-2 font-medium text-xs md:text-sm transition duration-300 ${
                                selectedCategory === category ? "bg-white text-gray-900 shadow-lg" : "hover:bg-white/10"
                            }`}
                            style={{
                                borderColor: style.borderColor,
                                color: selectedCategory === category ? "#1f2937" : style.textColor,
                            }}
                        >
                            {category}
                        </button>
                    )
                })}
            </div>


            <div className="max-w-full mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredItems.map((item) => {
                    const style = getCategoryStyle(item.category)
                    return (
                        <div
                            key={item.id}
                            className="bg-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-amber-200 group hover:scale-105 transition-all duration-300 cursor-pointer"
                            onClick={() => setSelectedItem(item)}
                        >
                            <div className="p-4 flex justify-between items-start">
                                <div className="flex-1 pr-2">
                                    <h4
                                        className="text-base md:text-lg font-semibold group-hover:text-white transition-colors"
                                        style={{ color: style.textColor }}
                                    >
                                        {item.name}
                                    </h4>
                                    <p className="text-xs md:text-sm text-gray-300 mt-1">{item.desc}</p>
                                </div>
                                <div className="flex items-center gap-1 md:gap-2 text-base md:text-lg font-semibold flex-shrink-0">
                                    <FaCoffee style={{ color: style.iconColor }} className="text-sm md:text-base" />
                                    <span className="text-sm md:text-base" style={{ color: style.textColor }}>
                    ${item.price.toFixed(2)}
                  </span>
                                </div>
                            </div>

                            <div className="w-full h-[140px] md:h-[160px] lg:h-[220px]">
                                <img
                                    src={`/menu/${item.image}`}
                                    alt={item.name}
                                    className="w-full h-full object-cover object-center rounded-b-xl"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    )
                })}
            </div>

            {selectedItem && <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
        </section>
    )
}

export default Menu
