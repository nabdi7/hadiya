import React from "react";
import { Star, ExternalLink } from "lucide-react";

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
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <a
                    href="https://www.google.com/maps/place/Hadiya+Home+Childcare/@47.4053302,-122.1913794,17z/data=!4m8!3m7!1s0x54905dd89377c3f5:0x6e5d903978bd9f29!8m2!3d47.4053302!4d-122.1888045!9m1!1b1!16s%2Fg%2F11v611htf3?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#A9B5F9] hover:text-[#8697F7] transition-colors"
                  >
                    <span>See on Google</span>
                    <ExternalLink size={14} />
                  </a>
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
    text: "My daughter loves coming here. The place is always clean and she's well taken care of. The flexible hours really help with my work schedule.",
  },
  {
    name: "Emily Davis",
    text: "Great childcare! My kids are always happy when I pick them up. The 24/7 availability has been a lifesaver for my night shifts.",
  },
];

export default Testimonials;