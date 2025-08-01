import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 сек. зареждане
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-green-900 flex items-center justify-center z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-300"></div>
      </div>
    );
  }

  return null;
};

export default Preloader;
