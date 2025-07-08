import { motion } from "framer-motion";
import { FaCartShopping} from "react-icons/fa6";

interface MenuModalProps {
    item: {
        name: string;
        desc: string;
        price: number;
        image: string;
    };
    onClose: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ item, onClose }) => {
    return (
        <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="bg-gray-900 text-white rounded-xl overflow-hidden max-w-xl w-full relative shadow-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
            >

                <button className="absolute top-3 right-4 text-white text-xl z-50" onClick={onClose}>
                    ✕
                </button>


                <div className="flex justify-between items-center p-6">
                <div className=" space-y-4">
                    <h2 className="text-2xl font-bold">{item.name}</h2>
                    <p className="text-gray-300">{item.desc}</p>

                </div>
                <div className="flex flex-col justify-end items-end space-y-4">
                    <h1 className="pr-6 text-lg text-amber-400 font-semibold" >${item.price.toFixed(2)}</h1>
                    <div className="p-6 pt-0 flex justify-end items-center space-x-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-black/50 text-white rounded-full text-sm font-medium shadow-md transition">
                            <span className="text-gray-300 text-sm">Buy now</span>
                            <FaCartShopping className="text-white h-5 w-5"/>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-black/50 text-white rounded-full text-sm font-medium shadow-md transition">
                            <span className="text-gray-300 text-sm">Add to cart</span>
                            <FaCartShopping className="text-white h-5 w-5"/>
                        </button>
                    </div>
                </div>
                </div>


                <div className="w-full h-[280px] md:h-[360px]">
                    <img
                        src={`/menu/${item.image}`}
                        alt={item.name}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};