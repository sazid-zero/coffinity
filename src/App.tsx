import { useEffect } from "react";
import Lenis from "lenis";
import {Nav} from "./components/Nav.tsx";
import {Hero} from "./pages/Hero.tsx";
import {Featured} from "./pages/Featured.tsx";
import Menu from "./pages/Menu.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Footer from "./pages/Footer.tsx";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
   <main className="w-full min-h-screen ">
       <Nav/>
       <div
           className="fixed w-full h-[140vh]  bg-[url('/attached_assets/stock_images/professional_coffee__ef824b37.jpg')] bg-cover bg-center z-[-10]"
       />

       <section id="Home"><Hero /></section>
       <div className="relative min-h-screen w-full bg-gradient-to-r from-black to-amber-950 z-10">
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
