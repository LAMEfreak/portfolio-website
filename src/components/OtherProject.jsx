import { MdOutlineFolderOpen } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";
import PropTypes from "prop-types";

const OtherProject = ({ title, text, link, type }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="bg-[#0d253f] p-8 rounded-md shadow-2xl relative transition-all transform hover:-translate-y-3 xl:h-[20rem]">
        <MdOutlineFolderOpen className="text-[#c4d5e7] mb-6" size={40} />
        <HiOutlineExternalLink
          className="text-[#c4d5e7] absolute right-8 top-8"
          size={30}
        />
        <p className="text-[#b0d1f5] font-semibold text-xl mb-4">{title}</p>
        <p className="text-[#89b1db]">{text}</p>
        <p className="text-[#61768d] mt-6 upp text-sm font-semibold tracking-wider uppercase ">
          {type}
        </p>
      </div>
    </a>
  );
};

OtherProject.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default OtherProject;
