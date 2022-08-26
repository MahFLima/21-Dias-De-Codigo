import { FacebookLogo, GithubLogo, GoogleLogo } from "phosphor-react";

export function Login(){
  return(
    <main className="flex flex-col max-w-lg w-full py-4 rounded">
      <strong className="text-center text-4xl mb-10">SIGN IN</strong>
      <form className="flex flex-col px-5 md:px-10 gap-7">
        <div className="flex flex-col gap-3">
          <label className="font-medium text-lg">Username:</label>
          <input className="px-6 py-3 w-full rounded-2xl" type="text" placeholder="username"/>
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-medium text-lg">Password:</label>
          <input className="px-6 py-3 w-full rounded-2xl" type="password" placeholder="password"/>
        </div>
        <div className="flex justify-between">
          <a href="#">Forgot password?</a>
          <div className="flex gap-2">
            <input type="checkbox"/>
            <label>Remember me?</label>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-black py-2 w-52 rounded hover:opacity-70">Login</button>
        </div>
      </form>
      <div className="flex items-center gap-4 mt-4 px-5 md:px-10">
        <span className="w-full h-[1px] bg-white"></span>
        <p className="flex-none text-lg">or Sign In With</p>
        <span className="w-full h-[1px] bg-white"></span>
      </div>
      <div className="flex justify-center py-6 gap-4">
        <a href="#"><GoogleLogo size={32} /></a>
        <a href="#"><FacebookLogo size={32} /></a>
        <a href="#"><GithubLogo size={32} /></a>
      </div>
    </main>
  )
}