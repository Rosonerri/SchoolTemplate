import img from "../assets/banner-img.png";
import img2 from "../assets/beam.png";
import TypeWriter from "typewriter-effect";

import { IoSearch } from "react-icons/io5";
const HomeScreen = () => {
  return (
    <div
      className="h-[91vh] w-full flex justify-center items-center"
      style={{
        backgroundImage: `url(${img2})`,
      }}
    >
      <div className="w-[95%] h-full justify-center flex items-center">
        <div className="w-[100%] xl:w-[50%] h-full flex justify-center items-center flex-col md:w-[50%]">
          <div className=" font-[] md:text-[35px] xl:text-[60px] text-blue-950 text-[30px]">
            The Smarter Way to Learn.....
            <TypeWriter
              options={{
                strings: ["Anything", "AnyWhere", "AnyTime"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="text-[18px] text-center md:text-[18px] xl:mr-[60px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ea
            iure reprehenderit veniam. Accusantium temporibus laborum officia
            itaque?
          </p>
          <div className="mt-[50px] flex w-[90%] h-[50px] rounded-[30px] overflow-hidden shadow-md md:w-[95%]">
            <input
              type="text"
              className="flex-1 outline-none"
              placeholder="search schools"
            />
            <div className="w-[10%] flex justify-center items-center text-[25px]">
              <IoSearch />
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full xl:flex justify-center items-center md:w-[50%] hidden md:block">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
