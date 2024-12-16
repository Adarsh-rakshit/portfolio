"use client"
import Link from "next/link"
import { useState } from "react";
import Image from "next/image";
import Navlink from "./navlink";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
      {/* links */}
      <div className="hidden md:flex gap-5 w-1/3">
        {links.map(link => (
          <Navlink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex justify-center xl:w-1/3">
        <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
          <span className="text-white mr-1">Adarshrakshit</span>
          <span className="w-8 h-8 rounded bg-white text-black flex items-center justify-center">.pro</span>
        </Link>
      </div>
      {/* social */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="https://github.com/adarsh-rakshit">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://linkedin.com/in/adarshrakshit007">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://twitter.com/ar7_code">
          <Image src="/twitter.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* 3 line menu */}
      <div className="md:hidden">
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => setOpen((prev) => !prev)}>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {open && (
          <div className="absolute top-0 left-0 w-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>

  )
}

export default Navbar