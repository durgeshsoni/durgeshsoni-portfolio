import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";
import { useMediaQuery } from "react-responsive";
import "./ProjectLight.css";

function Project1({ id }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <article id={id} className="project light">
      <h2 className="project__header">Projects</h2>
      <div className="project__main">
        {/* <img
          className="project__image project__specialMobileImage"
          src="/images/health_fusion_home.png"
          alt="Health Fusion Project Home Page"
          width="15%"
          height="auto"
          loading="lazy"
        /> */}
        {isDesktopOrLaptop ? (
          <>
            {/* <img
              className="project__image"
              src="/images/health_fusion_add.png"
              alt="Health Fusion Map Page"
              width="15%"
              height="auto"
              loading="lazy"
            /> */}
            <img
              className="project__image"
              src="/images/zee5.png"
              alt="Health Fusion Project Add Page"
              width="50%"
              height="auto"
              loading="lazy"
            />
          </>
        ) : (
          <> </>
        )}

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Zee5 Clone</h3>
          <p className="project__description project__body">
          Zee5 is a <span className="project__specialText"> Indian Tv</span> Show platform.{" "}
            <span className="project__specialText">
           Zee5 provide you 
            </span>
             {" "} subscription-based service that allows our end users to access entertainment content including movies and series streamed over the internet to certain Devices.{" "}
            <span className="project__specialText">We are giving our </span>100% to built it same as Zee5. {" "}
            <span className="project__specialText">There are lots </span>
            of features on this {" "}website we have built.
            <span className="project__specialText">A collaborative project</span>
            {"\n"}built by a team of 5, executed in 5 days.
          </p>
          <p className="project__tech project__body">
            &gt; Javascript ?? CSS ?? HTML 
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/durgeshsoni/zee-5-"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
          <a
            className="project__sourceCode"
            href="https://zee5.durgeshsoni.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <h3 className="project__sourceCodeText">Live Demo</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project1;
