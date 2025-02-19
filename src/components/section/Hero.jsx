"use client";

import { Meteors } from "../magicui/meteors";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiTailwindcss, SiFigma, SiLaravel, SiPhp, SiGithub, SiPostman } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden px-6"
    >
      {/* Efek Meteors sebagai Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Meteors />
      </div>

      {/* Konten Hero */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        {/* Foto Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src="/images/photo.jfif"
            alt="Photo profile"
            width={100}
            height={100}
            className="w-20 md:w-40 mx-auto mb-4 rounded-full"
          />
        </motion.div>

        {/* Nama */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Hi! I'm Neli Fauziyah
        </motion.h1>

        {/* Animasi Typewriter */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-3xl md:text-5xl font-bold mt-5"
        >
          A{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient">
            <Typewriter words={["FrontEnd Developer"]} loop={false} cursor />
          </span>
        </motion.h1>

        {/* Deskripsi */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-4 text-sm md:text-lg mx-6 md:mx-36 font-light text-[#C5C5C5]"
        >
          Third-year Associate Degree student in Informatics Engineering who is approaching the
          final semester and eager to develop knowledge and skills in website interface design, business analysis, and quality
          analysis. I have been studying this field for almost three years and am committed to continuously learning to enhance my
          expertise.
        </motion.p>

        {/* Ikon Teknologi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-6 flex flex-wrap justify-center gap-4 text-3xl md:text-4xl text-gray-400"
        >
          <SiHtml5 className="hover:text-orange-500 transition" />
          <SiCss3 className="hover:text-blue-500 transition" />
          <SiJavascript className="hover:text-yellow-500 transition" />
          <SiNextdotjs className="hover:text-white transition" />
          <SiTailwindcss className="hover:text-cyan-400 transition" />
          <SiFigma className="hover:text-pink-400 transition" />
          <SiLaravel className="hover:text-red-500 transition" />
          <SiPhp className="hover:text-indigo-400 transition" />
          <SiGithub className="hover:text-gray-300 transition" />
          <SiPostman className="hover:text-orange-400 transition" />
        </motion.div>
      </motion.div>
    </section>
  );
}
