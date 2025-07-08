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
   <main className="w-full min-h-screen">
       <Nav/>
           <motion.div
                   className="fixed w-full lg:h-[140vh] h-[200vh]  bg-[url('/coffebg2.jpg')] bg-cover bg-center z-[-10]"
                   style={{
                       y: bgTranslateY,
                       transformOrigin: "center",
                   }}
               />
       <Hero/>
       <Menu/>

           <div className="h-screen bg-amber-100 bg-cover bg-center flex items-center justify-center text-white">
               <Featured/>
           </div>


   </main>
  )
}

export default App
