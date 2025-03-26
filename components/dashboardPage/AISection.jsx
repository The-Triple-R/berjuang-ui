'use client';
import React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const AISection = () => {
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState({ id: Date.now(), messages: [] });
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      const updatedConversation = {
        ...currentConversation,
        messages: [...currentConversation.messages, { text: input, timestamp: new Date().toLocaleTimeString() }],
      };

      setCurrentConversation(updatedConversation);
      setConversations((prev) => {
        const index = prev.findIndex((conv) => conv.id === currentConversation.id);
        if (index !== -1) {
          prev[index] = updatedConversation;
          return [...prev];
        }
        return [...prev, updatedConversation];
      });
      setInput('');
    }
  };

  const handleNewConversation = () => {
    const newConv = { id: Date.now(), messages: [] };
    setCurrentConversation(newConv);
    setConversations((prev) => [...prev, newConv]);
  };

  return (
    <div className='mt-4 border-t pt-4 flex gap-4 flex-col-reverse md:flex-row'>
      <div className='flex-1'>
        <div className='mb-2 h-64 overflow-y-auto bg-gray-100 p-3 rounded-lg flex flex-col justify-end'>
          {currentConversation.messages.map((msg, index) => (
            <div
              key={index}
              className='mb-1 p-2 bg-white rounded shadow'
            >
              {msg.text} <span className='text-xs text-gray-500'>{msg.timestamp}</span>
            </div>
          ))}
          <div className='mt-2 flex gap-2'>
            <input
              className='flex-1 p-2 border rounded'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Type something...'
            />
            <Button onClick={handleSend}>Send</Button>
          </div>
        </div>
        <Button
          className='mt-2'
          onClick={handleNewConversation}
        >
          New Conversation
        </Button>
      </div>
      <div className='md:border-l md:pl-4 md:w-64 border-b pb-4 md:pb-0 md:border-b-0'>
        <h3 className='text-lg font-semibold mb-2'>Chat History</h3>
        {conversations.length < 1 && <p className='text-gray-500'>No conversations yet.</p>}
        <ul>
          {conversations.map((conv, index) => (
            <li
              key={conv.id}
              className={`cursor-pointer p-2 rounded ${conv.id === currentConversation.id ? 'bg-gray-300' : 'hover:bg-gray-200'}`}
              onClick={() => setCurrentConversation(conv)}
            >
              Conversation {index + 1} ({new Date(conv.id).toLocaleDateString()})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AISection;
