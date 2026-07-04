import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const VisitorCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    // This API increments the counter and returns the new count
    fetch('https://api.counterapi.dev/v1/aivro/aivro_online/up')
      .then(res => res.json())
      .then(data => {
        if (data && data.count) {
          setCount(data.count);
        }
      })
      .catch(err => console.error("Error fetching visitor count", err));
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-600 bg-white shadow-sm px-4 py-2 rounded-full border border-gray-200 hover:shadow-md transition-shadow">
      <Eye size={14} className="text-pink-500 animate-pulse" />
      <span>{count.toLocaleString()} Total Views</span>
    </div>
  );
};

export default VisitorCounter;
