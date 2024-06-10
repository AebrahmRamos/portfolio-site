import React from 'react';
import './App.css';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-500">Donate for development costs!</p>
          <img src="gcash-qr.jpg" alt="GCash QR Code" style={{maxWidth: '25%', maxHeight: 'auto', margin: '0 auto'}}/>
        </div>
      </header>
    </div>
  );
}

export default App;