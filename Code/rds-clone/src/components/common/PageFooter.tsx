// rds-clone/src/components/common/PageFooter.tsx
import React, { useState, useEffect } from 'react';

const PageFooter: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="py-6 text-center">
      {currentTime && (
        <p className="text-sm text-gray-600 mb-2">
          Current Server Time: {currentTime}
        </p>
      )}
      <p className="text-sm text-nsu-secondary font-semibold">
        Developed & Maintained By Office of IT, NSU
      </p>
    </footer>
  );
};

export default PageFooter;