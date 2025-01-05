import React from 'react';

const AboutPage = () => {
  return (
    <div className="relative bg-white py-24 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-[#A9B5F9]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-[#A9B5F9]/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <span className="inline-block px-4 py-1 bg-[#A9B5F9]/10 rounded-full text-sm font-medium text-[#A9B5F9] mb-4">
              About Hadiya
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Where Little Dreams
            <span className="block text-[#A9B5F9]">Take Flight</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We're more than just a childcare center – we're a community dedicated to 
            nurturing young minds and helping them discover their full potential.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-[#A9B5F9]/10 rounded-3xl transform rotate-3" />
            <div className="absolute inset-0 bg-[#A9B5F9]/5 rounded-3xl transform -rotate-3" />
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/img4.jpg"
                alt="Children learning and playing"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Through play-based learning and structured activities, we create an 
                  environment where curiosity is encouraged and learning feels natural.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <div className="absolute top-0 left-0 w-12 h-12 bg-[#A9B5F9]/10 rounded-full -translate-x-1/4 -translate-y-1/4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                5+ Years of Excellence in Early Education
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Since 2018, we've been pioneering innovative approaches to early childhood 
              education. Our experienced educators create a warm, inclusive environment 
              where every child feels valued and supported in their journey of discovery.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="text-3xl font-bold text-[#A9B5F9]">500+</div>
                <div className="text-gray-600">Happy Families</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="text-3xl font-bold text-[#A9B5F9]">5+</div>
                <div className="text-gray-600">Expert Staff</div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Journey</h3>
          
          <div className="space-y-16">
            <div className="flex gap-8">
              <div className="w-32 pt-2">
                <div className="text-2xl font-bold text-[#A9B5F9]">2018</div>
                <div className="text-sm text-gray-500">The Beginning</div>
              </div>
              <div className="flex-1 bg-gray-50 p-8 rounded-3xl relative">
                <div className="absolute left-0 top-8 w-2 h-2 bg-[#A9B5F9] rounded-full -translate-x-5" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">Founded with a Vision</h4>
                <p className="text-gray-600">Started with a simple mission: to create a nurturing space where children could learn through play and discovery.</p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="w-32 pt-2">
                <div className="text-2xl font-bold text-[#A9B5F9]">2020</div>
                <div className="text-sm text-gray-500">Growth</div>
              </div>
              <div className="flex-1 bg-gray-50 p-8 rounded-3xl relative">
                <div className="absolute left-0 top-8 w-2 h-2 bg-[#A9B5F9] rounded-full -translate-x-5" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">Growing Community</h4>
                <p className="text-gray-600">Built a thriving community of families and educators while maintaining our commitment to quality education.</p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="w-32 pt-2">
                <div className="text-2xl font-bold text-[#A9B5F9]">2022</div>
                <div className="text-sm text-gray-500">Innovation</div>
              </div>
              <div className="flex-1 bg-gray-50 p-8 rounded-3xl relative">
                <div className="absolute left-0 top-8 w-2 h-2 bg-[#A9B5F9] rounded-full -translate-x-5" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">Educational Excellence</h4>
                <p className="text-gray-600">Introduced innovative learning programs and received recognition for our unique approach to early childhood education.</p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="w-32 pt-2">
                <div className="text-2xl font-bold text-[#A9B5F9]">Today</div>
                <div className="text-sm text-gray-500">Present Day</div>
              </div>
              <div className="flex-1 bg-gray-50 p-8 rounded-3xl relative">
                <div className="absolute left-0 top-8 w-2 h-2 bg-[#A9B5F9] rounded-full -translate-x-5" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">Leading the Way</h4>
                <p className="text-gray-600">Continuing to set standards in early childhood education with our dedicated team of educators and modern learning approach.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;