"use client"

import { redirect } from "next/navigation";
import { createClientSide } from "../../lib/supabase/client";

export function LogoutButton() {

  const logout = async () => {
    const supabase = createClientSide();  
    const { data, error } = await supabase.auth.getUser()

    if (error || !data?.user) {
      return error
    }

    await supabase.auth.signOut();
    redirect("/login");
  };

  return (
    <button className='bg-blue-600 text-white font-bold py-2 px-4 rounded-md' onClick={logout}>Logout</button>
  )

}
