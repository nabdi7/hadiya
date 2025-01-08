import React from "react";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-white to-[#fdf2f5] py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#A9B5F9] opacity-60"
                ></div>
              ))}
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl border-8 border-white">
              <Image
                src="/img4.jpg"
                width={500}
                height={500}
                alt="Early Education"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#A9B5F9] opacity-60"
                ></div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-navy-900">
              Why Early
              <span className="block text-[#A9B5F9]">Education Matters</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At our childcare, we believe in nurturing young minds through a
              perfect blend of care and education. Our dedicated staff provides
              a safe, engaging environment where children develop essential life
              skills alongside academic foundations. Through creative play,
              structured learning, and individualized attention, we help your
              child build confidence, curiosity, and a lifelong love of
              learning.
            </p>
            <div className="flex gap-4">
              <Link
                href="/about"
                className="bg-[#A9B5F9] text-white px-8 py-4 rounded-lg hover:bg-opacity-90"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
