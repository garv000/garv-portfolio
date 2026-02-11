// "use client";
import GradientSphere from "@/components/GradientSphere";
import HeroExperience from "@/components/HeroExperience";
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-screen overflow-hidden text-white-50 h-dvh relative px-5 md:p-0"
    >
      <div className="gradient-box w-full h-96 absolute bottom-0 left-0 z-20"></div>
      <GradientSphere
        sphere1Class={"gradient-sphere sphere-1"}
        sphere2Class={"gradient-sphere sphere-2"}
      />
      <div className="w-full h-full flex items-center justify-center">
        <div className="container relative w-full h-full">
          <div className="mt-36">
            <p className="font-medium md:text-2xl text-base">
              👋 Hey, I&apos;m
            </p>
            <h1 className="aeonik-bold md:text-9xl text-5xl">GARV SINGHAL</h1>
            <h1 className="aeonik-bold md:text-8xl text-5xl">CREATIVE</h1>
          </div>

          <div className="absolute w-full z-30 bottom-20 md:bottom-10 right-0">
            <div className="flex justify-between items-end">
              <div className="flex flex-col items-center md:gap-5 gap-1">
                <p className="md:text-base text-xs">Explore</p>
                <img
                  className="size-7 animate-bounce"
                  src="images/arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-col items-end">
                {/* <img src="images/shape.svg" alt="shape" /> */}
                <h1 className="aeonik-bold md:text-8xl text-5xl">DEVELOPER</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute inset-0 top-1/12 md:top-1/6">
        <HeroExperience />
      </div>
    </section>
  );
};

export default Hero;
