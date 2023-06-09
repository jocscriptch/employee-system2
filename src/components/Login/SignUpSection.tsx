"use client";
import Image from "next/image";
import SocialMediaSection from "./SocialMediaSection";
import { Toaster, toast } from "sonner";
import Link from "next/link";
import { useState } from "react";

import firebaseApp from "../firebase";
import { useRouter } from "next/router";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(firebaseApp);

export const SignUpSection = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfimPassword] = useState("");
  const router = useRouter();
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match. Please try again.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
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
            return `${userName} registered user on this page`;
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
  const EqualPass = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }
  return (
    <>
      <Toaster closeButton richColors position="bottom-center" />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-40 w-40"
            src="/bus1.gif"
            alt="Logistica y Transporte"
            width={100}
            height={100}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleRegister} method="POST">
            {/*<div>
              <div className="grid grid-flow-row sm:grid-flow-col gap-3">
                <div className="sm:col-span-4 justify-center">
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="firstname"
                      name="firstname"
                      type="firstname"
                      autoComplete="firstname"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4 justify-center">
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="lastname"
                      name="lastname"
                      type="lastname"
                      autoComplete="lastname"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>*/}

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
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="cPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="cPassword"
                  name="cPassword"
                  type="password"
                  autoComplete="cPassword"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={confirmPassword}
                  onChange={(e)=> setConfimPassword(e.target.value)}
                />
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already a member?{" "}
                <Link href="/SignIn"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Sign in
                </Link>
            </p>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 bg-primary text-sm font-semibold leading-6 text-light shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                //onClick={() => toast.success("Success to sign up")}
              >
                Sign up
              </button>
            </div>
          </form>
          <SocialMediaSection />
        </div>
      </div>
    </>
  );
}
