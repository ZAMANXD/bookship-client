import React from "react";
import Lottie from "lottie-react";
import "./Card.css";
const Card = ({ data, stickyTopSpace }) => {
  const { title, body, img, blue } = data;
  // console.log(stickyTopSpace);

  return (
    <div
      className={`sticky grid grid-cols-1 overflow-hidden rounded-xl card ${blue} shadow-[0px_0px_30px_-10px_rgba(0,0,0,0.1)] md:grid-cols-2`}
      style={{ top: stickyTopSpace }}
      data-aos="flip-down"
      data-aos-delay="100"
    >
      <div className="flex flex-col justify-center p-5">
        <div className="space-y-4">
          <h2 className="font-serif text-2xl -mb-2 font-bold">{title}</h2>
          <p className="lg:w-3/4 text-lg">{body}</p>
        </div>
      </div>
      <div className="relative min-h-[200px] md:min-h-[400px]">
        <Lottie className="w-10/12 mx-auto " animationData={img} loop={true} />

        {/* object-cover */}
      </div>
    </div>
  );
};

export default Card;
