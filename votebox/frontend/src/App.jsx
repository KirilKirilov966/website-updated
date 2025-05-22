import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import 'chart.js/auto';

const App = () => {
  const [votes, setVotes] = useState({});

  const fetchVotes = async () => {
    try {
      const response = await fetch('/api/results');
      const data = await response.json();
      setVotes(data);
    } catch (err) {
      console.error("Failed to fetch votes:", err);
    }
  };

  const handleVote = async (option) => {
    await fetch('/api/vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ option }),
    });
    fetchVotes();
  };

  useEffect(() => {
    fetchVotes();
  }, []);

  const labels = ['Kubernetes', 'Docker', 'Jenkins'];
  const values = labels.map((label) => votes[label] || 0);

  const data = {
    labels,
    datasets: [
      {
        label: 'Votes',
        data: values,
        backgroundColor: ['#6366f1', '#10b981', '#f59e0b'],
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 1200,
      easing: 'easeOutQuart',
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          color: '#e5e7eb'
        },
        grid: {
          color: 'rgba(255,255,255,0.1)'
        }
      },
      x: {
        ticks: { color: '#e5e7eb' },
        grid: { color: 'rgba(255,255,255,0.05)' }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#e5e7eb'
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white font-sans">
      <header className="bg-[#0f172a]/80 backdrop-blur-lg shadow-lg py-6 px-4 border-b border-gray-700">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center">VoteBox</h1>
          <p className="text-center text-lg text-gray-400 mt-2">What’s your favorite DevOps tool?</p>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl bg-[#1e293b]/90 backdrop-blur-md border border-gray-700 rounded-3xl shadow-2xl p-10"
        >
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {labels.map((option) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={option}
                onClick={() => handleVote(option)}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 text-white font-semibold text-lg py-3 px-6 rounded-xl shadow-xl"
              >
                {option}
              </motion.button>
            ))}
          </div>

          <div className="bg-[#0f172a] p-6 rounded-2xl shadow-lg">
            <Bar data={data} options={options} />
          </div>
        </motion.div>
      </main>

      <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-700">
        © {new Date().getFullYear()} VoteBox | Created by Kiril Kirilov
      </footer>
    </div>
  );
};

export default App;