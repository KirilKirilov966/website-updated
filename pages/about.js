import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Head>
        <title>About | Kiril Kirilov</title>
        <meta name="description" content="Learn more about Kiril Kirilov and his transition to DevOps." />
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
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </motion.header>

      <motion.main 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center py-20 px-6"
      >
        <h2 className="text-5xl font-extrabold text-blue-400">About Me</h2>
        <p className="text-lg text-gray-300 mt-6 max-w-3xl leading-relaxed">
          Hi, I’m <span className="text-blue-400 font-semibold">Kiril Kirilov</span>, a <span className="font-semibold">28-year-old transitioning into DevOps</span>. With a background in sales at Google Maps, I have developed a deep understanding of technology solutions and how they impact businesses. Now, I am shifting my focus towards **cloud automation, infrastructure as code, and DevOps best practices**.
        </p>
        <h3 className="text-3xl font-bold text-blue-400 mt-10"> My DevOps Transition</h3>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl leading-relaxed">
          My journey into DevOps began with self-learning, practical labs, and hands-on projects. I am passionate about building efficient, automated, and scalable infrastructure. Here are the technologies I have been actively working with:
        </p>
        <ul className="text-lg text-gray-300 mt-4 max-w-3xl leading-relaxed text-left">
          <li>✅ <span className="font-semibold">Linux</span> – Proficient in system administration and shell scripting</li>
          <li>✅ <span className="font-semibold">Bash & Python</span> – Automating workflows and system processes</li>
          <li>✅ <span className="font-semibold">Docker & Kubernetes</span> – Containerization and orchestration for scalable applications</li>
          <li>✅ <span className="font-semibold">AWS (basic)</span> – Learning cloud infrastructure and services</li>
          <li>✅ <span className="font-semibold">Terraform & Ansible</span> – Infrastructure as Code (IaC) and configuration management</li>
        </ul>
        <h3 className="text-3xl font-bold text-blue-400 mt-10">📖 My Learning & Projects</h3>
        <ul className="text-lg text-gray-300 mt-4 max-w-3xl leading-relaxed text-left">
          <li> KodeKloud & Practical Labs – Hands-on experience with Kubernetes, Terraform, and CI/CD</li>
          <li>🚀 Pragmatic DevOps Essentials – Gaining a strong foundation in automation, cloud infrastructure, and DevOps methodologies</li>
          <li>🚀 Personal DevOps Portfolio – Built and deployed this site using Next.js, Vercel, and GitHub Actions</li>
          <li>🚀 Automated Deployments – Implemented CI/CD pipelines with Docker & Kubernetes</li>
        </ul>
        <h3 className="text-3xl font-bold text-blue-400 mt-10"> What’s Next?</h3>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl leading-relaxed">
          I am actively seeking opportunities to **start my career as a Junior DevOps Engineer**, contribute to exciting projects, and refine my expertise in cloud automation. I am eager to work with experienced teams where I can learn, grow, and make an impact.
        </p>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl leading-relaxed">
          If you’re looking for a **motivated, adaptable, and technically driven professional**, let’s connect!
        </p>
        <p className="text-lg text-gray-300 mt-6 font-semibold">📩 Feel free to reach out! 🚀</p>
      </motion.main>
      
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