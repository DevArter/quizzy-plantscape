
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, ArrowRight } from "lucide-react";
import { ButtonCustom } from "@/components/ui/button-custom";
import QuizCard from "@/components/QuizCard";
import ResultScreen from "@/components/ResultScreen";
import { plantQuizQuestions, QuizState } from "@/utils/quizData";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: [],
    score: 0,
    showResults: false,
    quizStarted: false,
    isAnswered: false,
    selectedOption: null,
  });
  
  const { toast } = useToast();
  const currentQuestion = plantQuizQuestions[quizState.currentQuestionIndex];
  
  const startQuiz = () => {
    setQuizState({
      ...quizState,
      quizStarted: true,
      currentQuestionIndex: 0,
      answers: [],
      score: 0,
      showResults: false,
      isAnswered: false,
      selectedOption: null,
    });
    
    toast({
      title: "Quiz Commencé",
      description: "Bonne chance !",
    });
  };
  
  const handleAnswer = (optionIndex: number) => {
    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    
    setQuizState({
      ...quizState,
      answers: [...quizState.answers, optionIndex],
      score: isCorrect ? quizState.score + 1 : quizState.score,
      isAnswered: true,
      selectedOption: optionIndex,
    });
    
    // Show toast for correct/incorrect answer
    if (isCorrect) {
      toast({
        title: "Correct !",
        description: "Bien joué !",
      });
    } else {
      toast({
        title: "Incorrect",
        description: "Meilleure chance à la prochaine question !",
      });
    }
  };
  
  const nextQuestion = () => {
    const nextIndex = quizState.currentQuestionIndex + 1;
    
    if (nextIndex < plantQuizQuestions.length) {
      setQuizState({
        ...quizState,
        currentQuestionIndex: nextIndex,
        isAnswered: false,
        selectedOption: null,
      });
    } else {
      setQuizState({
        ...quizState,
        showResults: true,
      });
      
      toast({
        title: "Quiz Terminé !",
        description: `Vous avez obtenu ${quizState.score} sur ${plantQuizQuestions.length}.`,
      });
    }
  };
  
  const restartQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      answers: [],
      score: 0,
      showResults: false,
      quizStarted: true,
      isAnswered: false,
      selectedOption: null,
    });
  };

  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center justify-center px-4 py-8">
      <AnimatePresence mode="wait">
        {!quizState.quizStarted ? (
          <motion.div
            key="welcome"
            className="quiz-card p-6 md:p-8 max-w-md w-full mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
              className="w-20 h-20 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-6"
            >
              <Leaf className="w-10 h-10 text-primary" />
            </motion.div>
            
            <motion.h1 
              className="text-2xl md:text-3xl font-medium mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Quiz sur les Plantes
            </motion.h1>
            
            <motion.p 
              className="text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Testez vos connaissances sur le monde fascinant des plantes avec ce 
              quiz de 10 questions. Êtes-vous prêt à développer votre sagesse botanique ?
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <ButtonCustom 
                variant="primary" 
                className="w-full py-6" 
                onClick={startQuiz}
              >
                Commencer le Quiz
                <ArrowRight className="w-5 h-5 ml-2" />
              </ButtonCustom>
            </motion.div>
            
            <motion.p 
              className="text-xs text-muted-foreground mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Découvrez des faits fascinants sur les plantes et relevez le défi avec des 
              questions allant du niveau débutant au niveau expert.
            </motion.p>
          </motion.div>
        ) : quizState.showResults ? (
          <ResultScreen
            key="results"
            score={quizState.score}
            answers={quizState.answers}
            restartQuiz={restartQuiz}
          />
        ) : (
          <QuizCard
            key={`question-${quizState.currentQuestionIndex}`}
            question={currentQuestion}
            onAnswer={handleAnswer}
            questionNumber={quizState.currentQuestionIndex + 1}
            totalQuestions={plantQuizQuestions.length}
            isAnswered={quizState.isAnswered}
            selectedOption={quizState.selectedOption}
            nextQuestion={nextQuestion}
          />
        )}
      </AnimatePresence>
      
      {quizState.quizStarted && (
        <motion.div
          className="mt-6 text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <button 
            onClick={() => setQuizState({ ...quizState, quizStarted: false })}
            className="hover:underline focus:outline-none"
          >
            Retour à l'Accueil
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
