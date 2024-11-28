import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import img1 from "./../../assets/img1.png";
import { motion } from 'framer-motion';

const Hero = () => {
  // Function to split the text into characters
  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.05, // Delay each character
          duration: 0.1, // Duration for each character to appear
          ease: "easeOut"
        }}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <section id="home" className="dark:bg-black overflow-hidden relative">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10">
            <p className="text-gray-500 uppercase font-semibold lg:max-w-[500px]">Software Developer</p>

            <motion.h1 className="text-3xl lg:text-4xl font-bold !leading-snug">
              Hello, I'm{" "}
              <span className="text-primary">Yasmine OUKEMOUM</span>
              <br />
              {/* Apply the typing effect to each character of the following text */}
              {splitText("Full-stack developer | AI Enthusiast | Graphic Design Beginner")}
            </motion.h1>

          <p className="text-gray-500 lg:max-w-[500px] mt-4">
            Exploring new technologies to build impactful projects and blending creativity with code.
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="flex items-center rounded-md bg-primary text-white py-3 px-6 gap-2 group">
              <a href="#contact" className="flex items-center"></a>
              <FaArrowRight className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              Hire Me
            </button>
          </div>
        </div>

        </div>
        {/* Hero Info */}
        <motion.div
          initial={{ y: 50 }}  // Start slightly below the original position
          animate={{ y: 0 }}    // Move to normal position without fading in
          transition={{
            duration: 5,                // Duration for the transition
            ease: "easeOut",            // Smooth easing
          }}
          className="sm:hidden md:block relative z-10"
        >
          <motion.img 
            src={img1} 
            alt="description" 
            className="sm:hidden md:block relative z-10"
            animate={{
              y: [30, 0, 30],  // Move up and down for the "jump"
            }}
            transition={{
              repeat: Infinity,   // Repeat forever
              repeatDelay: 0.5,    // Delay between repeats
              duration: 0.6,       // Duration of one bounce cycle
              ease: "easeOut",     // Smooth ease effect for the bounce
            }}
          />
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;