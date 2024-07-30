"use client";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import AnimatedShinyText from "../magicui/AnimatedShinyText";
import ShimmerButton from "../magicui/shimmer-button";
import PulsatingButton from "../ui/pulsating-button";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-500"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt=""
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      ></Image>
                      <AnimatedShinyText className="string" shimmerWidth={100}>
                        {link.label}
                      </AnimatedShinyText>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname; 
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-500"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt=""
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      ></Image>
                      <AnimatedShinyText className="string" shimmerWidth={100}>
                        {link.label}
                      </AnimatedShinyText>
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSwitchSessionUrl="/" />
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <PulsatingButton>
              <Link href="/sign-in">Login</Link>
            </PulsatingButton>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
