import Navbar from "./components/Navbar";
import Banner from "./components/Banner"; // Moved up to be closer to where it's used
import Prices from "./components/Prices";
import Testimonials from "./components/Testimonials"; // Grouped with other content sections
import Newsletter from "./components/Newsletter";
import Team from "./components/Team";
import Contact from "./components/Contact";
//import Mode from "./components/Mode"; // Kept commented out as in the original

function App() {
  return (
    <>
        <div className="relative isolate flex items-center justify-center w-full gap-x-6 overflow-hidden bg-gray-800/50 px-6 py-2.5 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 sm:px-3.5">
          <div className="w-full max-w-7xl mx-auto">
            <Banner />
          </div>
        </div>

      <div className="relative z-0">
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
