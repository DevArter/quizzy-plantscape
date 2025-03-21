
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
    question: "Quel est le processus par lequel les plantes fabriquent leur propre nourriture ?",
    options: ["Respiration", "Photosynthèse", "Transpiration", "Germination"],
    correctAnswer: 1,
    explanation: "La photosynthèse est le processus par lequel les plantes utilisent la lumière du soleil, l'eau et le dioxyde de carbone pour créer de l'oxygène et de l'énergie sous forme de sucre.",
    difficulty: 'easy',
  },
  {
    id: 2,
    question: "Quelle partie de la plante absorbe l'eau et les nutriments du sol ?",
    options: ["Feuilles", "Tige", "Racines", "Fleurs"],
    correctAnswer: 2,
    explanation: "Les racines ancrent la plante dans le sol et absorbent l'eau et les nutriments nécessaires à sa croissance.",
    difficulty: 'easy',
  },
  {
    id: 3,
    question: "Quelle est la principale fonction des feuilles des plantes ?",
    options: ["Reproduction", "Photosynthèse", "Stockage d'eau", "Support"],
    correctAnswer: 1,
    explanation: "La fonction principale des feuilles est la photosynthèse, convertissant l'énergie lumineuse en énergie chimique.",
    difficulty: 'easy',
  },
  {
    id: 4,
    question: "Quelle hormone végétale est responsable de la maturation des fruits ?",
    options: ["Auxine", "Cytokinine", "Éthylène", "Gibbérelline"],
    correctAnswer: 2,
    explanation: "L'éthylène favorise la maturation des fruits et est souvent utilisé commercialement pour contrôler le processus de maturation.",
    difficulty: 'medium',
  },
  {
    id: 5,
    question: "Quel est le nom du tissu qui transporte l'eau des racines vers le haut dans les plantes ?",
    options: ["Phloème", "Xylème", "Cambium", "Épiderme"],
    correctAnswer: 1,
    explanation: "Le xylème est le tissu responsable du transport de l'eau et des minéraux dissous des racines vers le reste de la plante.",
    difficulty: 'medium',
  },
  {
    id: 6,
    question: "Laquelle de ces plantes est carnivore ?",
    options: ["Orchidée", "Cactus", "Dionée attrape-mouche", "Bambou"],
    correctAnswer: 2,
    explanation: "La dionée attrape-mouche est une plante carnivore qui capture et digère des proies animales, généralement des insectes et des arachnides.",
    difficulty: 'easy',
  },
  {
    id: 7,
    question: "Quelle est la plus grande fleur du monde ?",
    options: ["Rafflesia", "Tournesol", "Nénuphar", "Fleur cadavre"],
    correctAnswer: 0,
    explanation: "La Rafflesia arnoldii possède la plus grande fleur individuelle connue, qui peut atteindre 1 mètre de diamètre et peser jusqu'à 11 kilos.",
    difficulty: 'medium',
  },
  {
    id: 8,
    question: "À quelle famille de plantes appartient le riz ?",
    options: ["Solanacées", "Fabacées", "Poacées", "Brassicacées"],
    correctAnswer: 2,
    explanation: "Le riz appartient à la famille des Poacées, également connues sous le nom de graminées, qui comprend d'autres cultures importantes comme le blé, le maïs et l'orge.",
    difficulty: 'hard',
  },
  {
    id: 9,
    question: "Quelle adaptation aide les plantes du désert à conserver l'eau ?",
    options: ["Larges feuilles", "Tiges fines", "Racines profondes", "Cuticule cireuse"],
    correctAnswer: 3,
    explanation: "Les plantes du désert ont souvent une cuticule cireuse sur leurs feuilles et leurs tiges qui aide à prévenir la perte d'eau par transpiration.",
    difficulty: 'medium',
  },
  {
    id: 10,
    question: "Lequel de ces éléments ne fait PAS partie du système reproducteur d'une fleur ?",
    options: ["Étamine", "Pistil", "Pétiole", "Anthère"],
    correctAnswer: 2,
    explanation: "Le pétiole est la tige qui relie une feuille à la tige et ne fait pas partie du système reproducteur de la fleur.",
    difficulty: 'hard',
  }
];
