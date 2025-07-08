import {Nav} from "./components/Nav.tsx";
import {Hero} from "./pages/Hero.tsx";
import {Featured} from "./pages/Featured.tsx";
import {motion, useScroll, useTransform} from "framer-motion";
import Menu from "./pages/Menu.tsx";

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
       <Hero/>
       <div className="min-h-screen w-full bg-gradient-to-r from-black to-amber-950">
           <Menu/>
           <Featured/>

       </div>


   </main>
  )
}

export default App
