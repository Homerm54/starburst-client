import api from "api";
import { User } from "api/auth/types";
import { useEffect, useState } from "react";

/**
 * Hook to access the authenticated user.
 * @returns The signed in user, or null if not authenticated.
 */
function useUser() {
  const [user, setUser] = useState<User | null>(null);
  // Subscribe listener funtion + return the unsub function for cleanup
  useEffect(() => api.auth.onAuthStateChange((user) => setUser(user)), []);
  return user;
}

export { useUser };
