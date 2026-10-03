# NJ Asbestos Supervisor Prep

Independent study aid based on public NJDOH, OSHA, EPA, and New Jersey requirements. Questions are original practice items, not actual state-exam questions.

The bank currently has 175 questions, including 44 scenario items. The site offers the original weighted 50-question mock exam and a 100-question practice exam, plus topic practice and mistake review. An acronym guide is available during practice. Every question has its own explanation, a comparison with the distractors, and an official source reference.

## Study improvements (September 2026)
- Reworked distractors and clarified medical-surveillance, roofing, flooring, and decontamination questions.
- Added 19 application scenarios, including exposure calculations and the medical-surveillance counting exception.
- Full answer review after each completed session, with all / incorrect and unanswered / flagged filters.
- Previous/next navigation, an accessible question navigator, and flags. Exam answers can be changed until submission; practice answers lock after feedback.
- Exam mode hides explanations and acronym help until submission. Unanswered exam questions count as incorrect; practice must be answered in full before completion.
- Resume unfinished sessions after leaving or reloading, preserving question order, shuffled answer order, selections, and flags. The most recent completed session can be reopened for review.
- First-attempt accuracy for unique questions in completed sessions since this update, the five most recent exam scores, and weakest topics. These are study signals, not a validated predictor of passing.
- Missed questions require two correct completed sessions at least 24 hours apart to leave review. A mistake resets the streak. Earlier practice does not earn extra spacing credit.
- Stable question IDs preserve older mistake links when wording changes. Weighted exams never repeat an item within a session.

Detailed learning history, spaced-review timing, and the saved session are stored **on this device per account**. Existing overall totals, topic totals, and missed-question IDs continue using the existing Supabase schema. No database migration is required. Guest use works when the auth CDN is unavailable, provided the site files are available; this is not a service-worker/offline-download app.

## Verification

```bash
node --test tests/study-engine.test.js
```

Optional browser checks need the `playwright` package and Chromium:

```bash
node tests/browser.cjs
```

To use an installed Chrome instead of Playwright's bundled Chromium, set `CHROME_PATH` to its executable. The browser check serves the site only on localhost, uses an isolated browser profile, blocks external requests, and tests navigation, resume, submission, results, account separation, and mobile width. It does not send emails or write to live Supabase accounts.

## Existing account features
- Supabase email magic-link sign-in
- Cross-device cloud progress
- Synced scores, missed questions and topic statistics
- Exam history stored in Supabase
- Offline/unsigned-in use still works with browser localStorage
- Existing weighted 50-question mock exam and Review Mistakes mode

## Deploy
GitHub Pages serves the repository's `main` branch at:
`https://fcandelario.github.io/nj-asbestos-supervisor-prep/`

After reviewing changes, push to `main` to publish them:

```bash
git add .
git commit -m "Improve practice questions and study sessions"
git push
```

## Supabase Auth setting
In Supabase Dashboard > Authentication > URL Configuration, use your GitHub Pages URL as an allowed Redirect URL:
`https://fcandelario.github.io/nj-asbestos-supervisor-prep/`

The frontend uses only the Supabase publishable key. Never place a secret/service-role key in this repository.

## First use
1. Open the GitHub Pages site.
2. Enter your email and choose "Email me a sign-in link".
3. Open the link in the email.
4. Progress is then stored in Supabase and follows the signed-in account across devices.

NJDOH's published supervisor outline provides topic percentages. NJDOH requires a supervisor training-course exam of at least 100 questions; the separate Pearson VUE state-exam question count was not found in its public candidate handbook. This site's practice exam lengths should not be taken as a statement of the state exam's length.
