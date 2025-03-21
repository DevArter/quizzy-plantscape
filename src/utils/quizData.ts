
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  imageUrl?: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: number[];
  score: number;
  showResults: boolean;
  quizStarted: boolean;
  isAnswered: boolean;
  selectedOption: number | null;
}

export const plantQuizQuestions: Question[] = [
  {
    id: 1,
    question: "What is the process by which plants make their own food?",
    options: ["Respiration", "Photosynthesis", "Transpiration", "Germination"],
    correctAnswer: 1,
    explanation: "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to create oxygen and energy in the form of sugar.",
    difficulty: 'easy',
  },
  {
    id: 2,
    question: "Which part of the plant absorbs water and nutrients from the soil?",
    options: ["Leaves", "Stem", "Roots", "Flowers"],
    correctAnswer: 2,
    explanation: "Roots anchor the plant in the soil and absorb water and nutrients needed for growth.",
    difficulty: 'easy',
  },
  {
    id: 3,
    question: "What is the main function of plant leaves?",
    options: ["Reproduction", "Photosynthesis", "Water storage", "Support"],
    correctAnswer: 1,
    explanation: "The primary function of leaves is photosynthesis, converting light energy into chemical energy.",
    difficulty: 'easy',
  },
  {
    id: 4,
    question: "Which plant hormone is responsible for fruit ripening?",
    options: ["Auxin", "Cytokinin", "Ethylene", "Gibberellin"],
    correctAnswer: 2,
    explanation: "Ethylene promotes fruit ripening and is often used commercially to control the ripening process.",
    difficulty: 'medium',
  },
  {
    id: 5,
    question: "What is the name of the tissue that transports water up from the roots in plants?",
    options: ["Phloem", "Xylem", "Cambium", "Epidermis"],
    correctAnswer: 1,
    explanation: "Xylem is the tissue responsible for transporting water and dissolved minerals from the roots to the rest of the plant.",
    difficulty: 'medium',
  },
  {
    id: 6,
    question: "Which of these plants is a carnivore?",
    options: ["Orchid", "Cactus", "Venus Flytrap", "Bamboo"],
    correctAnswer: 2,
    explanation: "The Venus Flytrap is a carnivorous plant that catches and digests animal prey, typically insects and arachnids.",
    difficulty: 'easy',
  },
  {
    id: 7,
    question: "What is the largest flower in the world?",
    options: ["Rafflesia", "Sunflower", "Water Lily", "Corpse Flower"],
    correctAnswer: 0,
    explanation: "The Rafflesia arnoldii has the largest known individual flower, which can grow to 3 feet in diameter and weigh up to 24 pounds.",
    difficulty: 'medium',
  },
  {
    id: 8,
    question: "Which plant family does rice belong to?",
    options: ["Solanaceae", "Fabaceae", "Poaceae", "Brassicaceae"],
    correctAnswer: 2,
    explanation: "Rice belongs to the Poaceae family, also known as grasses, which includes other important crops like wheat, corn, and barley.",
    difficulty: 'hard',
  },
  {
    id: 9,
    question: "What adaptation helps desert plants conserve water?",
    options: ["Broad leaves", "Thin stems", "Deep roots", "Waxy cuticle"],
    correctAnswer: 3,
    explanation: "Desert plants often have a waxy cuticle on their leaves and stems that helps prevent water loss through transpiration.",
    difficulty: 'medium',
  },
  {
    id: 10,
    question: "Which of these is NOT a part of a flower's reproductive system?",
    options: ["Stamen", "Pistil", "Petiole", "Anther"],
    correctAnswer: 2,
    explanation: "The petiole is the stalk that connects a leaf to the stem and is not part of the flower's reproductive system.",
    difficulty: 'hard',
  }
];
