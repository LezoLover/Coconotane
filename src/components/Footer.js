"use client";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#ffeb85] text-white py-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex gap-4 mb-2">
          <a
            href="https://fushimi-kyoto.mypl.net/shop/00000365950/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <Image src="/icons/web.svg" alt="Sitio web" width={24} height={24} />
          </a>
          <a
            href="https://www.instagram.com/coconotane/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
          </a>
          <a
            href="https://www.youtube.com/@coconotane/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <Image src="/icons/youtube.svg" alt="Youtube" width={24} height={24} />
          </a>
        </div>
        <p className="text-sm text-gray-600">© 2024 Coconotane. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
