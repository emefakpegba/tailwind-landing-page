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
    // The main container should probably be a fragment or a semantic element like <main>
    // if it represents the main content of the document. Using a fragment here.
    <>
      /* 1. Banner Section - Placed outside the main content flow, usually at the top */}
        <div className="relative isolate flex items-center justify-center w-full gap-x-6 overflow-hidden bg-gray-800/50 px-6 py-2.5 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 sm:px-3.5">
          <div className="w-full max-w-7xl mx-auto">
            <Banner />
          </div>
        </div>

        {/* 2. Background Layer - A fixed, blurred background element */}
      {/* Changed class to 'fixed' to position it relative to the viewport.
          If this is meant to be a full-screen background, it's correct. */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white/50 backdrop-blur" />

      {/* 3. Main Application Content - Grouped logically */}
      <div className="relative z-0">
        {/* Added a main wrapper div for better structure and to ensure components layer correctly 
            above the fixed background (-z-10). The default z-index is 0. */}
        <Navbar />
        {/* Standard Content Flow:
          A common practice is to have a Hero/Main content section (often implicitly the area after Navbar), 
          followed by features, testimonials, pricing, and then a footer/contact.
        */}
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
