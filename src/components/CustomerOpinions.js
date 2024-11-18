"use client";
import { useEffect, useState } from "react";
import { db } from "../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function CustomerOpinions() {
  const [comments, setComments] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Obtener datos desde Firestore
  useEffect(() => {
    const fetchComments = async () => {
      const commentsCollection = collection(db, "/Comentarios");
      const commentSnapshot = await getDocs(commentsCollection);
      const commentList = commentSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentList);
    };

    fetchComments();
  }, []);

  // Cambiar comentario mostrado
  const nextComment = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  const prevComment = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + comments.length) % comments.length
    );
  };

  if (comments.length === 0) {
    return <p className="text-center text-gray-700">Cargando comentarios...</p>;
  }

  const currentComment = comments[currentIndex];

  return (
    <section className="text-center py-8">
      <h2 className="text-2xl text-gray-700 font-bold mb-4">Lo que dicen de nosotros...</h2>
      <div className="relative flex items-center justify-center">
        {/* Botón de flecha izquierda */}
        <button
          className="absolute left-0 text-gray-700 hover:text-blue-500"
          onClick={prevComment}
        >
          <ChevronLeftIcon className="h-8 w-8" />
        </button>

        {/* Contenedor del comentario */}
        <div
          className="w-full max-w-screen-lg p-8 bg-white border rounded-lg shadow-lg"
          style={{ minWidth: "500px", maxWidth: "600px", maxHeight: "350px" }}
        >
          <h3 className="text-xl text-gray-700 font-bold">
            {currentComment.nombre} {currentComment.apellido}
          </h3>
          <p className="text-gray-700 mt-4 text-lg">{currentComment.comentario}</p>
          {/* Mostrar estrellas según el rate */}
          <div className="flex justify-center mt-4">
            {Array(currentComment.rate)
              .fill()
              .map((_, i) => (
                <span key={i} className="text-yellow-500 text-2xl">★</span>
              ))}
            {Array(5 - currentComment.rate)
              .fill()
              .map((_, i) => (
                <span key={i + currentComment.rate} className="text-gray-300 text-2xl">★</span>
              ))}
          </div>
        </div>

        {/* Botón de flecha derecha */}
        <button
          className="absolute right-0 text-gray-700 hover:text-blue-500"
          onClick={nextComment}
        >
          <ChevronRightIcon className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
