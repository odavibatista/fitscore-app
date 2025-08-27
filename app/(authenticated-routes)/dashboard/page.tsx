"use server";

import { createServerSide } from "../../../lib/supabase/server";
import { LogoutButton } from "../../../presentation/components/logout-button";
import { Spinner } from "../../../presentation/components/spinner";

export default async function DashboardPage() {
  const supabase = await createServerSide()
  const { data: userData, error } = await supabase.auth.getUser()

  if (error || !userData?.user) {
    return error
  }
  const { data: applications } = await supabase.from("applications").select();

  // Use the spinner while loading applications
  if (!applications) {
    return <Spinner />;
  }

  return (
    <section className='m-24 flex flex-col gap-12'>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-4xl">Bem-vindo ao Dashboard do FitScore!</h1>
        <p className="text-xl">Logado como: {userData.user.email}</p>
        <LogoutButton width="200px" />
      </div>
      <div className="flex flex-col">
        <h4 className="text-2xl font-bold">Confira a atividade recente dos aplicantes:</h4>
        {
          applications && applications.length > 0 ? (
            <ul className="list-disc list-inside">
              {applications.map((app) => (
                <li className="py-2" key={app.id}>
                  {app.id} - {app.applier_name} - {app.applier_email} - Score: {app.applier_score}
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhuma aplicação encontrada. Aguarde até que nossos servidores atualizem os candidatos e seus scores.</p>
          )
        }
      </div>
    </section>
  )
}