"use client";

import { useState } from 'react';
import { LoginForm } from '../../../presentation/components/login-form'
import { login } from './actions'
import { createServerSide } from '../../../lib/supabase/server';
import { useRouter } from 'next/navigation';
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createServerSide();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await (await supabase).auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      // Update this route to redirect to an authenticated route. The user already has an active session.
      router.push("/dashboard");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='m-24 flex flex-col'>
      <span className='text-center mb-8'>
        <h1 className='text-2xl font-bold uppercase text-blue-800'>Bem-vindo ao DashBoard FitScore!</h1>
        <p>Por favor, faça login para acessar as métricas.</p>
      </span>
      <form className='flex flex-col m-auto p-32 space-y-4 bg-slate-100 rounded-md shadow-md'>
        <label htmlFor="email" className='font-bold text-blue-800'>Email:</label>
        <input id="email" name="email" type="email" className='border-2 border-solid slate-700 rounded-md py-1 px-1 text-md' required />
        <label htmlFor="password" className='font-bold text-blue-800'>Senha:</label>
        <input id="password" name="password" type="password" className='border-2 border-solid slate-700 rounded-md py-1 px-1' required />
        <button className='bg-blue-600 text-white font-bold py-2 px-4 rounded-md' formAction={login}>Login</button>
      </form>
    </section>
  )
}