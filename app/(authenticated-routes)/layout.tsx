"use server"

import { redirect } from "next/navigation";
import { createServerSide } from "../../lib/supabase/server";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const supabase = await createServerSide()
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }
  return (
    <>
      {children}
    </>
  );
}