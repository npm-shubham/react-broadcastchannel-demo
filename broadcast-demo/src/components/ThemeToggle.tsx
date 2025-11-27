import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button onClick={toggleTheme}>
      Toggle Theme (current: {theme})
    </button>
  );
}
