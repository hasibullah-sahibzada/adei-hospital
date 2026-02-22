import About from "./Components/About/About";
import AchieveSection from "./Components/Achive/AchieveSection";
import Doctors from "./Components/Doctors/Doctors";
import Footer from "./Components/Footer/Footer";
import Gallary from "./Components/Gallary/Gallary";
import HealthGuidance from "./Components/Health/HealthGuidance";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import ServicesSection from "./Components/Services/ServicesSection";
import Testimonals from "./Components/Testimonial/Testimonals";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ServicesSection />
      <AchieveSection />
      <Doctors />
      <Gallary />
      <Testimonals />
      <HealthGuidance />
      <Footer />
    </>
  );
}

export default App;
