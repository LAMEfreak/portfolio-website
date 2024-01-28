import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import PropTypes from "prop-types";

const Hero = ({ heroTitle, heroSubtitle, description }) => {
  

  return (
    <>
      <div className="md:pt-[35vh] pt-[30vh]">
        <div className="mb-[40vh] flex flex-col items-center">
          <h1 className="text-3xl font-semibold text-cyan-300 md:text-6xl text-center leading-snug">
            {heroTitle}
          </h1>
          <h2 className="text-3xl md:text-4xl font-medium my-8 text-center leading-snug">
            {heroSubtitle}
          </h2>
          <p className="max-w-xl mb-8 text-center">{description}</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/LAMEfreak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="opacity-80 hover:-translate-y-2 hover:opacity-100 hover:text-yellow-400 transition duration-300"
                size={25}
              />
            </a>
            <a
              href="https://github.com/LAMEfreak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="opacity-80 hover:-translate-y-2 hover:opacity-100  hover:text-rose-400 transition duration-300"
                size={25}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/weironglee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="opacity-80 hover:-translate-y-2 hover:opacity-100 hover:text-blue-400 transition duration-300"
                size={25}
              />
            </a>
            <a
              href="https://github.com/LAMEfreak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter
                className="opacity-80 hover:-translate-y-2 hover:opacity-100  hover:text-orange-200 transition duration-300"
                size={25}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

Hero.propTypes = {
  heroTitle: PropTypes.string.isRequired,
  heroSubtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Hero;
