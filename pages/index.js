import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor-follower");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <Head>
        <title>Kiril Kirilov | DevOps Portfolio</title>
        <meta name="description" content="Follow Kiril Kirilov's DevOps journey and projects." />
      </Head>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-900 via-gray-900 to-black opacity-70"
          animate={{ scale: [1, 1.5, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
        />
      </div>

      <motion.header 
        initial={{ y: -100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="py-6 px-10 flex justify-between items-center bg-gray-800 shadow-lg border-b border-gray-700 backdrop-blur-md bg-opacity-80 relative z-10"
      >
        <h1 className="text-4xl font-bold text-blue-400">Kiril Kirilov</h1>
        <nav className="flex space-x-6 text-lg">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/about" className="hover:text-blue-400 transition duration-300">About</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/projects" className="hover:text-blue-400 transition duration-300">Projects</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/blog" className="hover:text-blue-400 transition duration-300">Blog</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link href="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link>
          </motion.div>
        </nav>
      </motion.header>

      <motion.main 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center py-20 px-6 relative z-10"
      >
        <motion.h2 className="text-6xl font-extrabold text-blue-400" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>My DevOps Journey</motion.h2>
        <p className="text-xl text-gray-300 mt-6 max-w-2xl leading-relaxed">
          Exploring cloud technologies, automation, and scalable infrastructure. Passionate about CI/CD, Kubernetes, and Terraform.
        </p>
      </motion.main>
      
      <section className="relative py-20 px-10 bg-gray-800 rounded-xl shadow-lg mx-10 overflow-hidden">
        <motion.div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-10 blur-3xl" animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 6 }}></motion.div>
        <h3 className="text-4xl font-bold text-center text-blue-400 relative z-10">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 relative z-10">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                <h4 className="text-2xl font-semibold text-blue-300">CI/CD Pipeline Implementation</h4>
                <p className="text-gray-400 mt-3">Built an automated deployment pipeline using Jenkins, Docker, and Kubernetes.</p>
                <Button className="mt-5 bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600">
                  <Link href="https://github.com/KirilKirilov966/ci-cd-web-app">View Project</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                <h4 className="text-2xl font-semibold text-blue-300">Infrastructure as Code (IaC)</h4>
                <p className="text-gray-400 mt-3">Designed cloud infrastructure using Terraform and Ansible for automated provisioning.</p>
                <Button className="mt-5 bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600">
                  <Link href="https://github.com/KirilKirilov966">View Project</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <motion.footer 
        initial={{ y: 100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="py-6 text-center bg-gray-800 mt-16 border-t border-gray-700 shadow-lg"
      >
        <p className="text-gray-400 text-lg">&copy; 2025 Kiril Kirilov | Sharing My DevOps Journey</p>
      </motion.footer>
    </div>
  );
}