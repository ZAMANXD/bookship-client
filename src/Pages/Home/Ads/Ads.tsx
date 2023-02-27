import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import AdsCard from "./AdsCard";

const Ads = () => {
  const [books, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://bookship-server-zamanxd.vercel.app/books")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };
  const adsBooks = books?.filter((b: any) => b.advertice === true);
  return (
    <div
      className={`${
        books.length === 0 ? "hidden" : "block"
      } sm:w-[32rem]  mx-auto`}
    >
      <Slider {...settings}>
        {adsBooks?.map((book, index) => (
          <AdsCard key={index} book={book} />
        ))}
      </Slider>
    </div>
  );
};

export default Ads;
