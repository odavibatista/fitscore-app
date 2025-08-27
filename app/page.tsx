import { createClientSide } from "../lib/supabase/client";
import { redirect } from "next/navigation";

export default async function Home() {
    const supabase = await createClientSide()
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
