"use server";

import { createServerSide } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
    const supabase = await createServerSide()
    const { data } = await supabase.auth.getUser()
  
    if (data?.user) {
        redirect('/dashboard')
    }
  return (
    <main className="min-h-screen flex flex-col items-center">
      <h1>Seja bem-vindo ao FitScore!</h1>
    </main>
  );
}
