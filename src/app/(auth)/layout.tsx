import React from "react";
import LayoutProps from "@/shared/types/layout-props";
import Image from "next/image";
import Footer from "@/shared/components/ui/Footer";
import { Geist } from "next/font/google";

const geist = Geist({
    subsets: ["latin"],
});

export default function layout({ children }: LayoutProps) {
    return (
        <>
            <div className="bg-primary flex h-screen items-center justify-center">
                <Image
                    className="absolute -bottom-1"
                    src={"/animals/dog-cat.webp"}
                    alt="dog and cat"
                    width={600}
                    height={600}
                ></Image>
                <div className="w-1/2">
                <div className="flex flex-col items-center">
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
                <span className="bg-black/30 w-px h-1/2 block "></span>
                <div className="w-1/2">{children}</div>
            </div>
            <Footer></Footer>
        </>
    );
}
