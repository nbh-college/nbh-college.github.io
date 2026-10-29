# College Saathi

First-semester students ke liye static website: notices, notes, syllabus, assignments, timetable, class updates, help.
Koi server ya database nahi chahiye.

## Files
- `index.html`  - poori site (design + code). Ise chhedne ki zaroorat nahi.
- `data.js`     - saara content. Sirf yahi file edit karni hai.
- `sw.js`, `manifest.webmanifest`, `icon.svg` - offline chalne aur "Add to Home screen" ke liye.

## Phone pe test
Saari files ek hi folder mein rakho, phir `index.html` ko Chrome mein kholo.
(Offline/install feature sirf https hosting par chalta hai, file se kholne par nahi.)

## Free hosting (koi ek)
- GitHub Pages: repo banao, saari files upload karo, Settings > Pages > main branch.
- Netlify Drop: folder ko app.netlify.com/drop par drag karo.
Dono ka link WhatsApp group mein share kar do.

## Roz ka kaam (2 minute)
1. `data.js` kholo.
2. `notices`, `updates`, `assignments` mein naya `{ ... }` block add karo.
3. Save karke dobara upload karo. Students ko agli baar khulte hi naya content dikhega.

## Pehli baar
- `config.demo` ko `false` karo aur demo entries hata do.
- `whatsapp` aur `onlineClass` mein asli links daalo.
- `contacts` mein asli phone number daalo.
- Demo dates `d(3)` jaisi hain. Asli entries mein `'2026-11-05'` jaisi fixed date likho.
