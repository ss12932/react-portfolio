import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import Mongo from '../assets/mongo.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';
import React from '../assets/react.png';
import MySQL from '../assets/mysql.png';
import Git from '../assets/git.png';
import Bootstrap from '../assets/bootstrap.png';
import Firebase from '../assets/firebase.png';
import JQuery from '../assets/jquery.png';
import Heroku from '../assets/heroku.png';
import Mongoose from '../assets/mongoose.png';
import Express from '../assets/express.png';
import Vercel from '../assets/vercel.png';

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl inline border-b-4 border-pink-600">
            Experience
          </p>
          <p className="py-4">These are the technologies I've worked with:</p>
        </div>
        {/* TODO: sort out attributions to images later */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-500 bg-blue-900">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-500 bg-blue-900">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-500 bg-blue-900">
            <img className="w-20 mx-auto" src={JS} alt="Javascript icon" />
            <p className="my-4">JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-500 bg-blue-900">
            <img className="w-20 mx-auto" src={JQuery} alt="Git icon" />
            <p className="my-4">jQuery</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-500 bg-blue-900">
            <img className="w-20 mx-auto" src={Bootstrap} alt="Git icon" />
            <p className="my-4">Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-500 bg-blue-900">
            <img className="w-20 mx-auto" src={Mongo} alt="MongoDB icon" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-500 bg-blue-900">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-500 bg-blue-900">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-500 bg-blue-900">
            <img className="w-20 mx-auto" src={React} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-500 bg-blue-900">
            <img className="w-20 mx-auto" src={MySQL} alt="MySQL icon" />
            <p className="my-4">MySQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-500 bg-blue-900">
            <img className="w-20 mx-auto" src={Firebase} alt="Firebase icon" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-500 bg-blue-900">
            <img className="w-20 mx-auto" src={Heroku} alt="Heroku icon" />
            <p className="my-4">Heroku</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-500 bg-blue-900">
            <img className="w-20 mx-auto" src={Mongoose} alt="Heroku icon" />
            <p className="my-4">Mongoose</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-500 bg-blue-900">
            <img className="w-20 mx-auto" src={Vercel} alt="Heroku icon" />
            <p className="my-4">Vercel</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-500 bg-blue-900">
            <img className="w-20 mx-auto" src={Express} alt="Heroku icon" />
            <p className="my-4">Express</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
