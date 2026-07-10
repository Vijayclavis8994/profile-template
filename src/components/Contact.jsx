import React from 'react';
import Card from './ui/Card';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiDownload,
  FiSend,
  FiMapPin,
  FiPhone
} from "react-icons/fi";

import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaXTwitter,
  FaGithub,
} from 'react-icons/fa6';

import { SiWhatsapp } from 'react-icons/si';

export default function Contact() {
  return (
    <section id="contact" className="space-y-6 pb-20 sm:pb-0">
      <Card className="p-6 text-center">
        <div className="space-y-5">

          <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
            Let's build something great together
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 max-w-[700px] mx-auto text-center text-sm text-slate-300 leading-relaxed"
          >
            A modern, scalable frontend enhances your brand presence and drives real business growth. <br />
            It transforms visitors into customers through seamless, engaging, and high-performance user experiences.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 max-w-[700px] mx-auto text-center text-sm text-slate-300 leading-relaxed"
          >
            I’m active across multiple platforms and typically respond within 24 hours. I can help you with frontend development (React, Angular, Next.js), UI/UX design, graphic design, responsive web development, API integration, and performance optimization to build modern, visually engaging, and user-friendly web applications.
          </motion.p>

          {/* 🔥 CONTACT INFO */}
          <div className="flex flex-col items-center gap-3 text-sm text-slate-300 max-w-[600px] mx-auto text-left">

            <div className="flex items-center gap-2">
              <FiPhone className="text-yellow-400" />

              <a href="tel:9899262078" className="hover:text-yellow-400">
                +91 9899262078
              </a>

              {/* <span className="text-slate-500">|</span>

              <a href="tel:919953103691" className="hover:text-yellow-400">
                +91 9953103691
              </a> */}
            </div>

            <div className="flex items-start gap-2">
              <FiMail className="text-yellow-400 mt-[2px]" />
              <a href="mailto:vijayshankar8994@gmail.com" className="hover:text-yellow-400">
                vijayshankar8994@gmail.com
              </a>
            </div>

             <div className="flex items-center gap-2">
              <FiMapPin className="text-yellow-400" />
              <span>
                Delhi, India - 110096
              </span>
            </div>

          </div>

          {/* 🔥 SOCIAL ICONS */}
          <div className="flex flex-wrap justify-center gap-4">

            <a href="https://www.linkedin.com/in/vijay-shankar-sah-844076101/" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-yellow-400 hover:text-black transition">
              <FaLinkedin size={16} />
            </a>

            <a href="https://github.com/Vijayclavis8994" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-yellow-400 hover:text-black transition">
              <FaGithub size={16} />
            </a>

            <a href="https://instagram.com/vijayshankar8994" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-yellow-400 hover:text-black transition">
              <FaInstagram size={16} />
            </a>

            <a href="https://facebook.com/vijayshankar8994" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-yellow-400 hover:text-black transition">
              <FaFacebook size={16} />
            </a>

            <a href="https://www.youtube.com/@vijayshankar8994" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-yellow-400 hover:text-black transition">
              <FaYoutube size={16} />
            </a>

            <a href="https://x.com/vijayshankar8994" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-yellow-400 hover:text-black transition">
              <FaXTwitter size={16} />
            </a>

            {/* ✅ WhatsApp Added */}
            <a href="https://wa.me/919899262078" target="_blank" rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-yellow-400 hover:text-black transition">
              <SiWhatsapp size={16} />
            </a>

          </div>

        </div>
      </Card>

      {/* ACTION BUTTONS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">

        {/* Hire Me */}
        <button
          onClick={() => window.location.href = "mailto:vijayshankar8994@gmail.com"}
          className="group flex items-center justify-center gap-2 p-4 rounded-2xl border border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-yellow-400/60 hover:bg-yellow-400/10"
        >
          <FiSend className="text-lg group-hover:scale-110 transition" />
          <span
            // onClick={() => window.location.href = "mailto:vijayshankar8994@gmail.com"}
            className="text-sm font-semibold">Hire Me</span>
        </button>

        {/* Email */}
        <a
          href="mailto:vijayshankar8994@gmail.com"
          className="group flex items-center justify-center gap-2 p-4 rounded-2xl border border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-yellow-400/60 hover:bg-yellow-400/10"
        >
          <FiMail className="text-lg group-hover:scale-110 transition" />
          <span className="text-sm font-semibold">Email</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919899262078"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-center gap-2 p-4 rounded-2xl border border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-yellow-400/60 hover:bg-yellow-400/10"
        >
          <SiWhatsapp className="text-lg group-hover:scale-110 transition" />
          <span className="text-sm font-semibold">WhatsApp</span>
        </a>

        {/* Download CV */}
        <a
          href="/Vijay_Shankar_Resume.pdf"
          download
          className="group flex items-center justify-center gap-2 p-4 rounded-2xl border border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-yellow-400/60 hover:bg-yellow-400/10"
        >
          <FiDownload className="text-lg group-hover:scale-110 transition" />
          <span className="text-sm font-semibold">Download CV</span>
        </a>

      </div>

      {/* ACTION BUTTONS */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">

        <button className="group flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-yellow-400/60 hover:bg-yellow-400/10">
          <FiSend className="text-xl group-hover:scale-110 transition" />
          <span className="text-sm font-semibold">Hire Me</span>
        </button>

        <a
          href="mailto:vijayshankar8994@gmail.com"
          className="group flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-yellow-400/60 hover:bg-yellow-400/10"
        >
          <FiMail className="text-xl group-hover:scale-110 transition" />
          <span className="text-sm font-semibold">Email</span>
        </a>

        <a
          href="https://wa.me/9899262078"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-yellow-400/60 hover:bg-yellow-400/10"
        >
          <FaWhatsapp className="text-xl group-hover:scale-110 transition" />
          <span className="text-sm font-semibold">WhatsApp</span>
        </a>

        <a
          href="/Vijay_Shankar_Resume.pdf"
          download
          className="group flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-yellow-400/60 hover:bg-yellow-400/10"
        >
          <FiDownload className="text-xl group-hover:scale-110 transition" />
          <span className="text-sm font-semibold">Download CV</span>
        </a>

      </div> */}
    </section>
  );
}