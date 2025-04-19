// הגדרת סוגי העוגנים
export type AnchorType = "expertise" | "management" | "autonomy" | "security" | "entrepreneurship" | "service" | "challenge" | "lifestyle";

export interface Question {
  id: number;
  text: string;
  textEn: string;  // Add English text field
  anchorType: AnchorType;
}

export interface BonusQuestion {
  id: number;
  text: string;
}

export const questions: Question[] = [
  // שאלות הקריירה לפי הסדר המדויק
  { id: 1, text: "אני רוצה להגיע לדרגת מומחיות כה גבוהה שעצותיי תהיינה תמיד מצרך מבוקש ביותר", textEn: "I want to reach such a high level of expertise that my advice is always in high demand", anchorType: "expertise" },
  { id: 2, text: "אני חש שאני מממש את עצמי בעבודה כאשר אני מצליח לנהל אחרים ואת עבודתם", textEn: "I feel I fulfill myself at work when I successfully manage others and their tasks", anchorType: "management" },
  { id: 3, text: "אני חולם על קריירה שתאפשר לי יד חופשית ואוטונומיה במילוי תפקידיי השונים", textEn: "I dream of a career that allows me full freedom and autonomy in performing my roles", anchorType: "autonomy" },
  { id: 4, text: "קביעות ויציבות חשובים לי יותר מאשר חופש ואוטונומיה", textEn: "Job security and stability are more important to me than freedom and autonomy", anchorType: "security" },
  { id: 5, text: "אני מחפש תמיד רעיונות שיאפשרו לי לבנות עסק משל עצמי", textEn: "I'm always looking for ideas that would allow me to build my own business", anchorType: "entrepreneurship" },
  { id: 6, text: "אחוש הצלחה בקריירה רק אם ארגיש שתרמתי משהו משמעותי לרווחת החברה", textEn: "I'll feel successful in my career only if I contribute something meaningful to society", anchorType: "service" },
  { id: 7, text: "אני חולם על קריירה שתאפשר לי לפתור בהצלחה בעיות במצבים מורכבים במיוחד", textEn: "I dream of a career that enables me to successfully solve complex and challenging problems", anchorType: "challenge" },
  { id: 8, text: "אבחר לעזוב את הארגון אם יציבו אותי לתפקיד שיצמצם את יכולתי להתמיד בפעילויות משפחה ופנאי", textEn: "I would leave the organization if I were placed in a role that limited my ability to balance family and leisure", anchorType: "lifestyle" },
  { id: 9, text: "אחוש הצלחה בקריירה רק אם יתאפשר לי לפתח את כישוריי הטכניים או המקצועיים לרמה גבוהה ביותר", textEn: "I'll feel successful in my career only if I can develop my technical or professional skills to the highest level", anchorType: "expertise" },
  { id: 10, text: "הייתי רוצה לנהל ארגון גדול ומורכב ולקבל החלטות שישפיעו על אנשים רבים", textEn: "I would like to manage a large, complex organization and make decisions that impact many people", anchorType: "management" },
  { id: 11, text: "אני חש שהגעתי למימוש עצמי בעיקר כאשר מתאפשר לי להגדיר את המטלות והמהלכים במסגרת תפקידי", textEn: "I feel self-fulfilled mainly when I can define the tasks and processes within my role", anchorType: "autonomy" },
  { id: 12, text: "אבחר לעזוב את הארגון אם אקבל תפקיד שיסכן את הסיכוי שלי לקביעות בארגון", textEn: "I would leave the organization if I received a role that jeopardized my job security", anchorType: "security" },
  { id: 13, text: "הקמת עסק משלי חשובה לי יותר מתפקיד ניהולי בכיר בארגון השייך לאחרים", textEn: "Starting my own business is more important to me than having a senior management position in someone else's organization", anchorType: "entrepreneurship" },
  { id: 14, text: "אני חש שהגעתי למימוש עצמי בקריירה כאשר מתאפשר לי לתרום מכישוריי לטובת אחרים", textEn: "I feel fulfilled in my career when I can use my skills to benefit others", anchorType: "service" },
  { id: 15, text: "אחוש הצלחה בקריירה אם אתמודד בהצלחה עם אתגרים קשים", textEn: "I'll feel successful in my career if I successfully tackle difficult challenges", anchorType: "challenge" },
  { id: 16, text: "אני חולם על קריירה שתאפשר לי לשלב את צרכיי האישיים, צרכי המשפחה וצרכי העבודה", textEn: "I dream of a career that allows me to integrate my personal, family, and work needs", anchorType: "lifestyle" },
  { id: 17, text: "מושך אותי יותר למלא תפקיד מקצועי בכיר בתחום התמחותי מאשר תפקיד מנכ\"ל", textEn: "I'm more drawn to a senior professional role in my field than to being a CEO", anchorType: "expertise" },
  { id: 18, text: "אחוש הצלחה בקריירה אם אהיה מנכ\"ל בארגון", textEn: "I'll feel successful in my career if I become a CEO of an organization", anchorType: "management" },
  { id: 19, text: "אחוש הצלחה בקריירה רק אם יהיו לי חופש ואוטונומיה מלאים", textEn: "I'll feel successful in my career only if I have complete freedom and autonomy", anchorType: "autonomy" },
  { id: 20, text: "אני מעוניין בתפקידים בארגונים שיתנו לי הרגשת יציבות וקביעות", textEn: "I prefer roles in organizations that give me a sense of stability and permanence", anchorType: "security" },
  { id: 21, text: "אני חש שהגעתי למימוש עצמי בעיקר כאשר מתאפשר לי לבנות משהו שהוא כולו תוצאה של רעיונות שלי", textEn: "I feel self-fulfilled mainly when I get to build something that is entirely my own idea", anchorType: "entrepreneurship" },
  { id: 22, text: "חשוב לי יותר להשתמש בכישוריי על מנת להפוך את העולם למקום שטוב לחיות ולעבוד בו מאשר להשיג תפקיד ניהולי בכיר", textEn: "It's more important for me to use my skills to make the world a better place to live and work in, than to achieve a senior management role", anchorType: "service" },
  { id: 23, text: "אני חש שהגעתי למימוש עצמי בעיקר כאשר אני פותר בעיות שנראו לא פתורות וכחסרות סיכוי", textEn: "I feel self-fulfilled mainly when I solve problems that seemed unsolvable or hopeless", anchorType: "challenge" },
  { id: 24, text: "אחוש הצלחה בחיי רק אם אהיה מסוגל לאזן בין צרכיי האישיים, צרכי המשפחה וצרכי הקריירה שלי", textEn: "I'll only feel successful in life if I can balance my personal, family, and career needs", anchorType: "lifestyle" },
  { id: 25, text: "אעדיף לעזוב את הארגון אם יציבו אותי לתפקיד שאינו בתחום ההתמחות המקצועי שלי", textEn: "I would leave the organization if I were assigned to a role outside my area of expertise", anchorType: "expertise" },
  { id: 26, text: "מושך אותי יותר תפקיד מנכ\"ל מאשר תפקיד ניהולי בכיר בתחום ההתמחות המקצועי שלי", textEn: "I'm more drawn to a CEO role than to a senior professional role in my specialty", anchorType: "management" },
  { id: 27, text: "האפשרות למלא תפקיד בדרכי, ללא נהלים ומגבלות חשובה לי יותר מהביטחון התעסוקתי", textEn: "The ability to do things my way, without procedures and limitations, is more important to me than job security", anchorType: "autonomy" },
  { id: 28, text: "אני חש שהגעתי למימוש עצמי בעיקר כאשר אני משיג בטחון כלכלי ותעסוקתי", textEn: "I feel self-fulfilled mainly when I achieve financial and job security", anchorType: "security" },
  { id: 29, text: "אחוש הצלחה בקריירה רק אם אצליח ליצור או לבנות משהו שהוא כולו רעיון שלי או מוצר שלי", textEn: "I'll feel successful in my career only if I manage to create or build something that is entirely my idea or product", anchorType: "entrepreneurship" },
  { id: 30, text: "אני חולם על קריירה שתהיה בה תרומה ממשית לחברה ולאנושות", textEn: "I dream of a career where I can make a real contribution to society and humanity", anchorType: "service" },
  { id: 31, text: "אני מחפש בעבודה הזדמנויות לבטא את כישוריי התחרותיים ו/או יכולתי לפתור בעיות", textEn: "At work, I look for opportunities to express my competitive skills and/or problem-solving abilities", anchorType: "challenge" },
  { id: 32, text: "חשוב לי יותר האיזון בין דרישות מחיי העבודה ודרישות מחיי האישיים לעומת הסיכוי להשיג תפקיד ניהולי בכיר", textEn: "The balance between work demands and personal life is more important to me than achieving a senior managerial role", anchorType: "lifestyle" },
  { id: 33, text: "אני חש שהגעתי למימוש עצמי בעיקר כאשר אני משתמש ביכולתי ובכישוריי המיוחדים", textEn: "I feel self-fulfilled mainly when I use my unique skills and talents", anchorType: "expertise" },
  { id: 34, text: "אבחר לעזוב את הארגון אם לא יהיה לי סיכוי להתקדם במסלול הניהול הכללי", textEn: "I would leave the organization if I saw no chance to advance within the general management track", anchorType: "management" },
  { id: 35, text: "אעדיף לעזוב את הארגון שלי אם אוצב לתפקיד שיקטין את החופש והאוטונומיה שלי", textEn: "I would prefer to leave my organization if I were assigned to a role that reduced my freedom and autonomy", anchorType: "autonomy" },
  { id: 36, text: "אני חולם על קריירה שתאפשר לי תחושת בטחון ויציבות", textEn: "I dream of a career that gives me a sense of safety and stability", anchorType: "security" },
  { id: 37, text: "אני חולם על הקמת עסק משלי", textEn: "I dream of starting my own business", anchorType: "entrepreneurship" },
  { id: 38, text: "אעדיף לעזוב את הארגון אם אוצב לתפקיד שיקטין את יכולתי להעניק שירות לאחרים", textEn: "I would leave the organization if I were placed in a role that reduced my ability to serve others", anchorType: "service" },
  { id: 39, text: "התמודדות עם פתרון בעיות קשות במיוחד חשוב לי יותר מתפקיד ניהולי בכיר", textEn: "Solving extremely difficult problems is more important to me than holding a senior management role", anchorType: "challenge" },
  { id: 40, text: "תמיד חיפשתי הזדמנויות עבודה שיקטינו את ההפרעה לחיי האישיים ולחיי המשפחה", textEn: "I've always looked for jobs that minimize the disruption to my personal and family life", anchorType: "lifestyle" },
];

// 5 שאלות בונוס לסיום
export const bonusQuestions: BonusQuestion[] = [
  { id: 41, text: "מה הדבר שהכי מניע אותך לקום בבוקר?" },
  { id: 42, text: "אם כסף לא היה שיקול – במה היית עוסק?" },
  { id: 43, text: "מה גורם לך להרגיש הצלחה אמיתית?" },
  { id: 44, text: "איזו מחמאה מקצועית הכי תשמח אותך?" },
  { id: 45, text: "מה ייתן לך תחושת סיפוק יותר מכל דבר?" },
];
