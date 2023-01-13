import React from 'react';
import GetInTouch from '../GetInTouch/GetInTouch';
import NewReleases from '../NewReleases/NewReleases';
import TopBanner from '../TopBanner/TopBanner';
import TopBooks from '../TopBooks/TopBooks';
import WhyBookShip from '../WhyBookShip/WhyBookShip';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <TopBooks></TopBooks>
            <NewReleases></NewReleases>
            <WhyBookShip></WhyBookShip>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;