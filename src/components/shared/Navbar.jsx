"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const session = useSession();
  console.log(session);
  return (
    <div className="flex justify-around items-center bg-blue-500 text-white py-[10px] ">
      <nav className="flex gap-12">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="flex items-center">
        <div className="flex itmes-center gap-[15px] pr-[20px]">
          {session?.status === "authenticated" ? <>
            <Image
            src={session?.data?.user?.image}
            alt={session?.data?.user?.name}
            width={50}
            height={50}
            className="w-[50px] h-[50px] rounded-full"
          />

          <div>
            <h3 className="text-xl font-bold">{session?.data?.user?.name}</h3>
            <p className="text-lg font-medium text-center">
              {session?.data?.user?.type}
            </p>
          </div>
          </> : null}

          
        </div>
        {session?.status === "authenticated" ? (
          <button
            className="bg-orange-500 text-white py-1 px-4 rounded-lg "
            onClick={() => signOut()}
          >
            LogOut
          </button>
        ) : (
          <>
            <button className="bg-orange-500 text-white py-1 px-4 rounded-lg ">
            <Link href="/api/auth/signin">Login</Link>
          </button>
          <button className="ml-4 bg-pink-500 text-white py-1 px-4 rounded-lg ">
            <Link href="/api/auth/signup">Sign Up</Link>
          </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
