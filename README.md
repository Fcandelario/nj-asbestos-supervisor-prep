# NJ Asbestos Supervisor Prep — v3 Cloud Sync

## New in v3
- Supabase email magic-link sign-in
- Cross-device cloud progress
- Synced scores, missed questions and topic statistics
- Exam history stored in Supabase
- Offline/unsigned-in use still works with browser localStorage
- Existing weighted 50-question mock exam and Review Mistakes mode

## Deploy
Replace the files in your existing GitHub repository with these, then:

```bash
git add .
git commit -m "Add Supabase cross-device progress sync"
git push
```

## Supabase Auth setting
In Supabase Dashboard > Authentication > URL Configuration, add your GitHub Pages URL as an allowed Redirect URL:
`https://fcandelario.github.io/nj-asbestos-supervisor-prep/`

The frontend uses only the Supabase publishable key. Never place a secret/service-role key in this repository.

## First use
1. Open the GitHub Pages site.
2. Enter your email and choose "Email me a sign-in link".
3. Open the link in the email.
4. Progress is then stored in Supabase and follows the signed-in account across devices.

Independent study aid; not affiliated with NJDOH.
