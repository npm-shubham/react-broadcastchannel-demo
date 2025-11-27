import { useContext } from "react";
import { AppContext, AppProvider } from "./context/AppContext";
import ThemeToggle from "./components/ThemeToggle";
import NotificationPanel from "./components/NotificationPanel";
import LogoutButton from "./components/LogoutButton";

function AppContent() {
  const { theme } = useContext(AppContext);

  return (
    <div className={`app ${theme}`}>
      <h1>BroadcastChannel Demo</h1>
      <ThemeToggle />
      <NotificationPanel />
      <LogoutButton />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
