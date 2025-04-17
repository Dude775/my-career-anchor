
import { useState } from "react";
import { Question } from "@/data/questions";
import RadioRating from "./RadioRating";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface QuestionCardProps {
  question: Question;
  totalQuestions: number;
  currentIndex: number;
  rating: number | null;
  onRate: (rating: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  isLastQuestion: boolean;
}

const QuestionCard = ({
  question,
  totalQuestions,
  currentIndex,
  rating,
  onRate,
  onNext,
  onPrevious,
  isLastQuestion
}: QuestionCardProps) => {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="quiz-card animate-fade-in">
      <div className="mb-6">
        <div className="flex justify-between mb-1 text-sm text-quiz-coolGray">
          <span>שאלה {currentIndex + 1} מתוך {totalQuestions}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <h2 className="quiz-heading">המצפן התעסוקתי שלך</h2>
      
      <div className="bg-quiz-soft p-4 rounded-lg mb-6 text-right">
        <p className="text-xl font-medium">{question.text}</p>
      </div>
      
      <div className="mb-8">
        <RadioRating value={rating} onChange={onRate} />
      </div>
      
      <div className="flex justify-between">
        <Button 
          onClick={onPrevious}
          variant="outline"
          className="flex items-center gap-2"
          disabled={currentIndex === 0}
        >
          <ArrowRight className="h-4 w-4" />
          הקודם
        </Button>
        
        <Button 
          onClick={onNext}
          disabled={rating === null}
          className="quiz-button border-0 flex items-center gap-2"
        >
          {isLastQuestion ? "סיים" : "הבא"}
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default QuestionCard;
