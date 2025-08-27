import { login } from './actions'
export default function LoginPage() {

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
        <button className='rounded-md bg-blue-600 text-white font-bold py-2 px-4' formAction={login}>Login</button>
      </form>
    </section>
  )
}