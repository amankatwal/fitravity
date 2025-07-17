import React from "react";

const TrainerDashboard = () => {
  return (
    <div className="h-screen flex bg-gray-900 text-white font-sans">
      
      {/* Sidebar */}
      <div className="w-64 bg-black p-6 space-y-6 shadow-lg">
        <h1 className="text-2xl font-bold text-lime-400">Trainer Panel</h1>
        <ul className="space-y-4 text-white">
          <li className="hover:text-lime-400 cursor-pointer">Dashboard</li>
          <li className="hover:text-lime-400 cursor-pointer">Clients</li>
          <li className="hover:text-lime-400 cursor-pointer">Messages</li>
          <li className="hover:text-lime-400 cursor-pointer">Scripts</li>
          <li className="hover:text-red-500 cursor-pointer">Logout</li>
        </ul>
      </div>

      {/* Main Panel */}
      <div className="flex-1 p-6">
        {/* Top Welcome */}
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-lime-300">Welcome, Trainer John!</h2>
        </div>

        {/* Client Details Section */}
        <div className="mb-6 bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2 text-lime-400">Client Info</h3>
          <p><strong>Name:</strong> Alex Doe</p>
          <p><strong>Age:</strong> 29</p>
          <p><strong>Weight:</strong> 75 kg</p>
          <p><strong>Goal:</strong> Muscle Gain</p>
          <p><strong>Membership:</strong> Premium</p>
        </div>

        {/* Chat Section */}
        <div className="mb-6 bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2 text-lime-400">Chat with Client</h3>
          <div className="h-40 bg-gray-700 p-2 mb-2 overflow-y-auto rounded">Chat Window</div>
          <input type="text" placeholder="Type message..." className="w-full p-2 rounded bg-gray-700 text-white" />
        </div>

        {/* Workout Script Section */}
        <div className="mb-6 bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2 text-lime-400">Send Scripted Workout</h3>
          <textarea className="w-full h-24 p-2 rounded bg-gray-700 text-white mb-2" placeholder="Enter workout script..."></textarea>
          <button className="bg-lime-500 px-4 py-2 rounded text-black font-semibold">Send</button>
        </div>

        {/* Timeline Section */}
        <div className="mb-6 bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2 text-lime-400">Client Timeline</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>01 Jan: Started Muscle Program</li>
            <li>10 Jan: Increased weight by 2kg</li>
            <li>20 Jan: New split routine assigned</li>
          </ul>
        </div>

        {/* Progress Summary */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2 text-lime-400">Progress Summary</h3>
          <ul className="space-y-1">
            <li>Weight: 75kg → 78kg</li>
            <li>Bench Press: 60kg → 75kg</li>
            <li>Body Fat %: 18% → 14%</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrainerDashboard;