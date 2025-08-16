import Demo from "./pages/Demo";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark", !dark);
  };
  <script type="module" src="/src/main.tsx"></script>

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* Header with Theme Toggle */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          UI Components Demo
        </h1>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md hover:scale-105 hover:shadow-lg transition"
        >
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      {/* Main content */}
      <main className="p-6 max-w-6xl mx-auto">
        <Demo />
      </main>
    </div>
  );
}

export default App;
