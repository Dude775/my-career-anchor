
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Question } from '@/data/questions';
import { Check } from 'lucide-react';
import { Language } from "@/context/LanguageContext";

interface QuestionBreakdownProps {
  questions: Question[];
  ratings: Record<number, number>;
  importantQuestions: number[];
  language: Language;
}

const QuestionBreakdown: React.FC<QuestionBreakdownProps> = ({
  questions,
  ratings,
  importantQuestions,
  language
}) => {
  return (
    <div className="mt-8">
      <h3 className={`text-xl font-bold text-${language === 'he' ? 'right' : 'left'} mb-4`}>
        {language === 'he' ? 'פירוט התשובות שלך' : 'Your Question Scores'}
      </h3>
      <ScrollArea className="h-[400px] rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className={`text-${language === 'he' ? 'right' : 'left'}`}>
                {language === 'he' ? 'מספר שאלה' : 'Question #'}
              </TableHead>
              <TableHead className={`text-${language === 'he' ? 'right' : 'left'}`}>
                {language === 'he' ? 'ציון סופי' : 'Final Score'}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {questions.map((question) => {
              const baseScore = ratings[question.id] || 0;
              const isImportant = importantQuestions.includes(question.id);
              const finalScore = isImportant && baseScore === 7 ? 11 : baseScore;
              
              return (
                <TableRow key={question.id}>
                  <TableCell className={`text-${language === 'he' ? 'right' : 'left'}`}>
                    {question.id}
                  </TableCell>
                  <TableCell className={`text-${language === 'he' ? 'right' : 'left'}`}>
                    <span className={`${isImportant ? 'font-bold' : ''} flex items-center gap-2 ${language === 'he' ? 'justify-end' : 'justify-start'}`}>
                      {finalScore}
                      {isImportant && <Check className="h-4 w-4 text-green-500" />}
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default QuestionBreakdown;
