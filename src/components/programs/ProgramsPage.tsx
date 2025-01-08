import React from "react";
import Link from "next/link";

const ProgramsPage = () => {
  const programs = [
    {
      ageGroup: "Infants",
      ageRange: "6 weeks - 12 months",
      description:
        "Nurturing care in a safe, stimulating environment focused on sensory development and emotional bonding.",
      activities: [
        "Tummy time and physical development",
        "Sensory exploration activities",
        "Music and movement",
        "Language development through stories and songs",
      ],
      schedule: "Flexible scheduling to match each family",
    },
    {
      ageGroup: "Toddlers",
      ageRange: "1 - 2 years",
      description:
        "Caring for toddlers with an emphasis on fostering independence, communication, in engaging environment.",
      activities: [
        "Interactive playtime",
        "Creative arts and messy play",
        "Physical activities and outdoor fun",
        "Basic language and social skill interactions",
      ],
      schedule: "Half-day and full-day programs available",
    },
    {
      ageGroup: "Preschool",
      ageRange: "2 - 3 years",
      description:
        "Supervised care focused on keeping children entertained, comfortable, and socially engaged, while providing a sense of routine.",
      activities: [
        "Imaginative play",
        "Outdoor exploration and activities",
        "Building friendships through group play",
        "Engaging with books and stories",
      ],
      schedule: "Full-day program with flexible drop-off times",
    },
    {
      ageGroup: "Pre-K",
      ageRange: "4 - 5 years",
      description:
        "A well-rounded care program that balances physical activities with free play, helping children feel confident and prepared for the next stage.",
      activities: [
        "Fun, active play to burn off energy",
        "Creative expression through arts and crafts",
        "Group activities for social skills development",
        "Interactive and safe exploration of the environment",
      ],
      schedule: "Full-day program with enrichment activities",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#A9B5F9]/5 to-white min-h-screen py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#A9B5F9]/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#A9B5F9]/8 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/4 w-[700px] h-[700px] bg-[#A9B5F9]/5 rounded-full blur-3xl animate-blob animation-delay-4000" />

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="inline-block">
            <span className="inline-block px-6 py-2 bg-[#A9B5F9]/15 rounded-full text-sm font-medium text-[#A9B5F9] mb-4 shadow-sm">
              Our Programs
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Age-Appropriate Programs
            <span className="block text-[#A9B5F9] mt-2">For Every Stage</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            Our carefully designed programs cater to each developmental stage,
            ensuring your child receives the perfect balance of care, education,
            and fun.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {program.ageGroup}
                  </h2>
                  <span className="inline-block px-3 py-1 bg-[#A9B5F9]/10 rounded-full text-sm text-[#A9B5F9]">
                    {program.ageRange}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{program.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Key Activities:
                </h3>
                <ul className="space-y-2">
                  {program.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-[#A9B5F9] rounded-full mr-3" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Schedule
                </h3>
                <p className="text-gray-600">{program.schedule}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#A9B5F9]/40 rounded-3xl p-12 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Find the Perfect Program for Your Child
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a tour to learn more about our programs and see our
            facilities. Our staff will be happy to answer any questions you may
            have.
          </p>
          <Link
            href="/contact"
            className="bg-[#A9B5F9] text-white px-8 py-4 rounded-xl hover:bg-opacity-90 transition-colors shadow-md inline-block"
          >
            Schedule a Tour
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;
