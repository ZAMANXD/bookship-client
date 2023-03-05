import React from "react";
import {Chatbot} from "react-chatbot-kit";
import Cards from "../../../components/Cards/Cards";
import useTitle from "../../../hooks/useTitle";
// import Ads from "../Ads/Ads";
// import BookBackground from "../BookBackground/BookBackground";
import DownloadApp from "../DownloadApp/DownloadApp";
import GetInTouch from "../GetInTouch/GetInTouch";
import NewReleases from "../NewReleases/NewReleases";
import Testimonials from "../Testimonials/Testimonials";
import TopBanner from "../TopBanner/TopBanner";
import TopBooks from "../TopBooks/TopBooks";
import messageParser from "../../../components/Chatbot/MessageParser";
import actionProvider from "../../../components/Chatbot/ActionProvider";
import config from "../../../components/Chatbot/Config";
import 'react-chatbot-kit/build/main.css';

const Home = () => {
  useTitle("");

  return (
    <div>
      <TopBanner></TopBanner>
      {/* <Ads></Ads> */}
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
      <Chatbot config={config} messageParser={messageParser} actionProvider={actionProvider}></Chatbot>
    </div>
  );
};

export default Home;
