import React from "react";
import gallery1 from "../assets/mainimgs/Labkids.jpg";
import gallery2 from "../assets/mainimgs/istockphoto-950614324-612x612.jpg";
import gallery3 from "../assets/mainimgs/Teacherandstudents.jpg";
import gallery4 from "../assets/mainimgs/Classkids.jpg";
import gallery5 from "../assets/mainimgs/Child1.jpg";
import gallery6 from "../assets/mainimgs/Child2.jpg";
import GalleryProps from "./Props/GalleryProps";

const Gallery = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[85%] flex justify-center items-center flex-col">
        <div className="text-[25px] font-bold text-blue-950">
          OUR PHOTO GALLERY
        </div>
        <div className="font-medium text-center text-blue-950">
          Stay up to date with all our latest news and launches. Only the best
          quality makes it onto our blog!
        </div>
        <div className="w-full  py-[50px] gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 place-items-center ">
          <div className="w-[100%] flex justify-center items-center">
            <GalleryProps img={gallery1} />
          </div>
          <div className="w-[100%] flex justify-center items-center">
            <GalleryProps img={gallery2} />
          </div>
          <div className="w-[100%] flex justify-center items-center">
            <GalleryProps img={gallery3} />
          </div>
          <div className="w-[100%] flex justify-center items-center">
            <GalleryProps img={gallery4} />
          </div>
          <div className="w-[100%] flex justify-center items-center">
            <GalleryProps img={gallery5} />
          </div>
          <div className="w-[100%] flex justify-center items-center">
            <GalleryProps img={gallery6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
