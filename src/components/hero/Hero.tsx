import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/background1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 text-center">
        <div className="space-y-6">
          <h2 className="text-[#A9B5F9] font-medium tracking-wide uppercase">
            Welcome to Hadiya
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Inspiring Young
            <span className="block mt-2">
              <span className="text-[#A9B5F9]">Minds</span> to Grow
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Creating a nurturing environment where children discover, learn, and
            flourish through play-based education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact"
              className="bg-[#A9B5F9] text-white px-8 py-4 rounded-lg
              hover:bg-opacity-90 flex items-center justify-center gap-2 group"
            >
              Schedule a Visit
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about"
              className="px-8 py-4 rounded-lg border-2 border-white
              text-white hover:bg-white hover:text-[#A9B5F9] transition-all"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-12 mt-12">
            <div className="text-white text-center">
              <div className="text-3xl font-bold">8+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-white text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-gray-300">Happy Parents</div>
            </div>
            <div className="text-white text-center">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm text-gray-300">Expert Staff</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce mx-auto" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
