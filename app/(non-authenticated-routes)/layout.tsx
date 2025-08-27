"use server";

import { redirect } from "next/navigation";
import { createServerSide } from "../../lib/supabase/server";
import Header from "@/presentation/components/header";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const supabase = await createServerSide()
    const { data } = await supabase.auth.getUser()
    if (data?.user) {
        redirect('/dashboard')
    }
  return (
    <>
    
      {children}
    </>
  );
}