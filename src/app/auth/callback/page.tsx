"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    // Usually the session is already set by the time this runs
    const run = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) router.replace("/dashboard");
      else router.replace("/"); // fallback
    };
    run();
  }, [router]);
  return <div className="p-6">Signing you in...</div>;
}
