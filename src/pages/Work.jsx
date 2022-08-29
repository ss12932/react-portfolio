import { IoIosRocket } from 'react-icons/io5';
import { FaCode } from 'react-icons/fa';

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:min-h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-7xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
            <figure className="h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top p-4 bg-blue-900"
                src="https://github.com/ss12932/horiseon-code-refactor/raw/main/Assets/images/01-html-css-git-homework-demo.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-blue-900 space-y-2">
              <h2 className="card-title font-bold">Horiseon Code Refactor</h2>
              <p className="text-sm">
                A refactored codebase to improve acccessibility for end users
                with disabilities and also to optimise SEO.
              </p>
              <div className="mx-auto space-x-6">
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaGithub />
                </button>
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaCode />
                </button>
              </div>
            </div>
          </div>
          <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
            <figure className="h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top p-4 bg-blue-900"
                src="https://github.com/ss12932/professional-portfolio/raw/main/assets/images/application-screenshot.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-blue-900 space-y-2">
              <h2 className="card-title font-bold ">Professional Portfolio</h2>
              <p className="text-sm">
                A professional portfolio created from scratch using only HTML,
                CSS and vanilla Javascript.
              </p>
              <div className="mx-auto space-x-6">
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaGithub />
                </button>
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaCode />
                </button>
              </div>
            </div>
          </div>
          <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
            <figure className="h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top p-4 bg-blue-900"
                src="https://github.com/ss12932/password-generator/raw/main/Assets/03-javascript-homework-demo.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-blue-900 space-y-2">
              <h2 className="card-title font-bold">Password Generator</h2>
              <p className="text-sm">
                An application that enables employees to generate a random
                password based on criteria that they've selected.
              </p>
              <div className="mx-auto space-x-6">
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaGithub />
                </button>
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaCode />
                </button>
              </div>
            </div>
          </div>
          <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
            <figure className="h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top p-4 bg-blue-900"
                src="https://github.com/ss12932/js-code-quiz/raw/main/assets/img/app-screenshot.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-blue-900 space-y-2">
              <h2 className="card-title font-bold">Code Quiz</h2>
              <p className="text-sm">
                A timed coding quiz with multiple choice questions. The
                application will run in the browser and will feature dynamically
                generated HTML and CSS powered by Javascript. It will also
                feature a highscore section to gauge progress with fellow peers.
              </p>
              <div className="mx-auto space-x-6">
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaGithub />
                </button>
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaCode />
                </button>
              </div>
            </div>
          </div>
          <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
            <figure className="h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top p-4 bg-blue-900"
                src="https://github.com/ss12932/day-planner/raw/main/assets/img/app-img.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-blue-900 space-y-2">
              <h2 className="card-title font-bold">Day Planner</h2>
              <p className="text-sm">
                A simple calender application that allows a user to save events
                for standard business hours of 9am-6pm. This app will run in the
                browser and feature dynamically updated HTML and CSS powered by
                jQuery.
              </p>
              <div className="mx-auto space-x-6">
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaGithub />
                </button>
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaCode />
                </button>
              </div>
            </div>
          </div>
          <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
            <figure className="h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top p-4 bg-blue-900"
                src="https://github.com/ss12932/weather-dashboard/raw/main/assets/img/desktop-view.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-blue-900 space-y-2">
              <h2 className="card-title font-bold">Weather Dashboard</h2>
              <p className="text-sm">
                A weather dashboard that will run in the browser and feature
                dynamically with updated HTML and CSS. Using the Openweather one
                call API to retrieve weather data for cities and use local
                storage to store persistent data.
              </p>
              <div className="mx-auto space-x-6">
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaGithub />
                </button>
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaCode />
                </button>
              </div>
            </div>
          </div>
          <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
            <figure className="h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top p-4 bg-blue-900"
                src="https://github.com/ss12932/weather-dashboard/raw/main/assets/img/desktop-view.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-blue-900 space-y-2">
              <h2 className="card-title font-bold">Weather Dashboard</h2>
              <p className="text-sm">
                A weather dashboard that will run in the browser and feature
                dynamically with updated HTML and CSS. Using the Openweather one
                call API to retrieve weather data for cities and use local
                storage to store persistent data.
              </p>
              <div className="mx-auto space-x-6">
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaGithub />
                </button>
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaCode />
                </button>
              </div>
            </div>
          </div>
          <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
            <figure className="h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top p-4 bg-blue-900"
                src="https://github.com/ss12932/currency-news-project/raw/main/assets/images/app/home-page.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-blue-900 space-y-2">
              <h2 className="card-title font-bold">
                MoneyMail - Currency News Project
              </h2>
              <p className="text-sm">
                An app that allows you to exchange currencies with a click of a
                button. The chosen currencies will display news articles,
                informing users of current news surrounding the currency.
              </p>
              <div className="mx-auto space-x-6">
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaGithub />
                </button>
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaCode />
                </button>
              </div>
            </div>
          </div>
          <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
            <figure className="h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top p-4 bg-blue-900"
                src="https://github.com/ss12932/readme-generator/raw/main/public/assets/images/screenshot.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-blue-900 space-y-2">
              <h2 className="card-title font-bold">Readme Generator</h2>
              <p className="text-sm">
                A command-line application that dynamically generates a
                professional README.md file from a user's input using the
                Inquirer package.
              </p>
              <div className="mx-auto space-x-6">
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaGithub />
                </button>
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaCode />
                </button>
              </div>
            </div>
          </div>
          <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
            <figure className="h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top p-4 bg-blue-900"
                src="https://github.com/ss12932/team-profile-generator/raw/main/public/assets/img/team-profile.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-blue-900 space-y-2">
              <h2 className="card-title font-bold">Team Profile Generator</h2>
              <p className="text-sm">
                A Node.js CLI application that takes in information about
                employees on a software engineering team , then generates a HTML
                webpage that displays summaries for each person. This
                application will be following TDD principles using jest to make
                code more maintainable.
              </p>
              <div className="mx-auto space-x-6">
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaGithub />
                </button>
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaCode />
                </button>
              </div>
            </div>
          </div>
          <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
            <figure className="h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top p-4 bg-blue-900"
                src="https://github.com/ss12932/note-taker/raw/main/public/assets/images/11-express-homework-demo-02.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-blue-900 space-y-2">
              <h2 className="card-title font-bold">Note Taker</h2>
              <p className="text-sm">
                An application that can be used to write and save notes. This
                application will use an Express.js back end and will save and
                retrieve note data from a JSON file.
              </p>
              <div className="mx-auto space-x-6">
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaGithub />
                </button>
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaCode />
                </button>
              </div>
            </div>
          </div>
          <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
            <figure className="h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top p-4 bg-blue-900"
                src="https://github.com/ss12932/employee-tracker/raw/main/public/assets/images/cms_screenshot.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-blue-900 space-y-2">
              <h2 className="card-title font-bold">Employee Tracker</h2>
              <p className="text-sm">
                A command-line application that manages a company's employee
                database, using Node.js, Inquirer, and MySQL.
              </p>
              <div className="mx-auto space-x-6">
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaGithub />
                </button>
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaCode />
                </button>
              </div>
            </div>
          </div>
          <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
            <figure className="h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top p-4 bg-blue-900"
                src="https://github.com/ss12932/employee-tracker/raw/main/public/assets/images/cms_screenshot.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-blue-900 space-y-2">
              <h2 className="card-title font-bold">Employee Tracker</h2>
              <p className="text-sm">
                A command-line application that manages a company's employee
                database, using Node.js, Inquirer, and MySQL.
              </p>
              <div className="mx-auto space-x-6">
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaGithub />
                </button>
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaCode />
                </button>
              </div>
            </div>
          </div>
          <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
            <figure className="h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top p-4 bg-blue-900"
                src="https://github.com/ss12932/mvp-pet-app/raw/main/public/images/UI1.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body bg-blue-900 space-y-2">
              <h2 className="card-title font-bold">My Valuable Pet</h2>
              <p className="text-sm">
                This full-stack application has been designed with pet owners in
                mind, giving the user the ability to keep track of all their
                pets needs and data.
              </p>
              <div className="mx-auto space-x-6">
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaGithub />
                </button>
                <button className="btn bg-[#e31a6d] mx-auto">
                  <FaCode />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
