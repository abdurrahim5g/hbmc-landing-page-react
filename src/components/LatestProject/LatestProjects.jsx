import Title from "../Title/Title";
import "./LatestProjects.css";

// porjects image
import project1 from "../../assets/images/projects/project-1.png";
import project2 from "../../assets/images/projects/project-2.png";
import project3 from "../../assets/images/projects/project-3.png";
import play from "../../assets/images/play.png";

const LatestProject = () => {
  const projects = [project1, project2, project3];
  return (
    <section className="projects-section py-12">
      <div className="site-container">
        <Title>Latest Projects</Title>

        <div className="projects-row mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 ">
            {projects?.map((p) => (
              <div key={p} className="single-project">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProject;
