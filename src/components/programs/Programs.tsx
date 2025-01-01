// components/Programs.tsx
import React from 'react';

const Programs = () => {
  const programs = [
    {
      title: "Toddler Care",
      age: "1-2 years",
      description: "Early development through play and discovery",
      features: ["Sensory Play", "Language Development", "Motor Skills"]
    },
    {
      title: "Preschool",
      age: "3-4 years",
      description: "Structured learning with creative activities",
      features: ["Early Math", "Reading Prep", "Social Skills"]
    },
    {
      title: "Pre-K",
      age: "4-5 years",
      description: "School readiness and advanced learning",
      features: ["Writing Skills", "Advanced Concepts", "Independence"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
          <p className="text-gray-600">Tailored programs for every age group</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[#A9B5F9] font-medium mb-2">{program.age}</div>
              <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <ul className="space-y-2">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#A9B5F9]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;