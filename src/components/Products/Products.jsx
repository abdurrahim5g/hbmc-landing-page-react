import Title from "../Title/Title";
import "./Products.css";
import product1 from "../../assets/images/products/product-1.png";
import product2 from "../../assets/images/products/product-2.png";
import product3 from "../../assets/images/products/product-3.png";
import { FaStar } from "react-icons/fa";

const Products = () => {
  const products = [
    {
      title: "Faucets",
      desc: "Lorem ipsum dolor sit amet consectetur. Vulputate ut arcu. ",
      rating: 4,
      image: product1,
    },
    {
      title: "Sanitary Ware",
      desc: "Lorem ipsum dolor sit amet consectetur. Vulputate ut arcu. ",
      rating: 4,
      image: product2,
    },
    {
      title: "Tiles",
      desc: "Lorem ipsum dolor sit amet consectetur. Vulputate ut arcu. ",
      rating: 4,
      image: product3,
    },
  ];
  return (
    <section className="projects-section py-12">
      <div className="site-container">
        <Title>Products</Title>

        <div className="products-grid mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {products?.map((p, index) => (
              <div key={index} className="single-product rounded-lg">
                <div className="product-body">
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <div className="product-img">
                  <img src={p.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
