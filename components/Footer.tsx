// app/components/Footer.tsx

import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Me</h2>
          <div className="flex space-x-4 text-2xl text-gray-300">
            <a href="https://github.com/" target="_blank"><FaGithub /></a>
            <a href="https://linkedin.com/" target="_blank"><FaLinkedin /></a>
            <a href="https://twitter.com/" target="_blank"><FaTwitter /></a>
            <a href="https://www.facebook.com/ashiqahmed002"><FaFacebook /></a>
          </div>
        </div>

        {/* Branding */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Ashik's Webspace</h2>
          <p className="text-gray-400">
            Crafting code with love. <br /> © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
