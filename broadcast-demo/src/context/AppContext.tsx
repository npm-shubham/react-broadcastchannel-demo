import { createContext, useCallback, useState } from "react";
import { useBroadcast } from "../hooks/useBroadcast";

export type AppMessage =
  | { type: "THEME"; value: "light" | "dark" }
  | { type: "NOTIFY" }
  | { type: "LOGOUT" };

interface AppContextType {
  theme: "light" | "dark";
  notifications: number;
  isLoggedIn: boolean;
  toggleTheme: () => void;
  addNotification: () => void;
  logout: () => void;
}

export const AppContext = createContext<AppContextType>({
  theme: "light",
  notifications: 0,
  isLoggedIn: true,
  toggleTheme: () => {},
  addNotification: () => {},
  logout: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [notifications, setNotifications] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const onMessage = useCallback((msg: AppMessage) => {
    switch (msg.type) {
      case "THEME":
        setTheme(msg.value);
        break;

      case "NOTIFY":
        setNotifications((prev) => prev + 1);
        break;

      case "LOGOUT":
        setIsLoggedIn(false);
        break;
    }
  }, []);

  const { sendMessage } = useBroadcast<AppMessage>("broadcast-demo", onMessage);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    sendMessage({ type: "THEME", value: newTheme });
  };

  const addNotification = () => {
    setNotifications((n) => n + 1);
    sendMessage({ type: "NOTIFY" });
  };

  const logout = () => {
    setIsLoggedIn(false);
    sendMessage({ type: "LOGOUT" });
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        notifications,
        isLoggedIn,
        toggleTheme,
        addNotification,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
