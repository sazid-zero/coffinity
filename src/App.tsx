import {Nav} from "./components/Nav.tsx";
import {Hero} from "./pages/Hero.tsx";
import {Featured} from "./pages/Featured.tsx";
import {motion, useScroll, useTransform} from "framer-motion";

function App() {
    const { scrollYProgress } = useScroll({
        offset: ["start end", "end start"],
    });
    const bgTranslateY = useTransform(scrollYProgress, [0, 1], [0, -400]);
    //const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
   <main className="w-full min-h-screen">
       <Nav/>
           <motion.div
                   className="fixed w-full h-[140vh] bg-[url('/coffebg2.jpg')] bg-cover bg-center z-[-10]"
                   style={{
                       y: bgTranslateY,
                       //opacity: bgOpacity,
                       transformOrigin: "center",
                   }}
               />
       <Hero/>

           <div className="h-screen bg-amber-100 bg-cover bg-center flex items-center justify-center text-white">
               <Featured/>
           </div>


   </main>
  )
}

export default App
