
import { cn } from "@/lib/utils";

interface RadioRatingProps {
  value: number | null;
  onChange: (value: number) => void;
  labels: {
    min: string;
    mid: string;
    max: string;
  };
  dir?: 'rtl' | 'ltr';
}

const RadioRating = ({ value, onChange, labels, dir = 'ltr' }: RadioRatingProps) => {
  const ratings = [1, 2, 3, 4, 5, 6, 7];

  const getLabel = (rating: number) => {
    if (rating === 1) return labels.min;
    if (rating === 4) return labels.mid;
    if (rating === 7) return labels.max;
    return "";
  };

  return (
    <div className="w-full" dir={dir}>
      <div className="flex justify-between items-center mb-2 px-2 text-xs text-quiz-coolGray">
        <span>{getLabel(1)}</span>
        <span>{getLabel(4)}</span>
        <span>{getLabel(7)}</span>
      </div>
      <div className="flex justify-between items-center w-full">
        {ratings.map((rating) => (
          <button
            key={rating}
            type="button"
            onClick={() => onChange(rating)}
            className={cn(
              "rating-button",
              value === rating
                ? "rating-button-selected"
                : "bg-quiz-gray text-quiz-dark hover:bg-quiz-light"
            )}
            aria-label={`Rating ${rating}`}
          >
            {rating}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RadioRating;
