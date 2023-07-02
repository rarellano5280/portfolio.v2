import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import pImg from "../assets/pawPalz.jpeg";
import pImg2 from "../assets/fitnessCulture.webp";
import pImg3 from "../assets/nationalPark.jpg";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-8 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                Check out some of my most recent projects. I go into each project with an open mind and an intense eagerness to learn.  Over the past few months, I have been working on several exciting projects that have allowed me to showcase my skills and expertise. Overall, I am proud of the work that I have accomplished and look forward to tackling more challenging projects in the future.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>

            {/* Project 1 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <a href="https://obscure-sands-38875.herokuapp.com" className="btn-link">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
              </div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={pImg}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Social Media Website</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Paw Palz</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-5 transition-all duration-700 z-50">
                <span className=" text-sm text-white">A social media website that allows user to create accounts for thier dogs.</span>
              </div>
              </a>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-14"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <a href="https://github.com/rarellano5280/Fitness-Culture" className="btn-link">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={pImg2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Fitness App</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Fitness Culture</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-5 transition-all duration-700 z-50">
                <span className=" text-sm text-white">A fitness app that allows users to track workouts and nutriton.</span>
              </div>
              </a>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <a href="https://rarellano5280.github.io/National-Park-Finder/" className="btn-link">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={pImg3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Natioal Park Finder</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Xplor</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-5 transition-all duration-700 z-50">
                <span className=" text-sm text-white">A national park finder that allow user to search for popular Natioal State Parks.</span>
              </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
