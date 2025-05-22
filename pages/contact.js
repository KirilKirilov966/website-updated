import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Head>
        <title>Contact | Kiril Kirilov</title>
        <meta name="description" content="Get in touch with Kiril Kirilov." />
      </Head>
      
      <motion.header 
        initial={{ y: -100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="py-6 px-10 flex justify-between items-center bg-gray-800 shadow-lg border-b border-gray-700 backdrop-blur-md bg-opacity-80"
      >
        <h1 className="text-4xl font-bold text-blue-400">Kiril Kirilov</h1>
        <nav className="flex space-x-6 text-lg">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </motion.header>

      <motion.main 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center py-20 px-6"
      >
        <h2 className="text-5xl font-extrabold text-blue-400">Contact Me</h2>
        <p className="text-lg text-gray-300 mt-6 max-w-3xl leading-relaxed">
          Feel free to reach out for collaborations, inquiries, or just a chat about DevOps!
        </p>
        <div className="mt-10 w-full max-w-md bg-gray-900 p-6 rounded-xl shadow-lg">
          <form className="flex flex-col space-y-4">
            <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <textarea placeholder="Your Message" rows="5" className="p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
            <button type="submit" className="mt-4 bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300">Send Message</button>
          </form>
        </div>
      </motion.main>
      
      <motion.footer 
        initial={{ y: 100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="py-6 text-center bg-gray-800 mt-16 border-t border-gray-700 shadow-lg"
      >
        <p className="text-gray-400 text-lg">&copy; 2025 Kiril Kirilov | Contact</p>
      </motion.footer>
    </div>
  );
}