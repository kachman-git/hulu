import React from "react";

const LiveSport = () => {
  return (
    <section className="md:bg-[url(/img/live-sports.jpg)] bg-[url(/img/live-sports-small.jpg)] h-[90vh] py-10 bg-no-repeat bg-center bg-cover">
      <div className="container flex flex-col w-5/6 mx-auto space-y-5 text-white">
        <h2 className="text-6xl font-bold mt-9">Live Sports</h2>
        <p className="text-lg font-semibold ">
          Catch your games at home or on the go. Stream live games from major
          college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.
        </p>
        <div className="flex space-x-4">
          <div className="relative">
            <img src="/img/network-logo-bg.png" alt="logo" className="w-12" />
            <img
              src="/img/live-sports-logo-1.png"
              alt="logo"
              className="absolute w-6 top-[17px]  left-3"
            />
          </div>
          <div className="relative">
            <img src="/img/network-logo-bg.png" alt="logo" className="w-12" />
            <img
              src="/img/live-sports-logo-2.png"
              alt="logo"
              className="absolute w-6 top-[17px]  left-3"
            />
          </div>
          <div className="relative">
            <img src="/img/network-logo-bg.png" alt="logo" className="w-12" />
            <img
              src="/img/live-sports-logo-3.svg"
              alt="logo"
              className="absolute w-6 top-[17px]  left-3"
            />
          </div>
          <div className="relative">
            <img src="/img/network-logo-bg.png" alt="logo" className="w-12" />
            <img
              src="/img/live-sports-logo-4.png"
              alt="logo"
              className="absolute w-6 top-[17px]  left-3"
            />
          </div>
        </div>
        <p className="text-[9px] text-gray-300">
          Live TV plan required. Regional restrictions, blackouts and additional
          terms apply. See details
        </p>
      </div>
    </section>
  );
};

export default LiveSport;
