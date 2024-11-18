import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-300">
      <div className="container grid grid-cols-1 gap-4 px-4 py-10 mx-auto md:grid-cols-5">
        <ul className="flex flex-col space-y-1">
          <li className="font-semibold text-gray-900 uppercase">Browse</li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">Streaming Library</a>
          </li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">Live TV</a>
          </li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">Live News</a>
          </li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">Live Sports</a>
          </li>
        </ul>
        <ul className="flex flex-col space-y-1">
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">TV Shows</a>
          </li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">Movies</a>
          </li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">Showtime</a>
          </li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">Originals</a>
          </li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">Kids</a>
          </li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">FX on Hulu</a>
          </li>
        </ul>
        <ul className="flex flex-col space-y-1">
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">Hulu, Disney+, and ESPN+</a>
          </li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">Disney Bundle</a>
          </li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">HBO Max</a>
          </li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">Cinimax</a>
          </li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">Showtime</a>
          </li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">STARZ</a>
          </li>
        </ul>
        <ul className="flex flex-col space-y-1">
          <li className="font-semibold text-gray-900 uppercase">Help</li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">Account & Billing</a>
          </li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">Plans & Pricing</a>
          </li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">Supported Devices</a>
          </li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">Accesibility</a>
          </li>
        </ul>
        <ul className="flex flex-col space-y-1">
          <li className="font-semibold text-gray-900 uppercase">About us</li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">Press</a>
          </li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">Jobs</a>
          </li>
          <li className="text-sm text-gray-800 transition-all hover:text-green-800 ">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
