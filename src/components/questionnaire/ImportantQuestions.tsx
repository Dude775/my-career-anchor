
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Question } from "@/data/questions";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

interface ImportantQuestionsProps {
  highestRatedQuestions: { question: Question; rating: number }[];
  onSelectImportant: (selectedIds: number[]) => void;
}

const ImportantQuestions = ({
  highestRatedQuestions,
  onSelectImportant
}: ImportantQuestionsProps) => {
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);
  const { language } = useLanguage();

  const toggleQuestion = (id: number) => {
    if (selectedQuestions.includes(id)) {
      setSelectedQuestions(selectedQuestions.filter(qId => qId !== id));
    } else {
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
      <h2 className="quiz-heading">
        {language === 'he' ? 'כמעט סיימנו!' : 'Almost there!'}
      </h2>
      <p className="quiz-subheading" dir={language === 'he' ? 'rtl' : 'ltr'}>
        {language === 'he' 
          ? 'בחר את 3 המשפטים שהכי מתאימים לך:'
          : 'Select the 3 statements that resonate with you the most:'}
      </p>
      
      <div className="space-y-3 mb-8" dir={language === 'he' ? 'rtl' : 'ltr'}>
        {highestRatedQuestions.map(({ question }) => (
          <div
            key={question.id}
            onClick={() => toggleQuestion(question.id)}
            className={cn(
              "flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all duration-200",
              "text-right",
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
            <p className="font-medium">
              {language === 'he' ? question.text : question.textEn}
            </p>
          </div>
        ))}
      </div>
      
      <div className={`flex ${language === 'he' ? 'justify-end' : 'justify-start'}`}>
        <Button 
          onClick={handleSubmit}
          disabled={selectedQuestions.length !== 3}
          className="quiz-button border-0 flex items-center gap-2"
        >
          {language === 'he' ? (
            <>
              הצג תוצאות
              <ArrowLeft className="h-4 w-4" />
            </>
          ) : (
            <>
              Show Results
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ImportantQuestions;
