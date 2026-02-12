import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { validateEmail, validatePassword } from "../utils/validators";

type User = { id: string; name: string; email: string };

type AuthContextValue = {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  signUp: (name: string, email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const KEY = "edulense.user.v1";

async function saveUser(user: User | null) {
  if (!user) {
    await SecureStore.deleteItemAsync(KEY);
    return;
  }
  await SecureStore.setItemAsync(KEY, JSON.stringify(user));
}

async function loadUser(): Promise<User | null> {
  const raw = await SecureStore.getItemAsync(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as User;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const u = await loadUser();
      setUser(u);
      setIsLoading(false);
    })();
  }, []);

  const value = useMemo<AuthContextValue>(() => ({
    user,
    isLoading,
    signIn: async (email, password) => {
      if (!validateEmail(email)) return { ok: false, error: "Enter a valid email." };
      if (!validatePassword(password)) return { ok: false, error: "Password must be 8+ characters with a number." };
      // Demo auth: accept any valid credentials
      const demoUser: User = { id: "u1", name: "Student", email };
      setUser(demoUser);
      await saveUser(demoUser);
      return { ok: true };
    },
    signUp: async (name, email, password) => {
      if (!name.trim()) return { ok: false, error: "Name is required." };
      if (!validateEmail(email)) return { ok: false, error: "Enter a valid email." };
      if (!validatePassword(password)) return { ok: false, error: "Password must be 8+ characters with a number." };
      const demoUser: User = { id: "u1", name: name.trim(), email };
      setUser(demoUser);
      await saveUser(demoUser);
      return { ok: true };
    },
    signOut: async () => {
      setUser(null);
      await saveUser(null);
    },
  }), [user, isLoading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
