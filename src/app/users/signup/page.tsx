/*
*/

"use client"

import Link from "next/link";
import { createUser } from "@/components/controller";

export default function SignupPage() {
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
                <form action={createUser} className="flex flex-col">
                    <h2 className="py-10 text-2xl text-slate-700 font-medium text-center">Sign Up</h2>
                    <div className="flex flex-col">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" required className="px-2 border rounded-lg border-slate-700 py-1" />
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" required className="px-2 border rounded-lg border-slate-700 py-1" />
                    </div>
                    <button className="rounded-xl my-5 py-2 px-2 bg-slate-700 text-white">Sign Up</button>
                    <Link href={"/users/login"} className="text-center">Login</Link>
                </form>
            </main>
            <footer className="text-center py-5 bg-slate-700 text-white">
                <p>Copyright&copy;2023 Capytech. All rights reserved.</p>
            </footer>
        </div>
    )
}
