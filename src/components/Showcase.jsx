import React from "react";
import Card from "./Card";

const Showcase = () => {
  return (
    <section className="text-white bg-black">
      <div className="container px-4 mx-auto pt-28">
        <div className="flex flex-col items-center w-full space-y-6 text-center">
          <h3 className="font-bold text-green-400 uppercase text-md">
            Included in all plans
          </h3>
          <h2 className="font-bold text-7xl">All The TV You Love</h2>
          <p className="w-3/4 text-2xl md:text-3xl ">
            Stream full seasons of exclusive series, current-season episodes,
            hit movies, Hulu Originals, kids shows, and more.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card
            image={"/img/cover-1.jpg"}
            heading={"Past & Current Seasons"}
            parag="TV Shows"
          />
          <Card
            image={"/img/cover-2.jpg"}
            heading={"New & Classics"}
            parag="Movies"
          />
          <Card
            image={"/img/cover-3.jpg"}
            heading={"Groundbreaking"}
            parag="Hulu Originals"
          />
          <Card
            image={"/img/cover-1.jpg"}
            heading={"Add-On"}
            parag="Premiums"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
