import HomeBanner from "@/Components/HomeBanner";
import About from "@/Components/About";
import Services from "@/Components/Services";
import Teams from "@/Components/Teams";
import GetInTouch from "@/Components/GetInTouch";
import Maps from "@/Components/Maps";
import OurServices from "@/Components/OurServices";
import WhyChooseUs from "@/Components/WhyChooseUs";
import Slides from "@/Components/slides";


export default function Home() {
  return (
  <>
  
  <HomeBanner/>
  <About/>
  <Services/>
  <Teams/>
  <Slides/>
  <WhyChooseUs/>
  <OurServices/>
  <GetInTouch/>
  <Maps/>
  </>
  );
}
