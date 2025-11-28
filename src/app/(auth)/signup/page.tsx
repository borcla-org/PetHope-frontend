import React from "react";
import Image from "next/image";
import SignupForm from "@/features/auth/components/SignupForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      {/* Card */}
      <div className="backdrop-blur-md rounded-2xl px-20 py-8 border border-white/40">
        {/* Logo + título */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="w-20 h-20 relative mb-2">
            <Image
              src="/logo/pethope-icon.png"
              alt="PetHope logo"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-neutral-900">
            Únete a PetHope
          </h1>
          <p className="text-sm text-neutral-500 text-center">
            Crea tu cuenta para comenzar
          </p>
        </div>

        {/* Formulario */}
        <SignupForm />

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-black hover:text-blue-600 hover:underline">
          ¿Ya tienes cuenta?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary-600 hover:text-primary-700"
          >
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
