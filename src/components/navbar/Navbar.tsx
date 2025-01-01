"use client";
import React, { useState } from "react";
import Image from "next/image";
import MobileMenu from "../menu/Menu";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "About", "Programs", "Contact", "Enroll Now"];

  return (
    <nav className=" w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center py-4">
          <div className="relative w-32 h-16">
            <Image
              src="/hadiya-transparent.png"
              alt="Hadiya Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center pb-4">
          <div className="flex items-center gap-12">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className={`text-gray-600 hover:text-[#A9B5F9] transition-colors ${
                  item === "Enroll Now"
                    ? "bg-[#A9B5F9] text-white px-6 py-2 rounded-full hover:bg-opacity-90"
                    : ""
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden absolute right-4 top-8 text-gray-600"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
};

export default Navbar;
