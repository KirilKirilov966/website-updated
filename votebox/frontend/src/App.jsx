import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import 'chart.js/auto';

const App = () => {
  const [votes, setVotes] = useState({});

  const fetchVotes = async () => {
    const response = await fetch('/api/results');
    const data = await response.json();
    setVotes(data);
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

  const data = {
    labels: Object.keys(votes),
    datasets: [
      {
        label: 'Votes',
        data: Object.values(votes),
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      <header className="bg-gray-950/90 backdrop-blur-md shadow py-6 px-4 border-b border-gray-700">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-center">VoteBox</h1>
          <p className="text-center text-lg text-gray-400 mt-2">What’s your favorite DevOps tool?</p>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-10">
        <div className="w-full max-w-4xl bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-xl p-8">
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
            {['Kubernetes', 'Docker', 'Jenkins'].map((option) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={option}
                onClick={() => handleVote(option)}
                className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white font-semibold text-lg py-3 px-6 rounded-2xl shadow-md backdrop-blur-sm"
              >
                {option}
              </motion.button>
            ))}
          </div>

          <motion.div
            className="bg-gray-900 p-6 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Bar data={data} options={options} />
          </motion.div>
        </div>
      </main>

      <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-700">
        © {new Date().getFullYear()} VoteBox | Created by Kiril Kirilov
      </footer>
    </div>
  );
};

export default App;
