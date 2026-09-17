# NJ Asbestos Supervisor Prep

Independent study aid based on public NJDOH, OSHA, EPA, and New Jersey requirements. Questions are original practice items, not actual state-exam questions.

The bank currently has 156 questions. The site offers the original weighted 50-question mock exam and a 100-question practice exam, plus topic practice and mistake review. An acronym guide appears beside each question, and practice feedback includes a study note and related official guidance.

## New in v3
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
git commit -m "Add Supabase cross-device progress sync"
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
