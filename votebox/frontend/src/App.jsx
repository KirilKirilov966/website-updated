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
        backgroundColor: '#6366f1',
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 1000,
      easing: 'easeOutBounce',
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <header className="bg-gray-100 shadow-md py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-center">VoteBox</h1>
          <p className="text-center text-lg text-gray-600 mt-2">What's your favorite DevOps tool?</p>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-10">
        <div className="w-full max-w-4xl bg-gray-50 rounded-3xl shadow-xl p-8">
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
            {['Kubernetes', 'Docker', 'Jenkins'].map((option) => (
              <button
                key={option}
                onClick={() => handleVote(option)}
                className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white font-medium text-lg py-3 px-6 rounded-2xl shadow-md"
              >
                {option}
              </button>
            ))}
          </div>

          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Bar data={data} options={options} />
          </motion.div>
        </div>
      </main>

      <footer className="text-center text-sm text-gray-500 py-6 border-t mt-10">
        © {new Date().getFullYear()} VoteBox | Created by Kiril Kirilov
      </footer>
    </div>
  );
};

export default App;
