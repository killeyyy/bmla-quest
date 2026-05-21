# BMLA Quest Handoff

## Current Mission

Hassan Sardar Shah is preparing for the MTS 212 Business Mathematics and Linear Algebra final at IBA Karachi.

- Exam: Monday, May 25, 2026, 10:00 AM to 1:00 PM
- Venue: MTC-19, Tabba Hall 8, Main Campus
- Format: solve 6 of 7 long-form questions, 4 marks each, 24 total
- Weight: 54% of course grade
- Instructor: Hafiza Rumlah Amer
- Study tone: calm, disciplined, practical, Sabit Qadam

Until the exam is over, prioritize BMLA study utility over engineering perfection.

## Project Rules

- Static site only: vanilla HTML, CSS, and JavaScript.
- No React, no npm build, no framework migration before the exam.
- `BMLA_Quest.html` and `BMLA_Quest_data.js` must stay co-located.
- Keep `localStorage` key as `bmla_quest_v2`.
- Existing app aesthetic is light gamified; do not switch the BMLA app to dark mode before the exam.
- Make all new UI mobile-friendly.
- Use MathJax syntax: `$...$` inline and `$$...$$` display.

## File Map

- `BMLA_Quest.html`: app shell, tabs, render functions, localStorage state, PWA registration.
- `BMLA_Quest_data.js`: content arrays: topics, lectures, final index, tutorials, past papers, flashcards, quizzes, mock questions, badges, levels.
- `widgets/matrix.html`: standalone matrix calculator for 2x2 and 3x3 matrices.
- `manifest.webmanifest`, `sw.js`, `icon.svg`: lightweight installable/PWA support.
- `FINALS_SYLLABUS.md`, `BMLA_Tracker.md`: printable/reference study trackers.

## v6 Additions

- Final Syllabus + Book Index in the Syllabus tab.
- `FINAL_INDEX` data maps official final scope to Lay/Budnick sections, pages, lectures, priorities, class files, and progress.
- `Past Papers` tab with typed Spring 2026 midterm questions and concise solution steps.
- Added `BMLA Final Spring 2024` to `Past Papers`: 9 exam questions from `C:\Users\Hassan Shah\Desktop\BMLA\BMLA_2024_Final_Paper_booklet1 (1).pdf`, with solved steps and final answers.
- Matrix calculator at `/widgets/matrix.html` with:
  - RREF
  - determinant
  - inverse when invertible
  - real eigenvalues
- PWA support for app-like mobile use on Vercel.

## Pending Paper Import Phases

1. Phase 2: import `Assignment_4.pdf` and `Assignment_3.pdf` from `C:\Users\Hassan Shah\Desktop\BMLA\Assignments\`.
2. Phase 3: import `Assisgnment_1.pdf` and `Assisgnment_2.pdf` from the same folder.
3. Keep each imported item as Past Paper-style collapsible cards with full question, solution steps, and final answer.

## Verification Commands

Run from repo root:

```powershell
node --check BMLA_Quest_data.js
node --check sw.js
```

Check inline scripts:

```powershell
@'
const fs = require('fs');
for (const file of ['BMLA_Quest.html', 'widgets/matrix.html']) {
  const html = fs.readFileSync(file, 'utf8');
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter(m => !/\bsrc\s*=/.test(m[1]) && !/type\s*=\s*["']application\/ld\+json/i.test(m[1]));
  scripts.forEach((m, i) => new Function(m[2]));
  console.log(`${file}: checked ${scripts.length} inline script block(s)`);
}
'@ | node -
```

Local smoke test:

```powershell
python -m http.server 4173
```

Open:

- `http://localhost:4173/BMLA_Quest.html`
- `http://localhost:4173/widgets/matrix.html`

## Deployment

GitHub repo: `https://github.com/killeyyy/bmla-quest`

Vercel auto-deploys from `main`:

- Live app: `https://bmla-quest.vercel.app/BMLA_Quest.html`
- Vercel project: `https://vercel.com/hsskiller-2439s-projects/bmla-quest`

Commit style:

- `v6 - short description`
- or `fix: short description`

## Claude Takeover Prompt

Copy-paste this into Claude if needed:

```text
You are continuing BMLA Quest, Hassan Sardar Shah's static study app for the MTS 212/BMLA final at IBA Karachi on May 25, 2026.

Read CLAUDE_HANDOFF.md, BMLA_Quest.html, BMLA_Quest_data.js, FINALS_SYLLABUS.md, and BMLA_Tracker.md first.

Hard constraints:
- Vanilla HTML/JS only.
- No React, no build step, no npm.
- Keep BMLA_Quest.html and BMLA_Quest_data.js co-located.
- Keep localStorage key bmla_quest_v2.
- Do not switch the BMLA app to dark mode before the exam.
- Make changes mobile-friendly.
- Run syntax checks before reporting done.

Act like an executor, not a tutor. Make the smallest safe change that improves studying. Explain what changed, files touched, how to test, and any risks.
```

## Next Useful Work

1. Add swipe gestures and arrow-key navigation to flashcards.
2. Add topic mastery percentages to Stats.
3. Add a daily motivation overlay after the exam-critical features are stable.
4. Post-exam: consider a Next.js or Vite rebuild only if Hassan wants AI-backed tasks, accounts, cloud sync, or server-side features.
