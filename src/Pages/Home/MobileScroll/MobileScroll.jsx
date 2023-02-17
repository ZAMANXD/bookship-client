import React, { useState } from "react";
import "./MobileScroll.css";
import ScreenText from "./ScreenText";

const scrollData = [
  {
    heading: "Good User Friendly",
    description:
      "Experience hassle-free browsing with our user-friendly website. With its clear layout, intuitive design, and helpful features, users can easily navigate and find the information they need. Our site's responsive interface adapts to different devices, providing a seamless experience across all platforms. From quick page load times to easy-to-find menus, our website ensures an efficient and enjoyable experience for all users.",
    mobile_img: "https://i.ibb.co/5KDvwYY/2.jpg",
  },
  {
    heading: "Get Best Price",
    description:
      "Get the best deals with our unbeatable prices. We offer competitive pricing without compromising on quality, ensuring our customers get the best value for their money. Our price match guarantee ensures you get the lowest price available. Whether you're looking for products or services, we strive to provide the best possible pricing options to meet your needs and budget.",
    mobile_img: "https://i.ibb.co/4pSxdzR/3.jpg",
  },
  {
    heading: "Very Easy to Pay ",
    description:
      "Experience hassle-free payments with our easy-to-use Stripe payment gateway. We offer a secure and convenient payment method using Stripe, ensuring that our customers can easily and quickly make payments without any hassle. Our payment system is designed to provide a seamless and secure transaction process. Say goodbye to payment worries and enjoy a stress-free checkout experience with our hassle-free Stripe payment gateway.",
    mobile_img: "https://i.ibb.co/V9r5JY5/1.jpg",
  },
  {
    heading: "Great Support",
    description:
      "Experience exceptional customer support with our dedicated team. We provide timely and effective solutions to our customers' queries and concerns, ensuring that they have a hassle-free experience. Our knowledgeable support team is available to assist you with any issues or questions. From live chat to email support, we are committed to providing the best possible customer service to meet your needs.",
    mobile_img: "https://i.ibb.co/CQ7t9x9/4.jpg",
  },
];

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div className=" ">
      <h2 className="text-4xl text-center font-bold  pt-20"> Why Book Ship</h2>
      <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-30 flex justify-center items-center">
        <div className="mobile-scroll flex max-width ">
          <div className="scroll-full-screen-wrapper ">
            {scrollData.map((screen, i) => (
              <div className="scroll-full-screen flex justify-center p-10">
                <ScreenText
                  screen={screen}
                  setCurrentImg={setCurrentImg}
                  i={i}
                />
              </div>
            ))}
          </div>
          <div className="mobile-mockup-wrapper hidden md:flex lg:flex justify-center">
            <div className="mobile-mockup w-10/12 ">
              <div className="mobile-mockup-screen bs-box-shadow-2">
                <img
                  alt=""
                  src={scrollData[currentImg].mobile_img}
                  className="mobile-screen-img slide-in-right "
                  key={scrollData[currentImg].mobile_img}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
