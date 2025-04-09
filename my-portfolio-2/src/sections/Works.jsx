import "./works.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import { projects } from "../Data";
import ProjectCard from "../components/ProjectCard";
export default function Works() {
  return (
    <section id="works" className="container-fluid">
      <div className="mx-auto h-full container">
        <div className="works-wrap">
          <h2 className="section-title">Works</h2>
          {/* <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    {projects.map(project => (
                        <SwiperSlide key={project.id}>
                            <img src={project.image} alt="" />
                            <div className='project-text-wrap'>
                           <h2 className='project-title'>{project.title}</h2> 
                           <p className='project-description'>{project.description}</p>
                            </div>
                            <a href={project.link} className='project-link' target='_blank'>
                           View Work  <ArrowTopRightOnSquareIcon className='icon' /> 
                            </a>
                        </SwiperSlide>

                    ))}
                </Swiper>     */}
          <div className="wrapper">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <div className="btn-container">
            <a href="codepen.io/itzsaan" target="_blank" className="my-btn">
              {" "}
              View all Works <i className="ri-external-link-line"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
