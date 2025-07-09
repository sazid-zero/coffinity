"use client"

import { useState } from "react"
import { FaCoffee } from "react-icons/fa"
import { motion } from "framer-motion"
import MenuModal from "../components/MenuModal"

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

    interface MenuItem {
        id: number
        name: string
        desc: string
        price: number
        image: string
        category: string
    }

    const menuItems: MenuItem[] = [
        { id: 1, name: "Espresso", desc: "Rich and bold coffee", price: 3.5, image: "espresso2.jpg", category: "Coffee" },
        {
            id: 2,
            name: "Cappuccino",
            desc: "Espresso with foamed milk",
            price: 4.0,
            image: "cappuccino.jpg",
            category: "Coffee",
        },
        { id: 3, name: "Latte", desc: "Espresso with steamed milk", price: 4.5, image: "latte.jpg", category: "Coffee" },
        {
            id: 4,
            name: "Iced Coffee",
            desc: "Chilled coffee served over ice",
            price: 4.0,
            image: "ice-coffee.jpg",
            category: "Coffee",
        },
        {
            id: 5,
            name: "Croissant",
            desc: "Flaky and buttery pastry",
            price: 3.0,
            image: "croissant.jpg",
            category: "Pastries",
        },
        { id: 6, name: "Muffin", desc: "Sweet and moist cake", price: 2.5, image: "muffin.jpg", category: "Pastries" },
        {
            id: 7,
            name: "Sandwich",
            desc: "Assorted fillings on fresh bread",
            price: 6.0,
            image: "sandwich.jpg",
            category: "Snacks",
        },
        {
            id: 8,
            name: "Salad",
            desc: "Fresh greens with various toppings",
            price: 7.0,
            image: "salad.jpg",
            category: "Snacks",
        },
        {
            id: 9,
            name: "Americano",
            desc: "Espresso diluted with hot water",
            price: 3.0,
            image: "americano.jpg",
            category: "Coffee",
        },
        {
            id: 10,
            name: "Donut",
            desc: "Sweet fried dough confection",
            price: 2.0,
            image: "donut.jpg",
            category: "Pastries",
        },
        { id: 11, name: "Bagel", desc: "Chewy bread roll", price: 3.5, image: "bagel.jpg", category: "Snacks" },
        { id: 12, name: "Burger", desc: "Bun petty and toppings", price: 5.5, image: "burger.jpg", category: "Snacks"}
    ]

    const categories = [...new Set(menuItems.map((item) => item.category))]

    const filteredItems = selectedCategory ? menuItems.filter((item) => item.category === selectedCategory) : menuItems

    const categoryStyle = (category: string) => {
        switch (category) {
            case "Coffee":
                return {
                    border: "border-amber-500",
                    text: "text-amber-500",
                    icon: "#f59e0b",
                }
            case "Pastries":
                return {
                    border: "border-rose-500",
                    text: "text-rose-500",
                    icon: "#f472b6",
                }
            case "Snacks":
                return {
                    border: "border-teal-500",
                    text: "text-teal-500",
                    icon: "#14b8a6",
                }
            default:
                return {
                    border: "border-white",
                    text: "text-white",
                    icon: "#fff",
                }
        }
    }

    // Animation variants for batched animations - Fix TypeScript errors
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    } as const

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    } as const

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    } as const

    return (
        <section className="py-24 min-h-screen text-white relative">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3, once: true }}
            >
                <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-6">
                    Our Brews & Bites
                </motion.h2>

                <motion.p variants={itemVariants} className="text-center mb-12">
                    Explore our handcrafted menu, brewed with love since 2025.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-10">
                    <motion.button
                        variants={buttonVariants}
                        onClick={() => setSelectedCategory(null)}
                        className={`px-4 py-2 rounded-full border font-medium text-sm transition duration-300 ${
                            selectedCategory === null ? "bg-white text-gray-900 shadow-lg" : "border-white/40 text-white"
                        }`}
                        whileTap={{ scale: 0.95 }}
                    >
                        All
                    </motion.button>

                    {categories.map((category) => {
                        const style = categoryStyle(category)
                        return (
                            <motion.button
                                key={category}
                                variants={buttonVariants}
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
                        )
                    })}
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="max-w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredItems.map((item) => {
                        const style = categoryStyle(item.category)
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeOut",
                                }}
                                className="bg-white/10 rounded-xl shadow-md hover:shadow-amber-200 group hover:scale-105 transition-all duration-300 cursor-pointer"
                                onClick={() => setSelectedItem(item)}
                            >
                                <div className="p-4 flex justify-between items-start">
                                    <div>
                                        <h4 className={`text-lg font-semibold group-hover:text-white transition ${style.text}`}>
                                            {item.name}
                                        </h4>
                                        <p className="text-sm text-gray-300">{item.desc}</p>
                                    </div>
                                    <div className={`flex items-center gap-2 text-lg font-semibold ${style.text}`}>
                                        <FaCoffee style={{ color: style.icon }} />${item.price.toFixed(2)}
                                    </div>
                                </div>

                                <div className="w-full h-[160px] md:h-[220px] lg:h-[260px]">
                                    <img
                                        src={`/menu/${item.image}`}
                                        alt={item.name}
                                        className="w-full h-full object-cover object-center rounded-b-xl"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>

            {selectedItem && <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
        </section>
    )
}

export default Menu
