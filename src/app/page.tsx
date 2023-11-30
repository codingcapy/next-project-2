/*
*/

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="md:flex justify-between bg-slate-700 text-white">
        <div className="flex flex-col md:block md:py-5">
          <Link href={"/"} className="text-center py-5 px-5">CapySocialNext</Link>
          <Link href={"/"} className="text-center py-5 px-5">Home</Link>
        </div>
        <div className="flex flex-col md:block md:py-5">
          <Link href={"/posts"} className="text-center py-5 px-5">Posts</Link>
        </div>
        <div className="flex flex-col md:block md:py-5">
          <Link href={"/users/login"} className="text-center py-5 px-5">Login</Link>
          <Link href={"/users/signup"} className="text-center py-5 px-5">Sign Up</Link>
        </div>
      </header>
      <main className="flex-1 mx-auto">
        <h1 className="py-10 text-2xl text-slate-700 font-medium">CapySocialNext Home</h1>
      </main>
      <footer className="text-center py-5 bg-slate-700 text-white">
        <p>Copyright&copy;2023 Capytech. All rights reserved.</p>
      </footer>
    </div>
  )
}
