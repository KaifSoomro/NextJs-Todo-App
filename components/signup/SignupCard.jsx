"use client";

import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  LogIn,
  Mail,
  UserRound,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const SignupCard = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/70 bg-white/85 shadow-[0_24px_80px_-24px_rgba(8,145,178,0.22)] backdrop-blur-xl">
      <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-sky-200/30 blur-3xl" />

      <CardHeader className="relative space-y-4 px-7 pb-5 pt-8 sm:px-9 sm:pt-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-900 shadow-lg shadow-cyan-500/25 text-white">
          <LogIn size={26} strokeWidth={2.2} />
        </div>

        <div className="space-y-2">

          <CardTitle className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Create your account
          </CardTitle>

        </div>
      </CardHeader>

      <CardContent className="relative px-7 sm:px-9">
        <form className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="text-sm font-medium text-slate-700"
            >
              Username
            </label>

            <div className="group relative">
              <UserRound
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-cyan-600"
              />
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Choose a username"
                autoComplete="username"
                required
                className="h-12 rounded-xl border-slate-200 bg-white/80 pl-11 shadow-sm transition-all placeholder:text-slate-400 focus-visible:border-cyan-500 focus-visible:ring-4 focus-visible:ring-cyan-500/10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="fullName"
              className="text-sm font-medium text-slate-700"
            >
              Full name
            </label>

            <div className="group relative">
              <UserRound
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-cyan-600"
              />
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
                className="h-12 rounded-xl border-slate-200 bg-white/80 pl-11 shadow-sm transition-all placeholder:text-slate-400 focus-visible:border-cyan-500 focus-visible:ring-4 focus-visible:ring-cyan-500/10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email address
            </label>

            <div className="group relative">
              <Mail
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-cyan-600"
              />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="h-12 rounded-xl border-slate-200 bg-white/80 pl-11 shadow-sm transition-all placeholder:text-slate-400 focus-visible:border-cyan-500 focus-visible:ring-4 focus-visible:ring-cyan-500/10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <div className="group relative">
              <LockKeyhole
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-cyan-600"
              />

              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                autoComplete="new-password"
                minLength={8}
                required
                className="h-12 rounded-xl border-slate-200 bg-white/80 pl-11 pr-12 shadow-sm transition-all placeholder:text-slate-400 focus-visible:border-cyan-500 focus-visible:ring-4 focus-visible:ring-cyan-500/10"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <p className="text-xs text-slate-500">
              Use at least 8 characters for your password.
            </p>
          </div>

          <Button
            type="submit"
            className="group h-12 w-full rounded-xl bg-neutral-900 font-semibold text-white shadow-lg shadow-cyan-600/20 transition-all"
          >
            Create account
            <ArrowRight
              size={18}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </Button>
        </form>
      </CardContent>

      <CardFooter className="relative justify-center border-t border-slate-100 px-7 py-5 sm:px-9">
        <p className="text-sm text-slate-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-semibold text-cyan-700 transition-colors hover:text-blue-700"
          >
            Sign in
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};
