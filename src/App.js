import Card from "./pages/Card";
import Faq from "./pages/Faq";
import Footer from "./pages/Footer";
import Media from "./pages/Media";
import Navbar from "./pages/Navbar";
import Partners from "./pages/Partners";
import PlanCard from "./pages/PlanCard";
import Section from "./pages/Section";
import Workshop from "./pages/Workshop";

function App() {
  return (
    <div>
      <Navbar/>
      <Section/>
      <Card/>
      <PlanCard/>
      <Workshop/>
      <Media/>
      <Partners/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
