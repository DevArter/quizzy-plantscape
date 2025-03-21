
import React from "react";
import { motion } from "framer-motion";
import { Leaf, Award, BarChart3 } from "lucide-react";
import { ButtonCustom } from "./ui/button-custom";
import { plantQuizQuestions, Question } from "@/utils/quizData";

interface ResultScreenProps {
  score: number;
  answers: number[];
  restartQuiz: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ score, answers, restartQuiz }) => {
  const totalQuestions = plantQuizQuestions.length;
  const percentage = Math.floor((score / totalQuestions) * 100);
  
  const getFeedback = () => {
    if (percentage >= 90) return "Maître des Plantes !";
    if (percentage >= 70) return "Passionné de Plantes !";
    if (percentage >= 50) return "Connaissances en Croissance !";
    return "Jardinier Débutant";
  };
  
  const getColor = () => {
    if (percentage >= 90) return "text-primary";
    if (percentage >= 70) return "text-moss-dark";
    if (percentage >= 50) return "text-soil-dark";
    return "text-soil";
  };

  return (
    <motion.div
      className="quiz-card p-6 md:p-8 max-w-md w-full mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex justify-center mb-8">
        <motion.div
          className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
        >
          <Award className="w-12 h-12 text-primary" />
        </motion.div>
      </div>
      
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-xl font-medium mb-2">Quiz Terminé !</h2>
        <p className={`text-3xl font-bold mb-2 ${getColor()}`}>{getFeedback()}</p>
        <p className="text-muted-foreground">
          Vous avez obtenu <span className="font-medium">{score} sur {totalQuestions}</span>
        </p>
      </motion.div>
      
      <motion.div 
        className="bg-muted rounded-xl p-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="font-medium">Détails du Score</span>
          </div>
          <span className="text-lg font-bold">{percentage}%</span>
        </div>
        
        <div className="w-full bg-background rounded-full h-3 mb-4">
          <motion.div 
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          />
        </div>
        
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Débutant</span>
          <span>Expert</span>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <ButtonCustom 
          variant="primary" 
          className="w-full py-6" 
          onClick={restartQuiz}
        >
          <Leaf className="w-5 h-5 mr-2" />
          Recommencer le Quiz
        </ButtonCustom>
      </motion.div>
    </motion.div>
  );
};

export default ResultScreen;
