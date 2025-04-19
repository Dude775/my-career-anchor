import { useState, useEffect } from "react";
import { Question, questions, bonusQuestions, AnchorType } from "@/data/questions";
import { anchorResults } from "@/data/anchors";
import QuestionCard from "@/components/questionnaire/QuestionCard";
import ImportantQuestions from "@/components/questionnaire/ImportantQuestions";
import Result from "@/components/questionnaire/Result";

type RatingsType = Record<number, number | null>;
type ScoresType = Record<AnchorType, number>;

const QuestionnaireScreen = () => {
  // 1. שלב השאלות
  const [currentStep, setCurrentStep] = useState<'questions' | 'important' | 'result'>('questions');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [ratings, setRatings] = useState<RatingsType>({});
  
  // 2. שלב בחירת המשפטים החשובים
  const [highestRated, setHighestRated] = useState<{ question: Question; rating: number }[]>([]);
  const [importantQuestions, setImportantQuestions] = useState<number[]>([]);
  
  // 3. תוצאות
  const [finalScores, setFinalScores] = useState<ScoresType | null>(null);
  const [topAnchor, setTopAnchor] = useState<AnchorType | null>(null);

  // האם זו השאלה האחרונה
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // דירוג שאלה נוכחית
  const handleRate = (rating: number) => {
    setRatings(prev => ({
      ...prev,
      [questions[currentQuestionIndex].id]: rating
    }));
  };

  // מעבר לשאלה הבאה
  const handleNext = () => {
    if (isLastQuestion) {
      completeQuestionnaire();
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  // מעבר לשאלה הקודמת
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // סיום שלב השאלות ומעבר לבחירת המשפטים החשובים
  const completeQuestionnaire = () => {
    // מציאת השאלות עם הדירוגים הגבוהים ביותר
    const ratedQuestions = Object.entries(ratings)
      .map(([idStr, rating]) => {
        const id = parseInt(idStr);
        return { 
          question: questions.find(q => q.id === id)!,
          rating: rating || 0
        };
      })
      .filter(item => item.rating === 7) // רק אלה שקיבלו 7
      .sort((a, b) => b.rating - a.rating);

    setHighestRated(ratedQuestions);
    setCurrentStep('important');
  };

  // בחירת השאלות החשובות ביותר וחישוב התוצאות
  const handleSelectImportant = (selectedIds: number[]) => {
    setImportantQuestions(selectedIds);

    // חישוב הניקוד הסופי לפי עוגנים
    const scores: ScoresType = {
      expertise: 0,
      management: 0,
      autonomy: 0,
      security: 0,
      entrepreneurship: 0,
      service: 0,
      challenge: 0,
      lifestyle: 0
    };

    // חישוב ניקוד מכל השאלות
    questions.forEach(question => {
      const rating = ratings[question.id];
      if (rating !== null && rating !== undefined) {
        scores[question.anchorType] += rating;

        // הוספת 4 נקודות לשאלות שנבחרו כחשובות ביותר
        if (selectedIds.includes(question.id)) {
          scores[question.anchorType] += 4;
        }
      }
    });

    // מציאת העוגן עם הניקוד הגבוה ביותר
    let maxScore = 0;
    let maxAnchor: AnchorType | null = null;

    Object.entries(scores).forEach(([anchor, score]) => {
      if (score > maxScore) {
        maxScore = score;
        maxAnchor = anchor as AnchorType;
      }
    });

    setFinalScores(scores);
    setTopAnchor(maxAnchor);
    setCurrentStep('result');
  };

  // איפוס השאלון והתחלה מחדש
  const handleRestart = () => {
    setRatings({});
    setCurrentQuestionIndex(0);
    setHighestRated([]);
    setImportantQuestions([]);
    setFinalScores(null);
    setTopAnchor(null);
    setCurrentStep('questions');
  };

  // התאמת התצוגה לפי השלב הנוכחי
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'questions':
        return (
          <QuestionCard
            question={questions[currentQuestionIndex]}
            totalQuestions={questions.length}
            currentIndex={currentQuestionIndex}
            rating={ratings[questions[currentQuestionIndex].id] || null}
            onRate={handleRate}
            onNext={handleNext}
            onPrevious={handlePrevious}
            isLastQuestion={isLastQuestion}
          />
        );
      case 'important':
        return (
          <ImportantQuestions
            highestRatedQuestions={highestRated}
            onSelectImportant={handleSelectImportant}
          />
        );
      case 'result':
        if (topAnchor && finalScores) {
          return (
            <Result
              result={anchorResults[topAnchor]}
              allResults={finalScores}
              onRestart={handleRestart}
              ratings={ratings}
              importantQuestions={importantQuestions}
            />
          );
        }
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-quiz-gray to-white flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-md">
        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default QuestionnaireScreen;
