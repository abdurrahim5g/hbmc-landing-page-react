import Title from "../Title/Title";
import "./About.css";
import aboutImage from "../../assets/images/what-we-do.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { handleSmoothScroll } from "../../utility/utility";

const About = () => {
  return (
    <section className="about-section  py-12 md:py-20" id="about">
      <div className="site-container">
        <div className="custom-flex">
          <div className=" text-column text-center  lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 300 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <Title className="lg:text-left" subtitle={"What"}>
                We do ?
              </Title>

              <p className="font-light mt-8">
                Al Hayat building materials company “HBMC”, established in 1983,
                is a member of the well known IKK “Issam Kheiry Kabbani” group
                of companies. We are considered to be the leaders in our field
                throughout the region.
              </p>
              <p className="font-light mt-6">
                Our product range covers tools and power tools, porcelain and
                ceramic tiles, stainless steel hardware, network valves,
                sanitary ware ,sanitary fixtures, sanitary fittings, bathroom
                accessories, water heaters, kitchens and many more.
              </p>
              <p className="font-light mt-6">
                Our presence in 21 cities in the kingdom and our high levels of
                stock availability allow us to cater wholesale to 4000+ retail
                shops in the and work directly and closely with construction
                projects.
              </p>

              <div className="inline-block  mt-8">
                <Link
                  className="site-btn w-auto"
                  to="#products"
                  onClick={handleSmoothScroll}
                >
                  Shop Now
                </Link>
              </div>
            </motion.div>
          </div>

          <div className=" image-col text-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.0, duration: 1 }}
            >
              <img
                src={aboutImage}
                alt="about-image"
                className="mt-10 lg:mt-0 mx-auto lg:pr-8"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
