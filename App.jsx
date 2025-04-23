import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');

  const sendMessage = async () => {
    const res = await fetch(import.meta.env.VITE_API_URL + '/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    setReply(data.reply);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Simsalabim AI Chatbot</h1>
      <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Tulis pesan..." />
      <button onClick={sendMessage}>Kirim</button>
      <p><strong>Balasan:</strong> {reply}</p>
    </div>
  );
}

export default App;
