import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#A9B5F9]/5 to-white min-h-screen py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#A9B5F9]/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#A9B5F9]/8 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/4 w-[700px] h-[700px] bg-[#A9B5F9]/5 rounded-full blur-3xl animate-blob animation-delay-4000" />

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="inline-block">
            <span className="inline-block px-6 py-2 bg-[#A9B5F9]/15 rounded-full text-sm font-medium text-[#A9B5F9] mb-4 shadow-sm">
              About Hadiya
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Where Little Ones
            <span className="block text-[#A9B5F9] mt-2">
              Feel Safe and Cared
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            We are a trusted childcare service focused on babysitting and home
            care for children of all ages. Our team ensures a loving and secure
            environment, providing attentive care while your child is with us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#A9B5F9]/20 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6" />
            <div className="absolute inset-0 bg-[#A9B5F9]/15 rounded-3xl transform -rotate-3 transition-transform group-hover:-rotate-6" />
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl">
              <Image
                width={500}
                height={500}
                src="/img3.jpg"
                alt="Children being cared for"
                className="w-full h-80 object-cover"
              />
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Care Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We provide safe, compassionate care tailored to each
                  child&apos;s individual needs, ensuring they feel comfortable
                  and loved while under our supervision.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#A9B5F9]/15 rounded-full" />
              <h3 className="text-3xl font-bold text-gray-900 mb-6 relative">
                8+ Years of Trusted Childcare
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Since 2018, we’ve been offering top-quality babysitting and home
              care services. Our team is committed to providing a caring, safe,
              and nurturing environment for children of all ages.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-[#A9B5F9]">500+</div>
                <div className="text-gray-600 mt-2">Happy Families</div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-[#A9B5F9]">5+</div>
                <div className="text-gray-600 mt-2">Experienced Caregivers</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Our Journey
          </h3>

          <div className="space-y-16">
            {[
              {
                year: "2018",
                label: "The Beginning",
                title: "Founded with Care",
                description:
                  "We started with a mission to provide a safe and nurturing environment where children are cared for like family.",
              },
              {
                year: "2020",
                label: "Growth",
                title: "Expanding Our Services",
                description:
                  "We grew our network of trusted caregivers, ensuring more families could access high-quality childcare services.",
              },
              {
                year: "2022",
                label: "Innovation",
                title: "Enhanced Care",
                description:
                  "We introduced flexible scheduling options and personalized care services to better meet the needs of our clients.",
              },
              {
                year: "Today",
                label: "Present Day",
                title: "Leading with Compassion",
                description:
                  "We continue to provide expert babysitting and home care services, offering peace of mind to families across the area.",
              },
            ].map((item, index) => (
              <div key={item.year} className="flex gap-8 group">
                <div className="w-32 pt-2">
                  <div className="text-2xl font-bold text-[#A9B5F9]">
                    {item.year}
                  </div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                </div>
                <div className="flex-1 bg-white p-8 rounded-3xl relative shadow-lg hover:shadow-xl transition-all duration-300 group-hover:translate-x-2">
                  <div className="absolute left-0 top-8 w-3 h-3 bg-[#A9B5F9] rounded-full -translate-x-[1.625rem]" />
                  <div
                    className="absolute left-0 top-0 w-1 h-full bg-[#A9B5F9]/20 -translate-x-[1.375rem]"
                    style={{ display: index === 3 ? "none" : "block" }}
                  />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
