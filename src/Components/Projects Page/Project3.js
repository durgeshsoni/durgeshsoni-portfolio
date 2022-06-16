import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project3() {
  return (
    <article className="project light">
      
      <div className="project__main">
        <img
          className="project__image"
          src="/images/food1.png"
          // srcset="/images/flavour_flow_image_large.png 750w, /images/flavour_flow_image_large.png 1468w"
          sizes="50vw"
          alt="Flavout Flow Landing Page"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Food App</h3>
          <p className="project__description project__body">
            A <span className="project__specialText">Food App</span> project
            created during the bootcamp. I have used{" "}
            <span className="project__specialText">food API.</span> Features:{" "}ite Section - Users can add a favorite food, Add to Cart, Wallet Section, Checkout Page, and many more.
            <span className="project__specialText">location</span>. It is a solo project,
            executed in 4 days. {" "}
            
          </p>
          <p className="project__tech project__body">
            &gt; Javascript · CSS · HTML · API
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/durgeshsoni/Food-App"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
          <a
            className="project__sourceCode"
            href="https://inspiring-gnome-8e6791.netlify.app"
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

export default Project3;
