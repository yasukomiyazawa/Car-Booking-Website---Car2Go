"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Discover, reserve, or lease a vehicle swiftly and effortlessly!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-teal-800 text-white rounded-full mt-10"
          btnType="button"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero"
            layout="fill"
            className="object-contain"
          />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
