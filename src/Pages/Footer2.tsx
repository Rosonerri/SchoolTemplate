import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-full m-h-[60vh]  flex justify-center items-center border-b mt-[20px]">
      <div className="w-[90%] h-full bg-white flex justify-around items-center flex-col">
        <div className="text-center grid grid-cols-2 gap-9 md:grid-cols-2 xl:grid-cols-2">
          <div className="rounded-[10px] h-[30vh] w-[400px] p-6">
            <div className="mb-[15px] flex"></div>
            <div className="font-[400]">
              <p>CopyWrite, All Right Reserved</p>
            </div>
          </div>
          <div className="rounded-[10px] h-[30vh] p-6 flex ml-[30px]">
            <div className="mb-[15px] flex">
              <div className="mr-[10px] w-[50px] h-[50px] rounded-[50%] shadow-md bg-blue-900 text-[white] font-[700] flex justify-center items-center">
                <FaFacebook className="text-white text-[20px]" />
              </div>
            </div>
            <div className="mb-[15px] flex">
              <div className="mr-[10px] w-[50px] h-[50px] rounded-[50%] shadow-md bg-blue-900 text-[white] font-[700] flex justify-center items-center">
                <FaTwitter className="text-white text-[20px]" />
              </div>
            </div>
            <div className="mb-[15px] flex">
              <div className="mr-[10px] w-[50px] h-[50px] rounded-[50%] shadow-md bg-blue-900 text-[white] font-[700] flex justify-center items-center">
                <FaSquareInstagram className="text-white text-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
