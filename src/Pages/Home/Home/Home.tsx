import React from "react";
import Cards from "../../../components/Cards/Cards";
import useTitle from "../../../hooks/useTitle";
import DownloadApp from "../DownloadApp/DownloadApp";
import Ads from "../Ads/Ads";
import BookBackground from "../BookBackground/BookBackground";
import GetInTouch from "../GetInTouch/GetInTouch";
import NewReleases from "../NewReleases/NewReleases";
import Testimonials from "../Testimonials/Testimonials";
import TopBanner from "../TopBanner/TopBanner";
import TopBooks from "../TopBooks/TopBooks";

const Home = () => {
  useTitle("");

  return (
    <div>
      <TopBanner></TopBanner>
      <Ads></Ads>
      <TopBooks></TopBooks>
      <NewReleases></NewReleases>
      <Testimonials></Testimonials>

      {/* <Cards></Cards> */}
      <div className="hidden md:block">
        {" "}
        <DownloadApp></DownloadApp>
      </div>
      <div className="hidden md:block">
        <GetInTouch></GetInTouch>
      </div>
    </div>
  );
};

export default Home;
