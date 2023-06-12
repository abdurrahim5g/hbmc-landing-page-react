import Title from "../Title/Title";
import "./About.css";
import aboutImage from "../../assets/images/what-we-do.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-section  py-12 md:py-20">
      <div className="site-container">
        <div className="custom-flex">
          <div className=" text-column text-center  lg:text-left">
            <Title className="lg:text-left" subtitle={"What"}>
              We do ?
            </Title>

            <p className="font-light mt-8">
              Our team of experts is committed to providing you with the best
              possible service, from start to finish. We work closely with you
              to understand your needs and ensure that we deliver the right
              materials for your project
            </p>

            <h3 className="mt-5 mb-2 font-semibold">
              Source and Supply Materials
            </h3>
            <p className="font-light">
              We have a vast network of suppliers and manufacturers, and we
              source the best quality building materials at competitive prices.
            </p>
            <div className="inline-block  mt-8">
              <Link className="site-btn w-auto" to={"#"}>
                Shop Now
              </Link>
            </div>
          </div>

          <div className=" image-col text-center">
            <img
              src={aboutImage}
              alt="about-image"
              className="mt-10 lg:mt-0 mx-auto lg:pr-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
