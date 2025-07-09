import {Nav} from "./components/Nav.tsx";
import {Hero} from "./pages/Hero.tsx";
import {Featured} from "./pages/Featured.tsx";
import Menu from "./pages/Menu.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Footer from "./pages/Footer.tsx";

function App() {


  return (
   <main className="w-full min-h-screen ">
       <Nav/>
           <div
                   className="fixed w-full h-[100vh]  bg-[url('/coffebg2.jpg')] bg-cover bg-center z-[-10]"
                   style={{ willChange: 'transform' }}
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
