"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "../../public/images/neli.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80, // Offset untuk navbar
                behavior: "smooth",
            });
        }
        setIsOpen(false); // Tutup menu setelah klik
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/5 backdrop-blur-lg shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <button onClick={() => scrollToSection("home")} className="flex items-center">
                    <Image src={logo} alt="Logo" width={100} height={100} className="w-20 md:w-28" />
                </button>

                {/* Hamburger Menu (Mobile) */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>

                {/* Menu Items - Desktop */}
                <ul className="hidden md:flex space-x-16">
                    {["Home", "Experience", "Project", "Contact"].map((name, index) => (
                        <li key={index}>
                            <button
                                onClick={() => scrollToSection(name.toLowerCase())}
                                className="cursor-pointer text-lg text-white hover:text-transparent bg-gradient-to-r from-red-500 via-blue-500 to-green-500 bg-clip-text bg-[length:200%_200%] hover:animate-text"
                            >
                                {name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu - Dropdown di Bawah Logo */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-black bg-opacity-80 py-4 md:hidden">
                    <ul className="flex flex-col px-10 space-y-4">
                        {["Home", "Experience", "Project", "Contact"].map((name, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => scrollToSection(name.toLowerCase())}
                                    className="text-base font-semibold text-white hover:text-transparent bg-gradient-to-r from-red-500 via-blue-500 to-green-500 bg-clip-text bg-[length:200%_200%] hover:animate-text"
                                >
                                    {name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
