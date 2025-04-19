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

export const questions: Question[] = [
  // עוגן ההתמחות המקצועית
  { id: 1, text: "אני שואף להיות מומחה בתחום שלי, כזה שתמיד מחפשים את דעתו.", anchorType: "expertise" },
  { id: 9, text: "אני רוצה לפתח את הכישורים שלי לרמה הכי גבוהה שיש.", anchorType: "expertise" },
  { id: 17, text: "אני מעדיף להיות מומחה בתחום שלי מאשר מנכ\"ל.", anchorType: "expertise" },
  { id: 25, text: "אם יזיזו אותי מהתחום המקצועי שלי – אעדיף לעזוב.", anchorType: "expertise" },
  { id: 33, text: "אני מרגיש שאני מצליח כשאני משתמש בכישורים הייחודיים שלי.", anchorType: "expertise" },

  // עוגן הניהול
  { id: 2, text: "אני מרגיש שאני פורח כשאני מנהל אנשים ומוביל אותם להצלחה.", anchorType: "management" },
  { id: 10, text: "יש לי שאיפה לנהל ארגון גדול ולהשפיע על הרבה אנשים.", anchorType: "management" },
  { id: 18, text: "פסגת הקריירה בשבילי זה להיות מנכ\"ל.", anchorType: "management" },
  { id: 26, text: "מעניין אותי יותר להיות מנכ\"ל מאשר מומחה בכיר.", anchorType: "management" },
  { id: 34, text: "אם אין לי אופק להתקדם – זה סימן שאני צריך לזוז.", anchorType: "management" },

  // עוגן האוטונומיה
  { id: 3, text: "חשוב לי חופש – שהעבודה תיתן לי לפעול בדרך שלי.", anchorType: "autonomy" },
  { id: 11, text: "חשוב לי להגדיר לבד את הדרך בה אני עובד.", anchorType: "autonomy" },
  { id: 19, text: "רק אם יהיה לי חופש מלא – אני ארגיש שאני מצליח.", anchorType: "autonomy" },
  { id: 27, text: "עצמאות בעבודה יותר חשובה לי מביטחון תעסוקתי.", anchorType: "autonomy" },
  { id: 35, text: "אם יגבילו לי את החופש – אני לא אשאר.", anchorType: "autonomy" },

  // עוגן הביטחון
  { id: 4, text: "אני מעדיף יציבות תעסוקתית גם אם זה בא על חשבון החופש.", anchorType: "security" },
  { id: 12, text: "אם יציעו לי תפקיד שיפגע ביציבות שלי – זה דיל ברייקר.", anchorType: "security" },
  { id: 20, text: "חשוב לי לעבוד במקום יציב ובטוח.", anchorType: "security" },
  { id: 28, text: "אני נרגע כשיש לי יציבות כלכלית וביטחון תעסוקתי.", anchorType: "security" },
  { id: 36, text: "אני רוצה קריירה עם תחושת ביטחון ויציבות.", anchorType: "security" },

  // עוגן היזמות
  { id: 5, text: "תמיד מדגדג לי להקים עסק משלי.", anchorType: "entrepreneurship" },
  { id: 13, text: "להקים משהו משלי מושך אותי יותר מאשר תפקיד בכיר אצל אחרים.", anchorType: "entrepreneurship" },
  { id: 21, text: "אני הכי מסופק כשאני בונה משהו מאפס, מרעיון שלי.", anchorType: "entrepreneurship" },
  { id: 29, text: "אני רוצה שהקריירה שלי תוביל ליצירה מקורית משלי.", anchorType: "entrepreneurship" },
  { id: 37, text: "אני חולם להקים עסק מהקרקע.", anchorType: "entrepreneurship" },

  // עוגן השירות
  { id: 6, text: "אני רוצה שהעבודה שלי תתרום לחברה ולרווחת אנשים.", anchorType: "service" },
  { id: 14, text: "אני רוצה לתרום מהיכולות שלי כדי לעזור לאחרים.", anchorType: "service" },
  { id: 22, text: "חשוב לי להשתמש בכישרון שלי כדי להפוך את העולם למקום טוב יותר.", anchorType: "service" },
  { id: 30, text: "אני רוצה שהעבודה שלי תעשה הבדל בעולם.", anchorType: "service" },
  { id: 38, text: "אם אמנע מלתת שירות לאחרים – אני אעדיף לעזוב.", anchorType: "service" },

  // עוגן האתגר
  { id: 7, text: "מרגש אותי לפתור בעיות מורכבות שאף אחד לא הצליח לפצח.", anchorType: "challenge" },
  { id: 15, text: "אני אוהב אתגר – כשקשה, אני נדלק.", anchorType: "challenge" },
  { id: 23, text: "אני מרגיש סיפוק כשאני פותר בעיה מסובכת שאף אחד לא פתר.", anchorType: "challenge" },
  { id: 31, text: "אני מחפש אתגרים שמפעילים לי את הראש.", anchorType: "challenge" },
  { id: 39, text: "לפתור בעיות קשות שווה לי יותר מתפקיד ניהולי בכיר.", anchorType: "challenge" },

  // עוגן סגנון החיים
  { id: 8, text: "אם העבודה תפריע לי יותר מדי לחיים האישיים – אני שוקל לעזוב.", anchorType: "lifestyle" },
  { id: 16, text: "חשוב לי קריירה שמשתלבת עם המשפחה והחיים.", anchorType: "lifestyle" },
  { id: 24, text: "בלי איזון בין הקריירה לחיים – אין לי שקט.", anchorType: "lifestyle" },
  { id: 32, text: "איזון בין עבודה לחיים חשוב לי יותר מקידום לניהול בכיר.", anchorType: "lifestyle" },
  { id: 40, text: "אני תמיד מחפש עבודה שלא תתנגש לי עם החיים האישיים.", anchorType: "lifestyle" },
];

// 5 שאלות בונוס לסיום
export const bonusQuestions: BonusQuestion[] = [
  { id: 41, text: "מה הדבר שהכי מניע אותך לקום בבוקר?" },
  { id: 42, text: "אם כסף לא היה שיקול – במה היית עוסק?" },
  { id: 43, text: "מה גורם לך להרגיש הצלחה אמיתית?" },
  { id: 44, text: "איזו מחמאה מקצועית הכי תשמח אותך?" },
  { id: 45, text: "מה ייתן לך תחושת סיפוק יותר מכל דבר?" },
];
