
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Question } from '@/data/questions';
import { Check } from 'lucide-react';

interface QuestionBreakdownProps {
  questions: Question[];
  ratings: Record<number, number>;
  importantQuestions: number[];
}

const QuestionBreakdown: React.FC<QuestionBreakdownProps> = ({
  questions,
  ratings,
  importantQuestions
}) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-right mb-4">פירוט התשובות שלך</h3>
      <ScrollArea className="h-[400px] rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">מספר שאלה</TableHead>
              <TableHead className="text-right">ציון סופי</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {questions.map((question) => {
              const baseScore = ratings[question.id] || 0;
              const isImportant = importantQuestions.includes(question.id);
              const finalScore = isImportant && baseScore === 7 ? 11 : baseScore;
              
              return (
                <TableRow key={question.id}>
                  <TableCell className="text-right">{question.id}</TableCell>
                  <TableCell className="text-right">
                    <span className={`${isImportant ? 'font-bold' : ''} flex items-center gap-2 justify-end`}>
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
