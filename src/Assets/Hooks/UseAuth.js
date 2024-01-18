import { useState, useEffect } from "react";

export const useAuth = () => {
  const [auth, setAuth] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [token]);

  return { auth };
};
