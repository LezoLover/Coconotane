"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el menú en pantallas pequeñas
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

        {/* Navegación para pantallas grandes */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-[#495057] hover:text-[#212529] hover:underline transition-all duration-300"
          >
            Inicio
          </Link>
          <Link
            href="/contacto"
            className="text-[#495057] hover:text-[#212529] hover:underline transition-all duration-300"
          >
            Contacto
          </Link>
        </nav>

        {/* Botón de menú hamburguesa para pantallas pequeñas */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#495057] text-3xl p-2 rounded-full focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-[#ffe457] text-[#495057] py-4 px-6 space-y-4 transition-all duration-300 ease-in-out"
          style={{
            maxHeight: isMenuOpen ? '200px' : '0', // Controla la altura para la animación
            opacity: isMenuOpen ? 1 : 0, // Controla la visibilidad
            overflow: 'hidden', // Evita que el contenido se desborde
          }}
        >
          <Link
            href="/"
            className="block text-[#495057] hover:text-[#212529] hover:underline transition-all duration-300"
          >
            Inicio
          </Link>
          <Link
            href="/contacto"
            className="block text-[#495057] hover:text-[#212529] hover:underline transition-all duration-300"
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
}
