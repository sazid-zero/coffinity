// src/components/MenuModal.tsx
import React from "react";
import { motion } from "framer-motion";

interface MenuModalProps {
    item: {
        name: string;
        desc: string;
        price: number;
    };
    onClose: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ item, onClose }) => (
    <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
    >
        <motion.div
            className="bg-gray-800 text-white rounded-lg p-8 max-w-md w-full relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
        >
            <button className="absolute top-2 right-4 text-amber-400 text-xl" onClick={onClose}>
                ✕
            </button>
            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-300 mb-4">{item.desc}</p>
            <div className="text-lg text-amber-500 font-semibold">${item.price.toFixed(2)}</div>
        </motion.div>
    </motion.div>
);