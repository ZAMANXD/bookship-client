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
      <BookBackground></BookBackground>
      <Cards></Cards>
      <div className="hidden lg:block">
        <MobileScroll></MobileScroll>
      </div>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default Home;
