import Title from "../Title/Title";
import "./LatestProjects.css";

// porjects image
import project1 from "../../assets/images/projects/project-1.png";
import project2 from "../../assets/images/projects/project-2.png";
import project3 from "../../assets/images/projects/project-3.png";
import play from "../../assets/images/play.png";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const LatestProject = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplaySpeed: 3500,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    prevArrow: (
      <button id="prev" className="slider-control">
        <FaAngleLeft />
      </button>
    ),
    nextArrow: (
      <button id="next" className="slider-control">
        <FaAngleRight />
      </button>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projects = [project1, project2, project3, project1, project2, project3];
  return (
    <section className="projects-section py-12">
      <div className="site-container">
        <Title>Latest Projects</Title>

        <div className="projects-row mt-10">
          <div className="projects-slider relative">
            <Slider {...settings}>
              {projects?.map((p) => (
                <div key={p} className="px-4">
                  <div className="single-project">
                    <div className="project-image">
                      <img src={p} alt="" />
                    </div>

                    <div className="project-info">
                      <div className="play">
                        <button>
                          <img src={play} alt="" />
                          <span>Watch video</span>
                        </button>
                      </div>
                      <h3 className="mt-5 text-lg font-semibold">
                        Al Raha Beach Buildings
                      </h3>

                      <p className="font-light text-sm lg:text-lg">
                        Lorem ipsum dolor sit amet consectetur. Ac dui blandit
                        rhoncus sit nulla sagittis.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProject;
