import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function LogoutButton() {
  const { isLoggedIn, logout } = useContext(AppContext);

  if (!isLoggedIn) {
    return <h2>You are logged out ❌</h2>;
  }

  return (
    <button style={{ marginTop: 20 }} onClick={logout}>
      Logout
    </button>
  );
}
