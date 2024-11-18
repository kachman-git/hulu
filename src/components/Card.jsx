import React from "react";

const Card = ({ image, heading, parag }) => {
  return (
    <div className={`relative my-14  mx-auto`}>
      <div className="absolute inset-0 bg-black/40"></div>
      <img src={image} alt={heading} />
      <div className="absolute top-5 left-5">
        <h1 className="text-md">{heading}</h1>
        <p className="text-3xl font-semibold">{parag}</p>
      </div>
    </div>
  );
};

export default Card;
