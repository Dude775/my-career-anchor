
import { AnchorResult, anchorResults } from "@/data/anchors";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import { useEffect } from "react";
import QuestionBreakdown from "./QuestionBreakdown";
import { questions } from "@/data/questions";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface ResultProps {
  result: AnchorResult;
  allResults: Record<string, number>;
  onRestart: () => void;
  ratings: Record<number, number>;
  importantQuestions: number[];
}

const Result = ({ result, allResults, onRestart, ratings, importantQuestions }: ResultProps) => {
  const sortedResults = Object.entries(allResults)
    .sort((a, b) => b[1] - a[1]);
  
  useEffect(() => {
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
            const anchorName = anchorResults[anchorType]?.title;
            return (
              <div key={type} className="flex items-center justify-between">
                <div className="bg-gradient-quiz h-2 rounded-full" style={{ 
                  width: `${Math.round((score / sortedResults[0][1]) * 100)}%`,
                  opacity: index === 0 ? 1 : index === 1 ? 0.7 : 0.5
                }}></div>
                <span className="mr-2 flex-shrink-0 font-medium flex items-center gap-2">
                  {anchorName} - {score} נקודות
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <Separator className="my-8" />

      <section className="mb-8">
        <h3 className="font-bold text-xl mb-4 text-right">מצאו את ההסבר על עוגן הקריירה שלכם</h3>
        <ScrollArea className="rounded-md border p-4 h-[300px]">
          <div className="space-y-6">
            {Object.entries(anchorResults).map(([type, anchor]) => (
              <div key={type} className="text-right">
                <h4 className="font-bold mb-2">{anchor.title}:</h4>
                <p>{getAnchorExplanation(type as keyof typeof anchorResults)}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
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

// Helper function to get the anchor explanations
const getAnchorExplanation = (type: keyof typeof anchorResults): string => {
  const explanations: Record<keyof typeof anchorResults, string> = {
    expertise: "מניעים את האדם, כישרונו ושביעות הרצון שהוא מוצא בתחום ההתמחות שלו.",
    management: "מניע את האדם, רצונו להיות מנהל. יש לו שאיפה להתקדם בארגון, לנהל אנשים ותהליכים, להיות בין המובילים ובין מקבלי ההחלטות. להוביל את הארגון להצלחה.",
    autonomy: "מניע את האדם, הצורך לעשות דברים בדרכו, על פי סטנדרטים שלו, ולא להיות כבול בנהלים, תהליכים ומסגרות זמן שהארגון מכתיב.",
    security: "חשוב לאדם לדעת שהתעסוקה שלו מובטחת ומאורגנת והוא יכול להיות שקט לגבי העתיד. לעיתים יעדיף סוג של קשר קבוע עם מעסיק.",
    entrepreneurship: "מניע את האדם, הצורך להיות בעל עסק משלו. לפתח ולייצר מוצרים או שירותים במסגרת עצמאית.",
    service: "מנחים את האדם ערכים חברתיים. חשוב לו לעשות למען הכלל, לדאוג לרווחת החברה, לפעול לטובת אנשים.",
    challenge: "מניע את האדם, הרצון להתמודד ולהצליח עם אתגרים גדולים. לפתור בעיות ולהתגבר על מכשולים.",
    lifestyle: "מניע את האדם הצורך לשלב את צרכיו, צרכי משפחתו וצרכי הקריירה שלו. הוא מחפש עשייה שתשתלב עם מגוון ומכלול התפקידים בחייו."
  };
  return explanations[type];
};

export default Result;
