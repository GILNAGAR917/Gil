# Gil — AI Web Studio

תבנית עבודה בענן לבניית אתרים עם ChatGPT / Codex, Figma, Linear ו-Playwright.

## שימוש
פתחו את המאגר הזה כפרויקט ב-Codex ובקשו לבנות אתר. קובץ `AGENTS.md` והסקילים תחת `.agents/skills/` מתארים כיצד לעבוד, איך לעצב, ואילו בדיקות להריץ. ההוראות חלות על המאגר הזה או על פרויקט חדש שאליו מעתיקים אותן, ולא אוטומטית על כל הצ'אטים או כל המאגרים.

## פיתוח ובדיקות בענן
האתר לדוגמה הוא אתר סטטי ללא שרת חיצוני. בדיקות Playwright רצות דרך GitHub Actions כאשר מבוצע push או נפתחת בקשת שינוי למאגר.
- `npm install`
- `npx playwright install chromium`
- `npm run test:e2e`

אין צורך להריץ פקודות על המחשב הפרטי אם עובדים ב-Codex Cloud או משתמשים בבדיקות GitHub Actions. יש לבדוק את תוצאות ההרצה לפני שטוענים שהאתר נבדק.

## קישורים
- [AGENTS.md](AGENTS.md) — הוראות עבודה ל-Codex
- [סקיל עיצוב](.agents/skills/tasteful-web/SKILL.md)
- [סקיל ליטוש ממשק](.agents/skills/apple-polish/SKILL.md)
- [סקיל בקרת איכות](.agents/skills/browser-quality/SKILL.md)
- [מקורות הסקילים המקוריים](docs/UPSTREAM-SKILLS.md)

### חיבורים חיצוניים
Figma לעיצובים, Linear למעקב משימות, GitHub לקוד. החיבור של חשבונות אלה ל-ChatGPT לא מבטיח שהם יופעלו אוטומטית בכל משימה; מפעילים אותם כשנדרשת פעולתם.
