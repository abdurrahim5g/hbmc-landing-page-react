import Title from "../Title/Title";
import brand1 from "../../assets/images/brands/b-1.png";
import brand2 from "../../assets/images/brands/b-2.png";
import brand3 from "../../assets/images/brands/b-3.png";
import brand4 from "../../assets/images/brands/b-4.png";
import brand5 from "../../assets/images/brands/b-5.png";
import brand6 from "../../assets/images/brands/b-6.png";
import "./Brands.css";

const Brands = () => {
  return (
    <section className="projects-section py-12">
      <div className="container mx-auto px-4">
        <Title>Brands</Title>

        <div className="brands-logo mt-10">
          <div className="logos">
            <div>
              <img src={brand1} alt="Brand logo" className="w-auto" />
            </div>
            <div>
              <img src={brand2} alt="Brand logo" className="w-auto" />
            </div>
            <div>
              <img src={brand3} alt="Brand logo" className="w-auto" />
            </div>
            <div>
              <img src={brand4} alt="Brand logo" className="w-auto" />
            </div>
            <div>
              <img src={brand5} alt="Brand logo" className="w-auto" />
            </div>
            <div>
              <img src={brand6} alt="Brand logo" className="w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
