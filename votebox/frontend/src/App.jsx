// src/App.jsx
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
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow p-4 text-center">
        <h1 className="text-3xl font-bold">VoteBox: What's Your Favorite Tech?</h1>
      </header>

      <main className="max-w-3xl mx-auto p-4">
        <div className="flex justify-center gap-4 my-6">
          {['Kubernetes', 'Docker', 'Jenkins'].map((option) => (
            <button
              key={option}
              onClick={() => handleVote(option)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl shadow"
            >
              {option}
            </button>
          ))}
        </div>

        <motion.div
          className="bg-white p-4 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Bar data={data} options={options} />
        </motion.div>
      </main>

      <footer className="text-center text-sm text-gray-500 mt-10 p-4 border-t">
        © {new Date().getFullYear()} VoteBox | Created by Kiril Kirilov
      </footer>
    </div>
  );
};

export default App;
