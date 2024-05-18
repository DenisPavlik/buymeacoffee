"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faUser } from "@fortawesome/free-solid-svg-icons";
import { signIn } from "next-auth/react";
import { Session } from "next-auth";
import { parseFullName } from "parse-full-name";
import Image from "next/image";

export default function Header({ session }: { session: Session | null }) {
  const userAvatar = session?.user?.image as string;
  const name = session?.user?.name || "";
  const { first } = parseFullName(name);
  return (
    <>
      <header className="bg-white">
        <div className="max-w-2xl mx-auto p-4 flex items-center justify-between">
          <Link href={"/"} className="inline-flex items-center gap-1">
            <FontAwesomeIcon icon={faMugHot} className="h-8" />
            <span className="mt-2">Buy me a coffee</span>
          </Link>
          <nav className="flex items-center gap-6 mt-2">
            <Link href={"/about"}>About</Link>
            <Link href={"/faq"}>FAQ</Link>
            <Link href={"/contact"}>Contact</Link>
            <div className="flex gap-4 ml-4">
              {session && (
                <div className="">
                  <Link
                    href={"/profile"}
                    className="bg-yellow-300 rounded-full flex items-center gap-2 p-1 pr-4"
                  >
                    {userAvatar ? (
                      <Image
                        src={userAvatar}
                        alt="avatar"
                        width={36}
                        height={36}
                        className="rounded-full"
                      />
                    ) : (
                      <FontAwesomeIcon icon={faUser} />
                    )}
                    {first}
                  </Link>
                </div>
              )}
              {!session && (
                <>
                  <button
                    className="border-2 rounded-full px-4 py-2"
                    onClick={() => signIn("google")}
                  >
                    Login
                  </button>
                  <button className="bg-yellow-300 rounded-full px-4 py-2">
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
