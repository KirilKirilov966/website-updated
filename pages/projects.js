import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Head>
        <title>Projects | Kiril Kirilov</title>
        <meta name="description" content="Explore the DevOps projects of Kiril Kirilov." />
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
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </motion.header>

      <motion.main 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center py-20 px-6"
      >
        <h2 className="text-5xl font-extrabold text-blue-400">Projects</h2>
        <p className="text-lg text-gray-300 mt-6 max-w-3xl leading-relaxed">
          A collection of my DevOps projects showcasing expertise in CI/CD, cloud architecture, automation, and infrastructure as code.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-300">CI/CD Pipeline Implementation</h3>
            <p className="text-gray-400 mt-3">Built an automated deployment pipeline using GitHub Actions, Docker, and Kubernetes.</p>
            <Link href="https://github.com/KirilKirilov966" className="text-blue-400 hover:underline mt-4 block">View Project</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-300">Infrastructure as Code (IaC)</h3>
            <p className="text-gray-400 mt-3">Designed cloud infrastructure using Terraform and Ansible for automated provisioning.</p>
            <Link href="https://github.com/KirilKirilov966" className="text-blue-400 hover:underline mt-4 block">View Project</Link>
          </motion.div>
        </div>
      </motion.main>
      
      <motion.footer 
        initial={{ y: 100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="py-6 text-center bg-gray-800 mt-16 border-t border-gray-700 shadow-lg"
      >
        <p className="text-gray-400 text-lg">&copy; 2025 Kiril Kirilov | DevOps Projects</p>
      </motion.footer>
    </div>
  );
}
