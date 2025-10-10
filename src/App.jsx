import Navbar from "./components/Navbar";
import Prices from "./components/Prices";
import Newsletter from "./components/Newsletter";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Banner from "./components/Banner";
//import Mode from "./components/Mode";

function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10 h-full w-full bg-white/50 backdrop-blur" />
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-800/50 px-6 py-2.5 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 sm:px-3.5 sm:before:flex-1">
        <Banner />
      </div>

      <div>
        <Navbar />
        <Prices />
        <Testimonials />
        <Newsletter />
        <Team />
        <Contact />
      </div>
    </>
  );
}

export default App;
