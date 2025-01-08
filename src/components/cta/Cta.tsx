import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 bg-[#A9B5F9]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A9B5F9]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A9B5F9]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Ready to Join Our Family?
              </h2>
              <p className="text-gray-600 mb-8">
              Limited spots available for 2024-2025. Give your child a caring and 
              safe environment today.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Professional babysitting services",
                  "DCYF payment accepted",
                  "Cash payment options available",
                  "Flexible scheduling options",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-[#A9B5F9]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="bg-[#A9B5F9] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Start Enrollment
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                width={400}
                height={400}
                src="/img4.jpg"
                alt="Feature 1"
                className="aspect-square rounded-2xl object-cover"
              />
              <Image
                width={400}
                height={400}
                src="/img4.jpg"
                alt="Feature 2"
                className="aspect-square rounded-2xl object-cover"
              />
              <Image
                width={400}
                height={400}
                src="/img4.jpg"
                alt="Feature 3"
                className="aspect-square rounded-2xl object-cover"
              />
              <Image
                width={400}
                height={400}
                src="/img4.jpg"
                alt="Feature 4"
                className="aspect-square rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
