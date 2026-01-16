import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#3F2305] text-gray-400 text-sm py-10 px-6 border-t border-white/10">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        © {new Date().getFullYear()} Coffinity. Brewed for clarity, coded for comfort.
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-white hover:text-amber-400 transition text-lg" />
                        </a>
                        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-white hover:text-blue-400 transition text-lg" />
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-white hover:text-green-400 transition text-lg" />
                        </a>
                        <a href="https://facebook.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-white hover:text-blue-500 transition text-lg" />
                        </a>
                        <a href="https://instagram.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-white hover:text-red-400 transition text-lg" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;