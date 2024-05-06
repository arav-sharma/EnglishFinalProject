import React from 'react';

const LoadingDots: React.FC = () => {
  return (
    <span className="inline-flex items-center">
      {[...Array(3)].map((_, i) => (
        <span key={i} className="ml-1 h-1 w-1 bg-black rounded-full animate-bounce200" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
    </span>
  );
};

export default LoadingDots;
