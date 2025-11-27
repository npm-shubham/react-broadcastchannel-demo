# 📡 BroadcastChannel Demo

### **Sync React State Across Browser Tabs — Live Demo Project**

This project demonstrates how to use the **BroadcastChannel API** in a React application to synchronize UI state across multiple browser tabs.

Open the app in **two or more tabs**, and watch how actions in one tab instantly reflect in the others — no backend, no localStorage hacks, no polling.
Just pure browser magic. ✨

---

## 🚀 Features Demonstrated

### **1. 🌙 Theme Sync (Light/Dark)**

Switch the theme in one tab → all tabs update instantly.

### **2. 🔔 Notification Counter Sync**

Click "Add Notification" in one tab → the counter updates everywhere.

### **3. 🔐 Logout Sync**

Log out in one tab → all other tabs log out too.

### **4. 🧩 Reusable `useBroadcast` Hook**

A clean abstraction for cross-tab communication using the BroadcastChannel API.

---

## 🧠 Why BroadcastChannel?

The BroadcastChannel API is a native browser feature that lets different tabs, windows, or iframes of the *same origin* communicate in real-time.

* No backend
* No complex state machines
* No Redux middleware
* No localStorage event hacks

**Perfect for 🔐 session sync, 🌙 theme syncing, notifications, cross-tab UI updates, and more.**

---

## 📁 Project Structure

```
src/
  ├── App.tsx
  ├── index.css
  ├── hooks/
  │     └── useBroadcast.ts
  ├── context/
  │     └── AppContext.tsx
  └── components/
        ├── ThemeToggle.tsx
        ├── NotificationPanel.tsx
        └── LogoutButton.tsx
```

---

## 🛠 Technologies Used

* **React 19 (Compiler Enabled)**
* **TypeScript**
* **Vite**
* **BroadcastChannel API**
* **GitHub Codespaces** (optional, recommended)

---

## 🧰 Starting the Project

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Then open the URL shown in terminal.

---

## 🧪 How to See the Cross-Tab Sync in Action

1. Run the app with `npm run dev`
2. Open the URL in **two tabs**
3. Try the following:

   * Toggle theme → both tabs update
   * Add notification → counter syncs
   * Logout → both tabs logout instantly

This gives the perfect *“aha!”* moment for understanding cross-tab communication.

---

## 🧱 Core Implementation Details

### **🔧 1. The `useBroadcast` Hook**

A reusable hook that opens a channel, listens for messages, and exposes a `sendMessage` function.

```ts
const { sendMessage } = useBroadcast<AppMessage>(
  "broadcast-demo",
  onMessage
);
```

---

### **🧩 2. Centralized State in AppContext**

State updates locally + broadcast messages to all tabs.

Example:

```ts
const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  sendMessage({ type: "THEME", value: newTheme });
};
```

Every tab receives the message and updates its state.

---

### **🎨 3. UI Components**

Simple components that consume the context:

* `<ThemeToggle />`
* `<NotificationPanel />`
* `<LogoutButton />`

These reflect changes happening in *any* tab.

---

## 🧪 Advanced Use Cases

This same pattern can scale to:

* Sharing authentication session state
* Propagating language changes (i18n)
* Syncing global notifications
* Preventing duplicate operations across tabs
* Coordinating API calls across tabs
* Cross-tab form locking

---

## 🌍 Browser Support

| Browser       | Supported         |
| ------------- | ----------------- |
| Chrome        | ✅                 |
| Edge          | ✅                 |
| Firefox       | ✅                 |
| Safari        | ❌ *Not supported* |
| Mobile Safari | ❌                 |

Fallback options: `localStorage` events, WebSocket rooms, SharedWorker.

---

## 📸 Preview (Add Screenshots)

You can add 2–3 screenshots or GIFs of the demo running in two tabs for your blog/tutorial.

---

## ⭐ If You’re Writing a Blog / Tutorial

This repo pairs perfectly with:

* A step-by-step explanation of BroadcastChannel
* Visual examples
* Code breakdowns
* Multi-tab demo GIFs

---

## 🧹 Clean & Safe Shutdown

Always close BroadcastChannel instances:

```ts
return () => channel.close();
```

Prevents memory leaks and zombie listeners.

---

## 🎯 Final Notes

This mini-project is intentionally simple so readers can understand the concept clearly.
From here, you can extend the architecture into any real-world application that needs **shared state across tabs**.
