"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (isLoading) return;

    if (!user) {
      redirect("/api/auth/login");
    } else {
      fetch("/api/auth/is-admin", {
        method: "POST",
        body: JSON.stringify({ userId: user.sub }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.isAdmin) {
            redirect("/api/auth/login");
          }
        })
        .catch(() => redirect("/api/auth/login"));
    }
  }, [user, isLoading]);

  redirect("/admin/personal-info");
}
