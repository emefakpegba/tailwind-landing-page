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
      <Banner />
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
