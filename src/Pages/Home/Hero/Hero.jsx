import { Link } from "react-router-dom";
import "./Hero.css";
import heroImg from "../../../assets/images/hero-image.png";
import { LanguageContex } from "../../../Contex/LanguageProvider";
import { useContext } from "react";

const Hero = () => {
  const { t } = useContext(LanguageContex);

  return (
    <div className="hero-section border py-12 lg:py-20">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-content-center">
          <div className="hero-text grid place-content-center">
            <h1 className="text-4xl  md:text-6xl hero-title text-center font-medium lg:text-left">
              {t("heroTitle")}
            </h1>
            <p className="text-center lg:text-left font-light mt-6 mb-10">
              {t("heroSubtitle")}
            </p>

            <div className="hero-buttons flex gap-5 justify-center lg:justify-start">
              <Link to="#" className="site-btn">
                Know More
              </Link>
              <Link to="#" className="site-btn btn-outline">
                See Collection
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImg} alt="hero-image" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
