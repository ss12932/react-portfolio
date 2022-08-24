import PetMVP from '../assets/mvppet.png';

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
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
                className="w-full h-full object-cover object-top"
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
                <button className="btn bg-[#e31a6d] mx-auto">Demo</button>
                <button className="btn bg-[#e31a6d] mx-auto">Code</button>
              </div>
            </div>
          </div>
          <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
            <figure className="h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
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
                <button className="btn bg-[#e31a6d] mx-auto">Demo</button>
                <button className="btn bg-[#e31a6d] mx-auto">Code</button>
              </div>
            </div>
          </div>
          <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
            <figure className="h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
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
                <button className="btn bg-[#e31a6d] mx-auto">Demo</button>
                <button className="btn bg-[#e31a6d] mx-auto">Code</button>
              </div>
            </div>
          </div>
          <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
            <figure className="h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
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
                <button className="btn bg-[#e31a6d] mx-auto">Demo</button>
                <button className="btn bg-[#e31a6d] mx-auto">Code</button>
              </div>
            </div>
          </div>
          <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
            <figure className="h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
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
                <button className="btn bg-[#e31a6d] mx-auto">Demo</button>
                <button className="btn bg-[#e31a6d] mx-auto">Code</button>
              </div>
            </div>
          </div>
          <div className="card max-w-sm bg-base-100 shadow-xl rounded-none mx-auto">
            <figure className="h-52 overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
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
                <button className="btn bg-[#e31a6d] mx-auto">Demo</button>
                <button className="btn bg-[#e31a6d] mx-auto">Code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
