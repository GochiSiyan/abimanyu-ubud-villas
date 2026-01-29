'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface PersonalityQuizProps {
  onComplete: (result: string) => void;
  onClose: () => void;
}

interface Question {
  id: number;
  question: string;
  options: Array<{
    text: string;
    characteristic: string;
  }>;
}

const PersonalityQuiz = ({ onComplete, onClose }: PersonalityQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions: Question[] = [
    {
      id: 1,
      question: "What matters most to you in a travel experience?",
      options: [
        { text: "Deep understanding and learning", characteristic: "wisdom" },
        { text: "Physical activities and adventure", characteristic: "strength" },
        { text: "Meditation and mindfulness", characteristic: "focus" },
        { text: "Aesthetic beauty and art", characteristic: "beauty" },
        { text: "Spiritual connection and rituals", characteristic: "devotion" },
      ],
    },
    {
      id: 2,
      question: "How do you prefer to spend your mornings?",
      options: [
        { text: "Reading and contemplating", characteristic: "wisdom" },
        { text: "Exercising or hiking", characteristic: "strength" },
        { text: "Practicing yoga or meditation", characteristic: "focus" },
        { text: "Enjoying beautiful surroundings", characteristic: "beauty" },
        { text: "Participating in ceremonies", characteristic: "devotion" },
      ],
    },
    {
      id: 3,
      question: "What type of space resonates with you?",
      options: [
        { text: "Library or study with books", characteristic: "wisdom" },
        { text: "Open spaces for movement", characteristic: "strength" },
        { text: "Quiet meditation room", characteristic: "focus" },
        { text: "Artistically designed spaces", characteristic: "beauty" },
        { text: "Sacred temple-like atmosphere", characteristic: "devotion" },
      ],
    },
    {
      id: 4,
      question: "What describes your ideal evening?",
      options: [
        { text: "Philosophical discussions", characteristic: "wisdom" },
        { text: "Active outdoor activities", characteristic: "strength" },
        { text: "Silent reflection", characteristic: "focus" },
        { text: "Appreciating art and culture", characteristic: "beauty" },
        { text: "Spiritual practices", characteristic: "devotion" },
      ],
    },
  ];

  const handleAnswer = (characteristic: string) => {
    const newAnswers = [...answers, characteristic];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const counts: { [key: string]: number } = {};
      newAnswers.forEach((answer) => {
        counts[answer] = (counts[answer] || 0) + 1;
      });
      const result = Object.keys(counts).reduce((a, b) =>
        counts[a] > counts[b] ? a : b
      );
      onComplete(result);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-card rounded-lg shadow-temple overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors duration-300"
          aria-label="Close quiz"
        >
          <Icon name="XMarkIcon" size={24} variant="outline" className="text-foreground" />
        </button>

        {/* Header */}
        <div className="p-8 border-b border-border">
          <div className="flex items-center space-x-3 mb-4">
            <Icon name="SparklesIcon" size={32} variant="solid" className="text-accent" />
            <h2 className="font-headline text-3xl font-semibold text-foreground">
              Discover Your Villa
            </h2>
          </div>
          <p className="font-body text-base text-muted-foreground">
            Answer these questions to find the Pandava villa that resonates with your spirit
          </p>
        </div>

        {/* Progress Bar */}
        <div className="px-8 pt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-body text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="font-body text-sm text-primary font-medium">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="p-8">
          <h3 className="font-headline text-2xl font-semibold text-foreground mb-6">
            {questions[currentQuestion].question}
          </h3>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.characteristic)}
                className="w-full p-4 text-left bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-card group-hover:bg-primary-foreground flex items-center justify-center flex-shrink-0">
                    <span className="font-body text-sm font-medium text-primary group-hover:text-primary">
                      {String.fromCharCode(65 + index)}
                    </span>
                  </div>
                  <span className="font-body text-base text-foreground group-hover:text-primary-foreground">
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="px-8 pb-8">
          {currentQuestion > 0 && (
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Icon name="ArrowLeftIcon" size={20} variant="outline" />
              <span className="font-body text-sm">Previous Question</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalityQuiz;