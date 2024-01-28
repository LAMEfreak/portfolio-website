import PropTypes from "prop-types";

const ProjectHighlight = ({ componentColors, componentContent }) => {
  const { headerColor, bgColor, textColor, bgColorPill, textColorPill } =
    componentColors;
  const { title, description, technologies, video, link } = componentContent;
  return (
    <div className="mb-20 xl:mb-60">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="relative z-10">
          <h3
            className={`${headerColor} font-semibold text-4xl mb-8 text-center sm:text-left`}
          >
            {title}
          </h3>
          <div
            className={`w-[100%] xl:w-[55%] ${bgColor} p-8 leading-7 ${textColor} rounded-lg shadow-2xl`}
          >
            {description}
            <div className="flex gap-3 flex-wrap mt-6">
              {technologies.map((technology) => {
                return (
                  <div
                    key={technology}
                    className={`${bgColorPill} ${textColorPill} px-4 rounded-2xl text-[14px] font-semibold`}
                  >
                    {technology}
                  </div>
                );
              })}
            </div>

            <a href={link} target="_blank" rel="noreferrer">
              <div className="absolute hidden xl:block mb-4 -top-0 left-2/4 z-[-2] ">
                <video
                  src={video}
                  type="video/mp4"
                  width="800"
                  className="rounded-2xl opacity-70 hover:shadow-2xl hover:opacity-100 transition duration-300"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

ProjectHighlight.propTypes = {
  componentColors: PropTypes.shape({
    headerColor: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    bgColorPill: PropTypes.string.isRequired,
    textColorPill: PropTypes.string.isRequired,
  }),

  componentContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    video: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};

export default ProjectHighlight;
