import React from "react";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import {ImHtmlFive} from "react-icons/im";
import {GrMysql} from "react-icons/gr";
import {IoLogoJavascript, IoLogoNpm, IoLogoNodejs} from "react-icons/io";
import {FaReact} from "react-icons/fa";
import {SiCss3, SiTailwindcss, SiMongodb, SiExpress, SiGitlab} from "react-icons/si";
import {AiOutlineGithub} from "react-icons/ai";
import {RiGatsbyLine} from "react-icons/ri"
import {BsBootstrap} from 'react-icons/bs'


const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top">
          </motion.div>
          <div className="flex-1">
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-3">I'm a skilled Front-end Developer who is eager to share my skills within a team dynamic</h3>
            <p className="mb-3">I am passionate about creating beautiful and functional websites/applications that provide an exceptional user experience. I am proficient in a variety of front-end and back-end technologies. In addition to my technical skills, I am a collaborative team player who enjoys working with others to achieve shared goals. I have a strong work ethic and enjoy taking on new challenges and opportunities that allow me to grow and develop my skills as a developer.</p>
            <h3 className="font-primary tracking-[2px] pb-2 text-center"> My Skills</h3>
              <div className="flex">
              <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-wrap text-[35px] gap-x-6 max-w-max mx-auto lg:mx-0 pb-3 items-center"
            >
              <ImHtmlFive />
              <SiCss3 />
              < IoLogoJavascript />
              < FaReact />
              < SiTailwindcss />
              < IoLogoNpm />
              < IoLogoNodejs />
              <SiMongodb />
              <GrMysql />
              <AiOutlineGithub />
              <SiExpress />
              <SiGitlab />
              <RiGatsbyLine />
              <BsBootstrap />
            </motion.div>
                </div>
                <div className= "flex pt-3 gap-x-8 items-center">
                <button className="btn btn-lg"> Contact me</button>
                <a href="#" className="text-gradient btn-link">
                  My Resume
                </a>
              </div>
              </div>
            </div>
          </div>
    </section>
  );
};

export default About;
