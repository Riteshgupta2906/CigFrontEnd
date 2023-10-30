import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Groups.css";
import { techData } from "./techDetails";

const Groups = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1500 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1100 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1100, min: 750 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="groupsData">
        <h1>Technical Groups</h1>
        <Carousel infinite={true} responsive={responsive} autoPlay={true} autoPlaySpeed={3000}>
          {techData.map((data, idx) => {
            return (
              <div className="cardG invisible-scrollbar" key={idx}>
                <img src={data.image} alt="" />
                <h6>{data.name}</h6>
                <p className="invisible-scrollbar">{data.description}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Groups;
