"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import InputForm from "./ui/InputForm";

export default function SignupForm() {
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log("Enviando registro...");
    }

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Nombre */}
            <InputForm
                id="name"
                type="text"
                title="Nombre completo"
                placeholder="Juan Pérez"
            />

            {/* Email */}
            <InputForm
                id="email"
                type="email"
                title="E-mail"
                placeholder="tuemail@gmail.com"
            />

            {/* Password */}
            <InputForm
                id="password"
                type="password"
                title="Contraseña"
                placeholder="••••••••"
            />

            {/* Confirm Password */}
            <InputForm
                id="confirm-password"
                type="password"
                title="Confirmar contraseña"
                placeholder="••••••••"
            />

            {/* Términos */}
            <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center gap-2 text-neutral-700">
                    <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span>Acepto los términos y condiciones</span>
                </label>
            </div>

            {/* Botón Registro */}
            <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center rounded-lg bg-accent hover:bg-secundary/80 hover:shadow-xl text-white text-sm font-semibold py-2.5 transition duration-300 hover:scale-105"
            >
                Crear cuenta
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
                <span className="h-px flex-1 bg-neutral-200" />
                <span className="text-[11px] uppercase tracking-[0.15em] text-neutral-400">
                    o regístrate con
                </span>
                <span className="h-px flex-1 bg-neutral-200" />
            </div>

            {/* Botón Google */}
            <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white text-sm text-neutral-700 py-2.5 hover:bg-neutral-50 transition"
            >
                <FcGoogle className="text-2xl"></FcGoogle>
            </button>
        </form>
    );
}
