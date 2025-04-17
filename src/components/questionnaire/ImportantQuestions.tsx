
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Question } from "@/data/questions";
import { Check, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImportantQuestionsProps {
  highestRatedQuestions: { question: Question; rating: number }[];
  onSelectImportant: (selectedIds: number[]) => void;
}

const ImportantQuestions = ({
  highestRatedQuestions,
  onSelectImportant
}: ImportantQuestionsProps) => {
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);

  const toggleQuestion = (id: number) => {
    if (selectedQuestions.includes(id)) {
      setSelectedQuestions(selectedQuestions.filter(qId => qId !== id));
    } else {
      // רק אם לא נבחרו כבר 3 שאלות
      if (selectedQuestions.length < 3) {
        setSelectedQuestions([...selectedQuestions, id]);
      }
    }
  };

  const handleSubmit = () => {
    if (selectedQuestions.length === 3) {
      onSelectImportant(selectedQuestions);
    }
  };

  return (
    <div className="quiz-card animate-fade-in">
      <h2 className="quiz-heading">כמעט סיימנו!</h2>
      <p className="quiz-subheading">בחר את 3 המשפטים שהכי מתאימים לך:</p>
      
      <div className="space-y-3 mb-8 text-right">
        {highestRatedQuestions.map(({ question }) => (
          <div
            key={question.id}
            onClick={() => toggleQuestion(question.id)}
            className={cn(
              "flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all duration-200",
              selectedQuestions.includes(question.id)
                ? "bg-quiz-primary bg-opacity-20 border-2 border-quiz-primary"
                : "bg-quiz-gray border-2 border-transparent hover:border-quiz-light"
            )}
          >
            <div className={cn(
              "w-6 h-6 flex-shrink-0 rounded-full flex items-center justify-center border-2",
              selectedQuestions.includes(question.id)
                ? "bg-quiz-primary border-quiz-primary text-white"
                : "border-quiz-coolGray"
            )}>
              {selectedQuestions.includes(question.id) && <Check className="w-4 h-4" />}
            </div>
            <p className="font-medium">{question.text}</p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-end">
        <Button 
          onClick={handleSubmit}
          disabled={selectedQuestions.length !== 3}
          className="quiz-button border-0 flex items-center gap-2"
        >
          הצג תוצאות
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ImportantQuestions;
