import { AnchorResult, anchorResults } from "@/data/anchors";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import { useEffect } from "react";
import QuestionBreakdown from "./QuestionBreakdown";
import { questions } from "@/data/questions";

interface ResultProps {
  result: AnchorResult;
  allResults: Record<string, number>;
  onRestart: () => void;
  ratings: Record<number, number>;
  importantQuestions: number[];
}

const Result = ({ result, allResults, onRestart, ratings, importantQuestions }: ResultProps) => {
  // מערך של הערכים בסדר יורד
  const sortedResults = Object.entries(allResults)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3); // רק 3 העליונים
  
  useEffect(() => {
    // גלילה לראש העמוד כשהתוצאות מוצגות
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="quiz-card animate-fade-in">
      <div className="bg-gradient-quiz text-white p-6 rounded-lg mb-8 shadow-lg">
        <div className="text-center mb-4">
          <p className="text-5xl mb-2">{result.icon}</p>
          <h2 className="text-3xl font-bold">{result.title}</h2>
        </div>
      </div>

      <section className="mb-6">
        <h3 className="font-bold text-xl mb-3 text-right">העוגן המרכזי שלך</h3>
        <p className="text-right text-lg leading-relaxed mb-4">{result.description}</p>
        
        <div className="bg-quiz-gray p-4 rounded-lg">
          <h4 className="font-bold text-right">דוגמאות לכיווני קריירה מתאימים:</h4>
          <p className="text-right">{result.careerExamples}</p>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="font-bold text-xl mb-3 text-right">התוצאות המלאות שלך</h3>
        <div className="space-y-3">
          {sortedResults.map(([type, score], index) => {
            const anchorType = type as keyof typeof allResults;
            const anchorName = anchorResults[anchorType as any]?.title || type;
            return (
              <div key={type} className="flex items-center justify-between">
                <div className="bg-gradient-quiz h-2 rounded-full" style={{ 
                  width: `${Math.round((score / sortedResults[0][1]) * 100)}%`,
                  opacity: index === 0 ? 1 : index === 1 ? 0.7 : 0.5
                }}></div>
                <span className="mr-2 flex-shrink-0 font-medium">
                  {type === result.type && '✓'} {anchorName}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <QuestionBreakdown 
        questions={questions}
        ratings={ratings}
        importantQuestions={importantQuestions}
      />

      <div className="text-center mt-8">
        <Button onClick={onRestart} variant="outline" className="flex items-center gap-2">
          <RefreshCcw className="h-4 w-4" />
          התחל מחדש
        </Button>
      </div>
    </div>
  );
};

export default Result;
