import { useState } from "react";
import Motor from "./Motor";

const Hero = () => {
  const [openModal, setopenModal] = useState(false);

  const toggle = () => {
    setopenModal(!openModal);
  };

  const open = openModal ? "opacity-100" : "opacity-0";

  return (
    <>
      <section className="">
        <div className="absolute header bg-no-repeat -z-40 w-full  object-center bg-cover h-[90vh]"></div>
        <div className="container relative flex flex-col items-center justify-center w-full h-full px-8 mx-auto text-center space-y-7">
          <h4 className="font-bold text-green-400 uppercase text-md">
            try up to one month free
          </h4>
          <img src="/img/logo.png" alt="logo" className="h-20 w-25" />
          <p className="text-3xl font-semibold text-white">
            Watch thousands of TV shows and movies.
          </p>
          <p className="hidden text-xl text-white md:block">
            HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.
          </p>
          <button className="px-12 py-4 text-lg font-semibold text-gray-800 uppercase bg-white rounded hover:bg-slate-300">
            Start your free trial
          </button>
          <p className="text-xs text-white">
            Free trial for new & eligible returning subscribers only.
          </p>

          <button
            onClick={toggle}
            className="absolute z-[90] text-sm font-semibold text-white uppercase cursor-pointer top-3 right-9"
          >
            Log In
          </button>
        </div>
      </section>
      <Motor toggle={toggle} open={open} />
    </>
  );
};

export default Hero;
