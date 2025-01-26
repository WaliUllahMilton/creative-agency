
import Nav from "./components/Nav";
import Banner from "./pages/Banner";
import ContactUs from "./pages/ContactUs";
import OurPortfolio from "./pages/OurPortfolio";
import Services from "./pages/Services";

export default function Home() {
  return (
     <>
      <div>
        <Nav/>
        <Banner/>
      </div>
      <Services/>
      <OurPortfolio/>
      <ContactUs/>
     </>
  );
}
