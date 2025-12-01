"use client";
import React from "react";
import LayoutProps from "@/shared/types/layout-props";
import Image from "next/image";
import Footer from "@/shared/components/ui/Footer";
import { Geist } from "next/font/google";
import { usePathname } from "next/navigation";

const geist = Geist({
    subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps) {
    const pathname = usePathname();
    const isSignup = pathname.includes("/signup");

    return (
        <>
            <div className="bg-primary flex h-screen items-center justify-center">
                {/* Left Panel (Image) - Slides to right on signup */}
                <div
                    className={`w-1/2 flex justify-center transition-transform duration-500 ease-in-out h-full ${isSignup ? "translate-x-full" : "translate-x-0"
                    }`}
                >
                    <Image
                        className="absolute -bottom-16"
                        src={"/animals/pets.webp"}
                        alt="dog and cat"
                        width={700}
                        height={700}
                    ></Image>
                    <div className="flex flex-col relative z-10 self-center">
                        <Image
                            src="/logo/pethope-logo-large.png"
                            alt="logo"
                            width={500}
                            height={500}
                        ></Image>
                        <p
                            className={`text-secundary text-shadow-2xs text-xl ${geist.className}`}
                        >
                            Conéctate. Mira. Ayuda.
                        </p>
                    </div>
                </div>

                {/* Separator - Stays in center */}
                <span className="bg-black/30 w-px h-1/2 block absolute z-0"></span>

                {/* Right Panel (Form) - Slides to left on signup */}
                <div
                    className={`w-1/2 transition-transform duration-500 ease-in-out ${isSignup ? "-translate-x-full" : "translate-x-0"
                        }`}
                >
                    {children}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
