"use client";
import React from "react";
import Image from "next/image";
import Menu from "../menu/Menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-6 bg-white/80">
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex justify-center items-center">
          <Link href="/" className="relative w-32 h-28">
            <Image
              src="/hadiya-transparent.png"
              alt="Hadiya Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>
        <div className="hidden md:flex justify-center mt-4">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-[#A9B5F9] transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-[#A9B5F9] transition"
            >
              About Us
            </Link>
            <Link
              href="/programs"
              className="text-gray-600 hover:text-[#A9B5F9] transition"
            >
              Programs
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-[#A9B5F9] transition"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-[#A9B5F9] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition"
            >
              Enroll Now
            </Link>
          </div>
        </div>
        <div className="absolute right-4 top-10">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
