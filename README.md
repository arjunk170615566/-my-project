# React UI Components Assignment

Two reusable components built with **React + TypeScript + TailwindCSS**, documented in **Storybook**, with basic tests via **Vitest + Testing Library**.

## 📦 Tech
- React 18, TypeScript 5, Vite
- TailwindCSS 3
- Storybook 8 (React + Vite)
- Vitest + @testing-library/react

## 📁 Structure
```
react-ui-assignment/
├─ .storybook/
│  ├─ main.ts
│  └─ preview.ts
├─ src/
│  ├─ components/
│  │  ├─ InputField.tsx
│  │  └─ DataTable.tsx
│  ├─ stories/
│  │  ├─ InputField.stories.tsx
│  │  └─ DataTable.stories.tsx
│  ├─ __tests__/
│  │  ├─ InputField.test.tsx
│  │  └─ DataTable.test.tsx
│  ├─ setupTests.ts
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ styles.css
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
├─ vitest.config.ts
├─ tailwind.config.ts
└─ postcss.config.js
```

## 🚀 Getting Started
```bash
# 1) Install
npm install

# 2) Run the demo app
npm run dev

# 3) Run Storybook
npm run storybook

# 4) Run tests
npm test
```

## 🧩 Components

### InputField
- Variants: `outlined` | `filled` | `ghost`
- Sizes: `sm` | `md` | `lg`
- States: `disabled`, `invalid`, `loading`
- Extras: `clearable`, `passwordToggle`, `helperText`, `errorMessage`
- A11y: `aria-invalid`, `aria-busy`, `aria-describedby`

### DataTable
- Sorting per column (toggle asc → desc → none)
- Row selection (checkbox header selects all)
- Loading & Empty states
- Generic typing: `DataTable<T>`
- A11y: header sort buttons with `aria-sort`, row checkboxes with labels

## 🧪 Testing
- Unit tests cover basic rendering, interactions (change, sort, select).
- Run: `npm test` or `npm run test:watch`

## 🌐 Deploy Storybook (Chromatic)
1. Create a Chromatic account and project → get **Project Token**.
2. Set env var locally or in CI:
   - PowerShell (Windows):
     ```powershell
     $env:CHROMATIC_PROJECT_TOKEN="YOUR_TOKEN"
     npm run build-storybook
     npm run chromatic
     ```
   - macOS/Linux:
     ```bash
     export CHROMATIC_PROJECT_TOKEN=YOUR_TOKEN
     npm run build-storybook
     npm run chromatic
     ```
3. Chromatic will give you a **hosted Storybook URL** to share.

## ▲ Deploy Demo (Vercel)
1. Push this repo to GitHub.
2. Import the repo in Vercel → Framework preset **Vite**.
3. Build Command: `npm run build`  
   Output Directory: `dist`
4. Visit your live URL and share it.

## 📝 Notes / Approach
- **InputField** supports controlled & uncontrolled usage.
- **DataTable** sorts by string/number and preserves stable typing via `keyof T`.
- Responsive by default; table scrolls horizontally on small screens.
- Clean Tailwind tokens (rounded, soft shadow, subtle brand color).

## 📷 Screenshots / GIFs (optional)
- Use **ScreenToGif** (Windows) or **Kap** (macOS) to record clips.
- Save them under `screenshots/` and add them to the README.

## 📄 License
MIT


---

## 🎨 Theme Toggle
A **theme toggle button** is available in the demo.  
Clicking it switches between **Light** 🌞 and **Dark** 🌙 modes.

- Implemented using Tailwind's `darkMode: 'class'` strategy.
- Updates `document.documentElement.classList` to apply dark theme globally.
- Components automatically adapt via `dark:` classes.

