'use client';

interface AnimatedHeadlinePremiumProps {
  text: string;
  className?: string;
}

export default function AnimatedHeadlinePremium({ text, className }: AnimatedHeadlinePremiumProps) {
  const words = text.split(' ');

  return (
    <h1 className={className}>
      {words.map((word, index) => {
        const isSpecial = word === 'SQL' || word === '&' || word === 'Python';
        return (
          <span key={index} className={`inline-block mr-2 ${isSpecial ? 'neon-shine-text' : 'gradient-wave-text'}`}>
            {word}
          </span>
        );
      })}
    </h1>
  );
}
