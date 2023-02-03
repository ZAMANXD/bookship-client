import React from "react";
import useTitle from "../../../hooks/useTitle";
import GetInTouch from "../GetInTouch/GetInTouch";
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
      <WhyBookShip></WhyBookShip>
      <Testimonials></Testimonials>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default Home;
