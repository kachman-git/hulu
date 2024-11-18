import React from "react";

const Section = () => {
  return (
    <section className="px-5 bg-black py-14">
      <div className="container flex flex-col items-center mx-auto space-y-8 text-center text-white border-[3px] border-green-600 rounded p-7">
        <h3 className="font-bold text-green-400 uppercase text-md">
          Hulu + Live tv
        </h3>
        <h2 className="text-6xl font-semibold">Live TV Makes It Better</h2>
        <p className="text-lg leading-loose">
          Make the switch from cable. Get 75+ top channels with your favorite
          live sports, news, and events - plus the entire Hulu streaming
          library.
        </p>
        <p className="text-[9px] text-gray-300">
          Live TV plan required. Regional restrictions, blackouts and additional
          terms apply. See details
        </p>
        <a href="#" className="text-sm underline">
          View Channels in Your Area
        </a>
      </div>
    </section>
  );
};

export default Section;
