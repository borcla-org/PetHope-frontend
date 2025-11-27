import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      {/* Card */}
      <div className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-white/40">
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
        <form className="space-y-5">
          {/* Email */}
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-neutral-800">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white placeholder-accent"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-neutral-800">
                Contraseña
              </label>
              <button
                type="button"
                className="text-xs text-primary-600 hover:text-primary-700 font-medium"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
            <input
              id="password"
              type="password"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white placeholder-accent"
              placeholder="••••••••"
            />
          </div>

          {/* Recordarme */}
          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2 text-neutral-700">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
              />
              <span>Recordarme</span>
            </label>
          </div>

          {/* Botón Login */}
          <button
            type="submit"
            className="w-full mt-2 inline-flex items-center justify-center rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold py-2.5 transition"
          >
            Iniciar sesión
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-neutral-200" />
            <span className="text-[11px] uppercase tracking-[0.15em] text-neutral-400">
              o continúa con
            </span>
            <span className="h-px flex-1 bg-neutral-200" />
          </div>

          {/* Botón Google (ejemplo) */}
          <button
            type="button"
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white text-sm text-neutral-700 py-2.5 hover:bg-neutral-50 transition"
          >
            <span className="text-xs font-medium">Google</span>
          </button>
        </form>

        {/* Registro */}
        <p className="mt-6 text-center text-sm text-neutral-600">
          ¿No tienes cuenta?{" "}
          <a href="/register" className="font-semibold text-primary-600 hover:text-primary-700">
            Crear cuenta
          </a>
        </p>
      </div>
    </div>
  );
}
