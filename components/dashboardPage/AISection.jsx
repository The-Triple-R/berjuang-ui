'use client';
import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card } from '../ui/card';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const AISection = () => {
  const [messages, setMessages] = useState([]);
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/ai-responses`, {
          withCredentials: true,
        });

        if (data.status === 'success') {
          const groupedMessages = data.data.aiResponses.reduce((acc, msg) => {
            const date = msg.date.split('T')[0];
            if (!acc[date]) acc[date] = [];
            acc[date].push({ isAI: true, content: msg.message });
            return acc;
          }, {});

          setMessages(groupedMessages);
          const uniqueDates = Object.keys(groupedMessages).sort().reverse();
          setDates(uniqueDates);
          if (uniqueDates.length > 0) setSelectedDate(uniqueDates[0]);
        }
      } catch (error) {
        console.error('Error fetching AI responses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      setFilteredMessages(messages[selectedDate] || []);
    }
  }, [selectedDate, messages]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    const newMessage = { isAI: false, content: input };
    setFilteredMessages((prev) => [...prev, newMessage]);
    setInput('');
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/ai-responses`,
        { message: input },
        { withCredentials: true }
      );

      if (data.status === 'success') {
        setFilteredMessages((prev) => [...prev, { isAI: true, content: data.data.aiResponse }]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="flex-[4] bg-transparent mt-4">
      <div className='flex justify-between align-center p-4 border-b-2 border-black'>
        <div className='flex items-center'>
          <h3 className="text-lg font-semibold">Tanya AI</h3>
        </div>

        <Select value={selectedDate} onValueChange={setSelectedDate}>
          <SelectTrigger className="w-[200px] bg-transparent border border-gray-300 rounded-md p-2">
            <SelectValue placeholder="Pilih Tanggal" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-300 shadow-md rounded-md">
            <SelectGroup>
              {dates.map((date) => (
                <SelectItem key={date} value={date}>
                  {date}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3 overflow-y-auto max-h-[400px] p-2 bg-white">
        {filteredMessages.map((msg, index) => (
          <div key={index} className={`flex ${msg.isAI ? 'justify-start' : 'justify-end'}`}>
            <div
              className={`p-3 max-w-xs border-2 md:max-w-md lg:max-w-lg rounded-xl ${
                msg.isAI ? 'border-gray-100' : 'bg-gray-100 text-black border-transparent'
              }`}
            >
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          </div>
        ))}
        {loading && <p className="text-gray-500 text-center">Menunggu respons...</p>}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 m-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border p-2 rounded-md shadow-sm"
          placeholder="Ketik pesan..."
          disabled={loading}
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Mengirim...' : 'Kirim'}
        </Button>
      </form>
    </Card>
  );
};

export default AISection;
