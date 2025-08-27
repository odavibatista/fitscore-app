"use server";

import { redirect } from "next/navigation";
import { createServerSide } from "../../../lib/supabase/server";
import { LogoutButton } from "../../../presentation/components/logout-button";

export default async function DashboardPage() {
  const supabase = await createServerSide()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    return error
  }

    const logout = async () => {
    const supabase = await createServerSide();  
    const { data, error } = await supabase.auth.getUser()

    if (error || !data?.user) {
      return error
    }

    await supabase.auth.signOut();
    redirect("/login");
  };

  return (
    <section className='m-24 flex flex-col'>
      <h1>Bem-vindo ao Dashboard FitScore!</h1>
      <p>Logado como: {data.user.email}</p>
      <LogoutButton />
    </section>
  )
}