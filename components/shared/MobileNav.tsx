"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/clerk-react";
import AnimatedShinyText from "../magicui/AnimatedShinyText";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import PulsatingButton from "../ui/pulsating-button";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSwitchSessionUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="logo"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>

            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image
                  src="assets/images/logo-text.svg"
                  alt="logo"
                  width={152}
                  height={23}
                />
                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;
                    return (
                      <li
                        key={link.route}
                        className={`header-nav_element group ${
                          isActive && "gradient-text"
                        } p-18 flex whitespace-nowrap text-dark-700`}
                      >
                        <Link
                          className="sidebar-link cursor-pointer  "
                          href={link.route}
                        >
                          <Image
                            src={link.icon}
                            alt=""
                            width={24}
                            height={24}
                          ></Image>
                          <AnimatedShinyText
                            className="string"
                            shimmerWidth={100}
                          >
                            {link.label}
                          </AnimatedShinyText>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <PulsatingButton>
            <Link href="/sign-in">Login</Link>
          </PulsatingButton>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
