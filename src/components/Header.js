"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#ffe457] py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo y título */}
        <div className="flex items-center space-x-4">
          <img
            src="/images/coconotane_logo.jpg"
            alt="Coconotane Logo"
            className="w-16 h-16 rounded-full object-cover"
          />
          <h1
            className="text-2xl font-extrabold"
            style={{
              color: "#2d2d2d",
              fontFamily: "sans-serif",
            }}
          >
            Coconotane
          </h1>
        </div>

        {/* Navegación */}
        <nav>
          <Link
            href="/"
            className="mx-2 text-[#495057] hover:text-[#212529] hover:underline transition-all duration-300"
          >
            Inicio
          </Link>
          <Link
            href="/contacto"
            className="mx-2 text-[#495057] hover:text-[#212529] hover:underline transition-all duration-300"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
