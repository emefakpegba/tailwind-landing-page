import Navbar from "./components/Navbar";
import Prices from "./components/Prices";
import Newsletter from "./components/Newsletter";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Contact from "./components/Contact";
//import Mode from "./components/Mode";

function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Prices />
      <Testimonials />
      <Newsletter />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
