import React from "react";
import Cards from "../../../components/Cards/Cards";
import useTitle from "../../../hooks/useTitle";
import BookBackground from "../BookBackground/BookBackground";
import GetInTouch from "../GetInTouch/GetInTouch";
import MobileScroll from "../MobileScroll/MobileScroll";
import NewReleases from "../NewReleases/NewReleases";
import Testimonials from "../Testimonials/Testimonials";
import TopBanner from "../TopBanner/TopBanner";
import TopBooks from "../TopBooks/TopBooks";
import WhyBookShip from "../WhyBookShip/WhyBookShip";


const Home = () => {
  useTitle("");

  return (
    <div>
      <TopBanner></TopBanner>
      <TopBooks></TopBooks>
      <NewReleases></NewReleases>
      {/* <WhyBookShip></WhyBookShip> */}
      <Testimonials></Testimonials>
      {/* <BookBackground></BookBackground> */}
      <Cards></Cards>
      <div className="custom_Css">
        <div className="hidden lg:block sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
          <MobileScroll></MobileScroll>
        </div>
      </div>
      <div className="hidden md:block">
        <GetInTouch></GetInTouch>
      </div>
    </div>
  );
};

export default Home;
