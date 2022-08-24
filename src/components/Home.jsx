import { HiArrowNarrowRight, HiArrowNarrowDown } from 'react-icons/hi';

function Home() {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Sinh Fu San
        </h1>
        <h2 className="text-4xl sm:text:text-7xl font-bold text-[#8892b0]">
          I'm a full stack web developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a full stack developer specializing in the MERN stack. Currently,
          I'm focused on building responsive full stack applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="block group-hover:hidden">
              <HiArrowNarrowRight className="ml-3" />
            </span>
            <span className="hidden group-hover:block">
              <HiArrowNarrowDown className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
