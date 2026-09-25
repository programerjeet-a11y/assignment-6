# 💪 FitLog

A modern and responsive workout library and daily training tracker built with **Next.js, React, TypeScript, and Tailwind CSS**.

FitLog helps users discover workouts, choose exercises, build a daily training plan, and track their workout progress with persistent local storage.

---

## 🌐 Live Demo

🔗 **Live Website:** `Add your Vercel deployment link here`

🔗 **GitHub Repository:** `Add your GitHub repository link here`

---

## ✨ Features

- 🏋️ Browse a collection of workouts from an external API.
- 🔎 Explore workout details including duration, calories, rating, and instructions.
- 📊 Sort workouts by duration, calories, and rating.
- ➕ Add exercises to today's workout plan.
- 💾 Save exercises for later.
- 📋 Build a daily plan with a maximum of five exercises.
- ⏱️ Track total workout duration.
- 🔥 Track total calories burned.
- ⭐ View workout ratings.
- ✅ Mark completed workouts as done.
- 🗑️ Remove exercises from the daily plan.
- 💽 Persist workout data using browser `localStorage`.
- 📱 Fully responsive design for mobile, tablet, and desktop.
- ⚡ Built with Next.js App Router for a modern web experience.

---

## 🛠️ Technologies Used

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Next.js App Router**
- **Browser localStorage**
- **External Workout API**

---

## 📁 Project Structure

```text
fitlog/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── workout/
│       └── [id]/
│           └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── WorkoutCard.tsx
│   ├── WorkoutGrid.tsx
│   └── DailyPlan.tsx
│
├── public/
│   └── images/
│
├── types/
│   └── workout.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

> Project structure may vary depending on the final implementation.

---

## 🚀 Getting Started

Follow the steps below to run FitLog locally.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to the project directory

```bash
cd fitlog
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## 📦 Available Scripts

### Development

```bash
npm run dev
```

Runs the application in development mode.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Start Production Server

```bash
npm start
```

Runs the production build locally.

### Lint

```bash
npm run lint
```

Checks the project for linting issues.

---

## 🏋️ How FitLog Works

### 1. Browse Workouts

Users can explore available workouts from the workout library.

### 2. Filter & Sort

Workouts can be sorted based on:

- Duration
- Calories
- Rating

### 3. View Workout Details

Each workout has a dedicated details page containing its specifications and instructions.

### 4. Build Today's Plan

Users can select exercises and add them to their daily workout plan.

The daily plan supports up to **five exercises**.

### 5. Track Progress

FitLog calculates and displays:

- Total exercises
- Total workout minutes
- Total calories

### 6. Save Progress

Workout plan information is stored in browser `localStorage`, allowing the data to remain available after refreshing the page.

---

## 📱 Responsive Design

FitLog is designed to work smoothly across:

- 📱 Mobile devices
- 📲 Tablets
- 💻 Laptops
- 🖥️ Desktop screens

---

## 🔐 Data Persistence

FitLog uses the browser's **localStorage** to preserve the user's workout plan.

This means users can:

- Refresh the page without losing their plan.
- Keep selected exercises saved locally.
- Maintain their workout progress during the session.

> Data is stored locally in the user's browser and is not synchronized with a server account.

---

## 🎯 Project Goal

The main goal of FitLog is to provide a simple and practical workout tracking experience where users can discover exercises, create a focused daily plan, and monitor their training statistics from one place.

---

## 📸 Screenshots

### Home / Workout Library

_Add your screenshot here._

### Workout Details

_Add your screenshot here._

### Daily Training Plan

_Add your screenshot here._

---

## 🚀 Deployment

The project can be deployed using **Vercel**.

After pushing the project to GitHub:

1. Import the repository into Vercel.
2. Configure the required environment variables if needed.
3. Deploy the application.
4. Add the deployed URL to the **Live Demo** section above.

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## 👨‍💻 Author

**Jeet Das**

Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS.

---

## 📄 License

This project is created for educational and assignment purposes.
