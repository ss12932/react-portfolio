import { IoIosRocket } from 'react-icons/io';
import { FaCode } from 'react-icons/fa';
const ProjectCard = ({
  image,
  alt,
  title,
  description,
  repositoryLink,
  deployedLink,
}) => {
  return (
    <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
      <figure className="h-52 overflow-hidden">
        <img
          className="w-full h-full object-cover object-top p-4 bg-blue-900"
          src={image}
          alt={alt}
        />
      </figure>
      <div className="card-body bg-blue-900 space-y-2">
        <h2 className="card-title font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
        <div className="mx-auto space-x-6">
          <button className="btn bg-[#e31a6d] mx-auto">
            <IoIosRocket />
          </button>
          <button className="btn bg-[#e31a6d] mx-auto">
            <FaCode />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
