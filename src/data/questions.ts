
export interface Question {
  id: number;
  text: string;
  anchorType: AnchorType;
}

export type AnchorType = 
  | "expertise" 
  | "management" 
  | "autonomy" 
  | "security" 
  | "entrepreneurship" 
  | "service" 
  | "challenge" 
  | "lifestyle";

export interface BonusQuestion {
  id: number;
  text: string;
}

// 40 שאלות עיקריות מחולקות ל-8 עוגנים
export const questions: Question[] = [
  // עוגן ההתמחות המקצועית
  { id: 1, text: "חשוב לי להיות מומחה בתחום מסוים.", anchorType: "expertise" },
  { id: 2, text: "אני הכי מרוצה כשאני עובד על משהו שאני ממש טוב בו.", anchorType: "expertise" },
  { id: 3, text: "חשוב לי ללמוד ולהתפתח בתחום שלי.", anchorType: "expertise" },
  { id: 4, text: "יש תחום ספציפי שבו אני מרגיש שאני ממש פורח.", anchorType: "expertise" },
  { id: 5, text: "אני אוהב להיות ה\"מקצוען\" שאליו פונים להתייעצות.", anchorType: "expertise" },

  // עוגן הניהול
  { id: 6, text: "חשוב לי להוביל אנשים ולקבל החלטות.", anchorType: "management" },
  { id: 7, text: "אני תמיד מכוון לעמדות שבהן אני יכול להשפיע.", anchorType: "management" },
  { id: 8, text: "עושה לי טוב להיות זה שמנהל את העניינים.", anchorType: "management" },
  { id: 9, text: "אני רוצה להשפיע ברמת ההנהלה ולא רק לעשות מה שאומרים לי.", anchorType: "management" },
  { id: 10, text: "אני רואה את עצמי מתקדם לתפקידים ניהוליים.", anchorType: "management" },

  // עוגן האוטונומיה
  { id: 11, text: "אני צריך מרחב וחופש פעולה.", anchorType: "autonomy" },
  { id: 12, text: "לא אוהב שאומרים לי איך לעשות את העבודה שלי.", anchorType: "autonomy" },
  { id: 13, text: "חשוב לי לנהל את היום שלי בצורה עצמאית.", anchorType: "autonomy" },
  { id: 14, text: "אני פורח כשאין לי בוסים על הראש.", anchorType: "autonomy" },
  { id: 15, text: "אני חייב שהעבודה שלי תאפשר לי ביטוי אישי.", anchorType: "autonomy" },

  // עוגן הביטחון
  { id: 16, text: "חשוב לי לדעת שיש לי יציבות וביטחון בעבודה.", anchorType: "security" },
  { id: 17, text: "אני מעדיף משרה מסודרת וארוכת טווח.", anchorType: "security" },
  { id: 18, text: "שקט נפשי בעבודה חשוב לי יותר מכל דבר.", anchorType: "security" },
  { id: 19, text: "אני צריך לדעת בדיוק מה מצפים ממני בכל יום.", anchorType: "security" },
  { id: 20, text: "אני מרגיש טוב כשיש לי גב כלכלי יציב.", anchorType: "security" },

  // עוגן היזמות
  { id: 21, text: "תמיד יש לי רעיונות חדשים לעסקים או פרויקטים.", anchorType: "entrepreneurship" },
  { id: 22, text: "אני חולם להקים עסק משלי.", anchorType: "entrepreneurship" },
  { id: 23, text: "הכי עושה לי את זה ליצור משהו חדש מההתחלה.", anchorType: "entrepreneurship" },
  { id: 24, text: "אני נהנה לקחת סיכונים מחושבים.", anchorType: "entrepreneurship" },
  { id: 25, text: "חשוב לי ליזום, לפתח ולהביא דברים חדשים לעולם.", anchorType: "entrepreneurship" },

  // עוגן השירות
  { id: 26, text: "חשוב לי להרגיש שאני עושה משהו לטובת החברה.", anchorType: "service" },
  { id: 27, text: "אני נהנה לעזור לאחרים ולהשפיע לטובה.", anchorType: "service" },
  { id: 28, text: "ערכים חברתיים מנחים את הבחירות שלי בקריירה.", anchorType: "service" },
  { id: 29, text: "אני מחפש עבודה שתורמת לאחרים.", anchorType: "service" },
  { id: 30, text: "חשוב לי להשאיר חותם חיובי בעולם.", anchorType: "service" },

  // עוגן האתגר
  { id: 31, text: "אני חי על אדרנלין של אתגרים חדשים.", anchorType: "challenge" },
  { id: 32, text: "עבודה קלה מדי משעממת אותי מהר.", anchorType: "challenge" },
  { id: 33, text: "אני אוהב לפצח בעיות קשות.", anchorType: "challenge" },
  { id: 34, text: "תמיד מחפש משהו חדש להתנסות בו.", anchorType: "challenge" },
  { id: 35, text: "אני צריך עניין ואתגר קבועים בחיים.", anchorType: "challenge" },

  // עוגן סגנון החיים
  { id: 36, text: "הכי חשוב לי לאזן בין עבודה, משפחה וחיים אישיים.", anchorType: "lifestyle" },
  { id: 37, text: "העבודה צריכה להשתלב בצורה נוחה עם שאר החיים שלי.", anchorType: "lifestyle" },
  { id: 38, text: "לא אקריב את החיים הפרטיים בשביל קריירה.", anchorType: "lifestyle" },
  { id: 39, text: "אני מחפש עבודה גמישה מבחינת שעות ומיקום.", anchorType: "lifestyle" },
  { id: 40, text: "אני חייב שהעבודה שלי תתאים לסגנון החיים שאני רוצה.", anchorType: "lifestyle" },
];

// 5 שאלות בונוס לסיום
export const bonusQuestions: BonusQuestion[] = [
  { id: 41, text: "מה הדבר שהכי מניע אותך לקום בבוקר?" },
  { id: 42, text: "אם כסף לא היה שיקול – במה היית עוסק?" },
  { id: 43, text: "מה גורם לך להרגיש הצלחה אמיתית?" },
  { id: 44, text: "איזו מחמאה מקצועית הכי תשמח אותך?" },
  { id: 45, text: "מה ייתן לך תחושת סיפוק יותר מכל דבר?" },
];
