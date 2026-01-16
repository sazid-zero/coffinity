import {motion} from "framer-motion";

interface ButtonProps {
    title: string;
    width?: string;
    height?: string;
}

export function Button({title, width, height}: ButtonProps) {
    return (
        <motion.button className="flex flex-col items-center justify-center p-2 bg-gradient-to-r from-[#EA2F14] via-[#F7AD45] to-[#EA2F14] bg-[length:200%_200%] rounded-full w-28 h-10 text-sm text-white font-semibold text-shadow-2xs"
                    style={{width, height}}
                    animate={{
                        backgroundPositionX: ["0%", "100%", "0%"],
                        scale: 1,
                    }}
                    transition={{
                        backgroundPositionX: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                        },
                        scale: { duration: 0.5 },
                    }}
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 },
                    }}>
            {title}

        </motion.button>
    )
}