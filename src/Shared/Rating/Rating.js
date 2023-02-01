import React from "react";
import { render } from "react-dom";
import ReactStars from "react-rating-stars-component";
const Stars = ({ ratingChanged }) => {
  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      activeColor="#ffd700"
    />
  );
};

export default Stars;
