import About from "../../components/About/About";
import OurStats from "../../components/OurStats/OurStats";
import Products from "../../components/Products/Products";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <OurStats></OurStats>
      <About></About>
      <Products></Products>
    </>
  );
};

export default Home;
