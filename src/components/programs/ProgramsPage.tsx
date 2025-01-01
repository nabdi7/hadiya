import React from 'react';

const ProgramsPage = () => {
  const programs = [
    {
      ageGroup: "Infants",
      ageRange: "6 weeks - 12 months",
      description: "Nurturing care in a safe, stimulating environment focused on sensory development and emotional bonding.",
      activities: [
        "Tummy time and physical development",
        "Sensory exploration activities",
        "Music and movement",
        "Language development through stories and songs"
      ],
      schedule: "Flexible scheduling to match each baby's natural rhythm"
    },
    {
      ageGroup: "Toddlers",
      ageRange: "1 - 2 years",
      description: "Active learning through play, fostering independence and social skills development.",
      activities: [
        "Interactive story time",
        "Art and creative expression",
        "Physical activities and outdoor play",
        "Basic concept introduction"
      ],
      schedule: "Half-day and full-day programs available"
    },
    {
      ageGroup: "Preschool",
      ageRange: "2 - 3 years",
      description: "Structured learning experiences that prepare children for future academic success.",
      activities: [
        "Early literacy and numeracy",
        "Social skills development",
        "Creative arts and music",
        "Science and nature exploration"
      ],
      schedule: "Full-day program with flexible drop-off times"
    },
    {
      ageGroup: "Pre-K",
      ageRange: "4 - 5 years",
      description: "Comprehensive kindergarten preparation focusing on academic, social, and emotional readiness.",
      activities: [
        "Advanced literacy and math concepts",
        "Project-based learning",
        "Cultural awareness activities",
        "Physical education and wellness"
      ],
      schedule: "Full-day program with enrichment activities"
    }
  ];

  return (
    <div className="bg-white py-24">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 bg-[#A9B5F9]/10 rounded-full text-sm font-medium text-[#A9B5F9] mb-4">
            Our Programs
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Age-Appropriate Learning
            <span className="block text-[#A9B5F9]">For Every Stage</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Our carefully designed programs cater to each developmental stage, 
            ensuring your child receives the perfect balance of care, education, and fun.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="group bg-gray-50 rounded-3xl p-8 hover:bg-[#A9B5F9]/5 transition-colors relative overflow-hidden"
            >
              {/* Background Detail */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#A9B5F9]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{program.ageGroup}</h2>
                    <span className="inline-block px-3 py-1 bg-[#A9B5F9]/10 rounded-full text-sm text-[#A9B5F9]">
                      {program.ageRange}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  {program.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Activities:</h3>
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule</h3>
                  <p className="text-gray-600">{program.schedule}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-[#A9B5F9]/10 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Find the Perfect Program for Your Child
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a tour to learn more about our programs and see our facilities. 
            Our staff will be happy to answer any questions you may have.
          </p>
          <button className="bg-[#A9B5F9] text-white px-8 py-4 rounded-xl hover:bg-opacity-90 transition-colors">
            Schedule a Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;