import React from "react";
import Image from "next/image";
import LoginForm from "@/features/auth/components/LoginForm";


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
          <h1 className="text-2xl font-bold text-neutral-900">Bienvenido a PetHope</h1>
          <p className="text-sm text-neutral-500 text-center">
            Inicia sesión para continuar
          </p>
        </div>

        {/* Formulario */}
        <LoginForm></LoginForm>

        {/* Registro */}
        <p className="mt-6 text-center text-sm text-black hover:text-blue-600 hover:underline">
          ¿No tienes cuenta?{" "}
          <a href="/signup" className="font-semibold text-primary-600 hover:text-primary-700">
            Crear cuenta
          </a>
        </p>
      </div>
    </div>
  );
}
