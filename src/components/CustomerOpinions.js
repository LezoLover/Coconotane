"use client";
import { useEffect, useState } from "react";
import { db } from "../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

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
      <h2 className="text-2xl text-gray-700 font-bold mb-4">Opiniones de nuestros clientes</h2>
      <div className="relative flex flex-col items-center justify-center">
        {/* Contenedor del comentario */}
        <div className="w-3/4 md:w-1/2 p-4 bg-white border rounded-lg shadow-lg">
          <h3 className="text-lg text-gray-700 font-bold">{currentComment.nombre} {currentComment.apellido}</h3>
          <p className="text-gray-700 mt-2">{currentComment.comentario}</p>
          {/* Mostrar estrellas según el rate */}
          <div className="flex justify-center mt-2">
            {Array(currentComment.rate)
              .fill()
              .map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
            {Array(5 - currentComment.rate)
              .fill()
              .map((_, i) => (
                <span key={i + currentComment.rate} className="text-gray-300 text-xl">★</span>
              ))}
          </div>
        </div>

        {/* Botones para cambiar de comentario */}
        <div className="mt-4 flex justify-center gap-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={prevComment}
          >
            Anterior
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={nextComment}
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
}