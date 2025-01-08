import React from "react";
import { BookOpen, Shield, Users, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Early Learning",
      description:
        "Age-appropriate educational activities fostering cognitive development",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe Environment",
      description:
        "Secure facilities with trained staff and modern safety protocols",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Caring Staff",
      description:
        "Experienced caregivers dedicated to your child's well-being",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Hours",
      description: "Convenient scheduling options for working parents",
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-gray-600">
            Discover what makes our home childcare special
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gray-50 hover:bg-[#A9B5F9]/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[#A9B5F9]/20 flex items-center justify-center text-[#A9B5F9] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
