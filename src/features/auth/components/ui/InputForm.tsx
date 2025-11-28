import React, { InputHTMLAttributes } from "react";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string; // 👈 etiqueta visible
    id: string; // 👈 necesario para vincular label con input
}

export default function InputForm({ title, id, ...props }: InputFormProps) {
    return (
        <div className="space-y-1">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-neutral-800"
            >
                {title}
            </label>

            <input
                id={id}
                {...props}
                className={`w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent-500 bg-white placeholder-black/20 text-black ${
                    props.className ?? ""
                }`}
            />
        </div>
    );
}
