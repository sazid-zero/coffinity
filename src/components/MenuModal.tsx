"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"

interface MenuModalProps {
    item: {
        id: number
        category: string
        name: string
        price: number
        desc: string
        image: string
    }
    onClose: () => void
}

const MenuModal = ({ item, onClose }: MenuModalProps) => {
    return (
        <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="bg-white rounded-xl p-6 max-w-md w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X size={24} />
                    </button>
                </div>
                <img
                    src={`/placeholder.svg?height=200&width=300`}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">${item.price.toFixed(2)}</span>
                    <button className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors">
                        Add to Cart
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default MenuModal
