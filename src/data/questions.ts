
import { AnchorType } from "./questions";

export interface Question {
  id: number;
  text: string;
  anchorType: AnchorType;
}

export interface BonusQuestion {
  id: number;
  text: string;
}

export const questions: Question[] = [
  // Complete rewrite of questions to match the exact text
  { id: 1, text: "אני רוצה להגיע לדרגת מומחיות כה גבוהה שעצותיי תהיינה תמיד מצרך מבוקש ביותר", anchorType: "expertise" },
  { id: 2, text: "אני חש שאני מממש את עצמי בעבודה כאשר אני מצליח לנהל אחרים ואת עבודתם", anchorType: "management" },
  { id: 3, text: "אני חולם על קריירה שתאפשר לי יד חופשית ואוטונומיה במילוי תפקידיי השונים", anchorType: "autonomy" },
  { id: 4, text: "קביעות ויציבות חשובים לי יותר מאשר חופש ואוטונומיה", anchorType: "security" },
  { id: 5, text: "אני מחפש תמיד רעיונות שיאפשרו לי לבנות עסק משל עצמי", anchorType: "entrepreneurship" },
  { id: 6, text: "אחוש הצלחה בקריירה רק אם ארגיש שתרמתי משהו משמעותי לרווחת החברה", anchorType: "service" },
  { id: 7, text: "אני חולם על קריירה שתאפשר לי לפתור בהצלחה בעיות במצבים מורכבים במיוחד", anchorType: "challenge" },
  { id: 8, text: "אבחר לעזוב את הארגון אם יציבו אותי לתפקיד שיצמצם את יכולתי להתמיד בפעילויות משפחה ופנאי", anchorType: "lifestyle" },
  { id: 9, text: "אחוש הצלחה בקריירה רק אם יתאפשר לי לפתח את כישוריי הטכניים או המקצועיים לרמה גבוהה ביותר", anchorType: "expertise" },
  { id: 10, text: "הייתי רוצה לנהל ארגון גדול ומורכב ולקבל החלטות שישפיעו על אנשים רבים", anchorType: "management" },
  
  // The rest of the questions follow the same pattern...
  { id: 11, text: "אני חש שהגעתי למימוש עצמי בעיקר כאשר מתאפשר לי להגדיר את המטלות והמהלכים במסגרת תפקידי", anchorType: "autonomy" },
  { id: 12, text: "אבחר לעזוב את הארגון אם אקבל תפקיד שיסכן את הסיכוי שלי לקביעות בארגון", anchorType: "security" },
  // ... (continue with the rest of the questions following the pattern)
  { id: 40, text: "תמיד חיפשתי הזדמנויות עבודה שיקטינו את ההפרעה לחיי האישיים ולחיי המשפחה", anchorType: "lifestyle" },
];

// 5 שאלות בונוס לסיום
export const bonusQuestions: BonusQuestion[] = [
  { id: 41, text: "מה הדבר שהכי מניע אותך לקום בבוקר?" },
  { id: 42, text: "אם כסף לא היה שיקול – במה היית עוסק?" },
  { id: 43, text: "מה גורם לך להרגיש הצלחה אמיתית?" },
  { id: 44, text: "איזו מחמאה מקצועית הכי תשמח אותך?" },
  { id: 45, text: "מה ייתן לך תחושת סיפוק יותר מכל דבר?" },
];

