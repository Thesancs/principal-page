import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  initialSeconds?: number;
}

const Timer: React.FC<TimerProps> = ({ initialSeconds = 600 }) => {
  // Estado interno do tempo restante
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  // Efeito para decrementar o timer a cada segundo
  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  // Formatação mm:ss
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return (
    <div className="flex items-center space-x-2 text-white font-extrabold uppercase tracking-widest">
      <Clock size={18} />
      <span>Tempo restante: {minutes}:{seconds}</span>
    </div>
  );
};

export default Timer;
