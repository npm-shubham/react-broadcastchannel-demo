import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function NotificationPanel() {
  const { notifications, addNotification } = useContext(AppContext);

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Notifications: {notifications}</h3>
      <button onClick={addNotification}>Add Notification</button>
    </div>
  );
}
