"use client";

import { useRouter } from "next/navigation";
import React, { useLayoutEffect, useState } from "react";

const Landing = () => {
  const router = useRouter();
  useLayoutEffect(() => {
    const script = document.createElement("script");
    script.src = require("./particle-image.js");
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* title */}
      <div className="lg:w-1/2 w-full bg-white">
        <div className="flex flex-col justify-center items-center h-screen relative">
          <h1 className="text-8xl text-emerald-900 font-bold text-center">Nest Quest</h1>
          <p className="text-2xl mt-4 text-emerald-900 font-light">
            The only way to find a place
          </p>
          <button onClick={()=> {
            router.push("/auth")
          }} className="bg-emerald-900 text-white text-1xl px-4 py-2 rounded-lg mt-4">
            Get Started
          </button>
          <div className="absolute bottom-10">
            <p className="px-5 text-center text-emerald-900">
              Click to learn more
            </p>
            <div className="w-full flex justify-center">
              <div
                className="h-[20px] w-[20px] border-solid border-emerald-900 border-[4px] border-t-0 border-l-0 rotate-45 cursor-pointer"
                onClick={() => {
                  window.scrollTo(0, document.body.scrollHeight);
                }}
              ></div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col justify-center items-center h-screen px-10"
          id="more"
        >
          <p className="text-4xl text-emerald-900 font-light">About Us</p>

          <p className="text-justify">
            Welcome to NestQuest, your premier destination for seamless
            off-campus living experiences tailored for college students. At
            NestQuest, we specialize in simplifying the journey of finding the
            perfect nest beyond campus boundaries. Our commitment lies in
            empowering students to navigate the exciting adventure of off-campus
            living with ease and confidence. We believe that off-campus living
            should be easy, secure affordable and stress-free, and we are
            committed to making that a reality for every student we serve. Find
            Your Perfect Nest
          </p>

          <p className="text-4xl text-emerald-900 font-light mt-7">
            Our Services
          </p>

          <p className="text-justify">
            We help you find a right fit from a wide range of off-campus living
            options tailored to your specific needs. Whether you're looking for
            a studio apartment or a shared house, we've got you covered. Almost
            all of our properties are fully furnished and equipped with modern
            amenities to make your college experience as comfortable and
            enjoyable as possible.
          </p>

          <p className="text-4xl text-emerald-900 font-light mt-7">
            Find Your Perfect Location
          </p>
          <p className="text-justify">
            We have properties located near many major universities and colleges
            throughout the country. From bustling urban areas to quiet suburban
            neighborhoods, we have something for everyone. Use our interactive
            map to explore your options and find the perfect location for your
            college journey.
          </p>
        </div>
      </div>

      <div className="lg:w-1/2 lg:h-screen lg:fixed lg:left-1/2 lg:top-0 lg:bg-emerald-800">
        <div id="particle-image" data-params-src="params.json"></div>
      </div>
    </div>
  );
};

export default Landing;
