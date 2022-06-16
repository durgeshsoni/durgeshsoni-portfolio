import { FaGithub } from "react-icons/fa";
import LightWave from "../Waves/LightWave";
import "./ProjectDark.css";

function Project2() {
  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">
            Youtube Clone
          </h3>
          <p className="project__description project__body">
            A <span className="project__specialText">Clone</span> of
            Youtube.com made in one day, using Javascript, HTML and CSS. It is <span className="project__specialText">Fully Functional</span>{" "}
            and uses API provided by Google(Youtube).<span className="project__specialText">It is a solo project, </span>executed in 2 days.
          </p>
          <p className="project__tech project__body">
            &gt; Javascript · Google API · HTML · CSS
          </p>
          <a
            className="project__sourceCodeDark"
            href="https://github.com/durgeshsoni/Youtube"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
          <a
            className="project__sourceCodeDark"
            href="https://stoic-goldwasser-611d2c.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            
            <h3 className="project__sourceCodeText">Live Demo</h3>
          </a>
        </div>
        <img
          className="project__image project__imageDark"
          src="/images/youtube1.png"
          // srcset="/images/covid_bot_project_image_small.png 750w, /images/covid_bot_project_image_large.png 1468w"
          sizes="50vw"
          alt="Covid Bot Project Commands"
          width="50%"
          height="auto"
          loading="lazy"
        />
      </div>
      <LightWave />
    </article>
  );
}

export default Project2;
