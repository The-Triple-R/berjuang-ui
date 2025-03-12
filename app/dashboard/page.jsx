'use client';
import DashboardLayout from '../layouts/DashboardLayout';
import { DashboardChart } from '@/components/dashboardPage/DashboardChart';
import UserTransactionDetail from '@/components/dashboardPage/UserTransactionDetail';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
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
    <DashboardLayout>
      <div className='px-4 py-3 flex flex-col h-full'>
        <div className='flex-1 overflow-auto'>
          <h2 className='font-semibold text-2xl py-7'>Dashboard</h2>
          <UserTransactionDetail />
          <DashboardChart />
        </div>
        <div className='mt-4 border-t pt-4 flex gap-4'>
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
          <div className='w-64 border-l pl-4'>
            <h3 className='text-lg font-semibold mb-2'>Chat History</h3>
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
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
