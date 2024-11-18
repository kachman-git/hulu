import React from "react";

const Adds = () => {
  return (
    <div className="bg-gradient-to-r to-[#0f495c] via-[#0d3640] from-[#08141f]">
      <div className="container flex flex-col items-center justify-between gap-4 p-3 mx-auto text-center text-white space-y-7 sm:text-start sm:flex-row">
        <img src="/img/logos.png" alt="logo" className="h-12 lg:h-20 w-25 " />
        <div className="flex flex-col flex-1 gap-4">
          <h4 className="font-bold text-green-400 uppercase text-md">
            Bundle with any Hulu plan & save
          </h4>
          <p className="text-3xl">Get Hulu, Disney+, and ESPN+.</p>
          <a href="#" className="text-xs underline">
            Details
          </a>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <button className="px-5 py-3 uppercase border-2 rounded md:py-4 md:px-8">
            Get bundle
          </button>
          <a href="#" className="text-xs underline">
            Terms apply
          </a>
        </div>
      </div>
    </div>
  );
};

export default Adds;
