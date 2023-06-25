"use client";
import Image from "next/image";
import SocialMediaSection from "./SocialMediaSection";
import { Toaster, toast } from "sonner";
import Link from "next/link";
import { useState } from "react";
import firebaseApp from "../firebase";
import { useRouter } from "next/router";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(firebaseApp);

export const SignInSection = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        const promise = () =>
          new Promise((resolve) => setTimeout(resolve, 2000));

        toast.promise(promise, {
          loading: "Loading...",
          success: () => {
            const userName = user ? user.email : "User";
            return `${userName} displaying home page`;
          },
          error: "Error",
        });

        setTimeout(() => {
          router.push("/empleado");
        }, 4000); // Redirigir después de 4 segundos
      })
      .catch((error) => {
        toast.error("Invalid access. Please try again.");
        // ..
      });
  };
  return (
    <>
      <Toaster closeButton richColors position="top-center" />
      <div
        id="SignIn"
        className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-40 w-40"
            src="/bus1.gif"
            alt="Logistica y Transporte"
            width={100}
            height={100}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Join with us
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    href="/ForgotPass"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 bg-primary text-sm font-semibold leading-6 text-light shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                /*onClick={() => {
                  toast.success("Success to change");
                  setTimeout(() => {
                    window.location.href = "/empleado";
                  }, 1500);
                }}*/
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/SignUp"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign up here!
            </Link>
          </p>
          <SocialMediaSection />
        </div>
      </div>
    </>
  );
};
