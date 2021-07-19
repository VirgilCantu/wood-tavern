import React from "react";
import WoodImage from "../images/wood-about.jpeg";

const About = () => {
  return (
    <div className="text-center imgbox">
      <br />
      <h1>Who We Are</h1>
      <p style={{ width: "60rem", margin: "auto" }}>
        The idea behind Wood Tavern has always been simple. Open a place where
        everyone wants to be, because anyone is welcome. Where you can meet up
        with friends, grab a craft brew or a cocktail, and wait to see which
        character you bump into this time. And there’s always good music, so
        catch a picnic table with your friends on the patio. People don’t just
        come here to drink. They come to Wood to get comfortable.
      </p>
      <br />
      <img alt="Wood Tavern" src={WoodImage} className="center-fit" />
    </div>
  );
};

export default About;
