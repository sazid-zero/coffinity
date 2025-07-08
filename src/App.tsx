import {Nav} from "./components/Nav.tsx";
import {Hero} from "./pages/Hero.tsx";
import {Featured} from "./pages/Featured.tsx";
import {motion, useScroll, useTransform} from "framer-motion";
import Menu from "./pages/Menu.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Footer from "./pages/Footer.tsx";

function App() {
    const { scrollYProgress } = useScroll({
        offset: ["start end", "end start"],
    });
    const bgTranslateY = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
   <main className="w-full min-h-screen ">
       <Nav/>
           <motion.div
                   className="fixed w-full h-[140vh]  bg-[url('/coffebg2.jpg')] bg-cover bg-center z-[-10]"
                   style={{
                       y: bgTranslateY
                   }}
               />
       <section id="Home"><Hero /></section>
       <div className="min-h-screen w-full bg-gradient-to-r from-black to-amber-950">

           <section id="Menu"><Menu /></section>
           <section id="Featured"><Featured /></section>
           <section id="About"><About /></section>
           <section id="Contact"><Contact /></section>
           <Footer />

       </div>


   </main>
  )
}

export default App
