"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaStar, FaRegStar } from "react-icons/fa";

export default function CustomerOpinions() {
  const [opinions, setOpinions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchOpinions() {
      try {
        const response = await fetch("/api/comment"); // Llamada al endpoint de la API
        if (!response.ok) {
          throw new Error("Error al obtener las opiniones");
        }
        const data = await response.json();
        setOpinions(data.products); // Almacenar los comentarios en el estado
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchOpinions();
  }, []);

  const nextOpinion = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === opinions.length - 1 ? 0 : prevIndex + 1; // Ir al siguiente comentario
    });
  };

  const prevOpinion = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? opinions.length - 1 : prevIndex - 1; // Ir al comentario anterior
    });
  };

  // Componente para mostrar estrellas según el rate
  const renderStars = (rate) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rate ? (
          <FaStar key={i} className="text-yellow-400" /> // Estrella llena
        ) : (
          <FaRegStar key={i} className="text-gray-400" /> // Estrella vacía
        )
      );
    }
    return stars;
  };

  if (loading) {
    return <p>Cargando opiniones...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mt-8">
      <h2 className="flex justify-center text-2xl text-black text-center font-bold mb-4">
        Opiniones de nuestros clientes
      </h2>

      {/* Contenedor para las opiniones */}
      <div className="flex items-center justify-center">
        <div
          className="flex-shrink-0 w-[350px] p-6 border rounded-lg shadow-md bg-white"
          key={opinions[currentIndex].id_comentario}
        >
          <h3 className="text-black font-semibold mb-2">
            {opinions[currentIndex].nombre} {opinions[currentIndex].apellido}
          </h3>
          <p className="text-black mb-4">{opinions[currentIndex].comentario}</p>
          <div className="flex">{renderStars(opinions[currentIndex].rate)}</div> {/* Mostrar las estrellas */}
        </div>
      </div>

      {/* Controles para navegar entre las opiniones usando iconos de flechas */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={prevOpinion}
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          <FaChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextOpinion}
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          <FaChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
