import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Parents Say</h2>
          <p className="text-gray-600">Real experiences from our community</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-2xl bg-gray-50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-[#A9B5F9] text-[#A9B5F9]"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200" />
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">Parent</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: "M Zayas",
    text: "Very flexible 24 hours which is a steal and a small quiet calm place to be! I dont often give 5 stars. Definitely recommended.",
  },
  {
    name: "Michael Chen",
    text: "We've seen incredible development in our daughter's social and learning skills since joining Hadiya.",
  },
  {
    name: "Emily Davis",
    text: "The structured program combined with play-based activities is exactly what we were looking for.",
  },
];

export default Testimonials;
