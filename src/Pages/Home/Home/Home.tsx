import React from "react";
import Cards from "../../../components/Cards/Cards";
import useTitle from "../../../hooks/useTitle";
import DownloadApp from "../DownloadApp/DownloadApp";
import GetInTouch from "../GetInTouch/GetInTouch";
import NewReleases from "../NewReleases/NewReleases";
import Testimonials from "../Testimonials/Testimonials";
import TopBanner from "../TopBanner/TopBanner";
import TopBooks from "../TopBooks/TopBooks";
import 'react-chatbot-kit/build/main.css';

const Home = () => {
  useTitle("");

  return (
    <div>
      <TopBanner></TopBanner>
      <TopBooks></TopBooks>
      <NewReleases></NewReleases>
      <Testimonials></Testimonials>
      <Cards></Cards>
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
