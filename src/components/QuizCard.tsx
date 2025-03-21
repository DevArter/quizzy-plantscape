
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonCustom } from "./ui/button-custom";
import ProgressBar from "./ProgressBar";
import { Question } from "@/utils/quizData";

interface QuizCardProps {
  question: Question;
  onAnswer: (optionIndex: number) => void;
  questionNumber: number;
  totalQuestions: number;
  isAnswered: boolean;
  selectedOption: number | null;
  nextQuestion: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  onAnswer,
  questionNumber,
  totalQuestions,
  isAnswered,
  selectedOption,
  nextQuestion,
}) => {
  const [animation, setAnimation] = useState("animate-enter");
  const difficultyColor = {
    easy: "bg-sage text-moss-dark",
    medium: "bg-moss-light text-moss-dark",
    hard: "bg-moss text-white"
  };
  
  const difficultyLabels = {
    easy: "Facile",
    medium: "Moyen",
    hard: "Difficile"
  };

  useEffect(() => {
    setAnimation("animate-enter");
    const timer = setTimeout(() => setAnimation(""), 500);
    return () => clearTimeout(timer);
  }, [question.id]);

  const handleOptionClick = (optionIndex: number) => {
    if (!isAnswered) {
      onAnswer(optionIndex);
    }
  };

  const getOptionClass = (optionIndex: number) => {
    if (!isAnswered) {
      return selectedOption === optionIndex ? "selected" : "";
    }
    
    if (optionIndex === question.correctAnswer) {
      return "correct";
    }
    
    if (selectedOption === optionIndex && selectedOption !== question.correctAnswer) {
      return "incorrect";
    }
    
    return "";
  };

  return (
    <motion.div 
      className={cn("quiz-card p-6 md:p-8 max-w-md w-full mx-auto", animation)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center mb-6">
        <span className={cn("text-xs font-medium px-3 py-1 rounded-full", difficultyColor[question.difficulty])}>
          {difficultyLabels[question.difficulty]}
        </span>
        <div className="flex items-center gap-1 text-sm font-medium text-foreground/70">
          <Leaf className="w-4 h-4 text-primary" />
          <span>
            {questionNumber} / {totalQuestions}
          </span>
        </div>
      </div>
      
      <ProgressBar current={questionNumber} total={totalQuestions} className="mb-6" />
      
      <h2 className="text-xl md:text-2xl font-medium mb-6 leading-snug">
        {question.question}
      </h2>
      
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => handleOptionClick(index)}
            className={cn(
              "option-button",
              getOptionClass(index),
              isAnswered && index !== question.correctAnswer && index !== selectedOption && "opacity-70"
            )}
            disabled={isAnswered}
            whileTap={{ scale: isAnswered ? 1 : 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-background text-foreground font-medium text-sm">
                {String.fromCharCode(65 + index)}
              </span>
              <span>{option}</span>
              
              {isAnswered && index === question.correctAnswer && (
                <CheckCircle2 className="w-5 h-5 text-primary ml-auto" />
              )}
              
              {isAnswered && selectedOption === index && index !== question.correctAnswer && (
                <XCircle className="w-5 h-5 text-destructive ml-auto" />
              )}
            </div>
          </motion.button>
        ))}
      </div>
      
      {isAnswered && (
        <motion.div 
          className="bg-muted rounded-xl p-4 mb-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm">{question.explanation}</p>
        </motion.div>
      )}
      
      {isAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <ButtonCustom 
            variant="primary" 
            className="w-full py-6" 
            onClick={nextQuestion}
          >
            Question Suivante
          </ButtonCustom>
        </motion.div>
      )}
    </motion.div>
  );
};

export default QuizCard;
