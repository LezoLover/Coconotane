"use client";
import { useEffect, useState } from "react";
import { db } from "../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Aqui tmabien modificamos el codigo
export default function CustomerOpinions() {
  const [comments, setComments] = useState([]);

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

  if (comments.length === 0) {
    return <p className="text-center text-gray-700">Cargando comentarios...</p>;
  }

  return (
    <section className="text-center py-8 px-4">
      <h2 className="text-2xl text-gray-700 font-bold mb-4">Lo que dicen de nosotros...</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] max-h-[500px]" // Cambios para responsividad
      >
        {comments.map((comment) => (
          <SwiperSlide key={comment.id} className="h-full w-full">
            <div className="p-6 bg-white border rounded-lg shadow-lg overflow-hidden h-full w-full flex flex-col justify-center">
              <h3 className="text-xl text-gray-700 font-bold">
                {comment.nombre} {comment.apellido}
              </h3>
              <p className="text-gray-700 mt-4 text-lg">{comment.comentario}</p>
              <p className="text-gray-400 mt-4 text-lg">
                {comment.fecha.toDate().toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              {/* Mostrar estrellas según el rate */}
              <div className="flex justify-center mt-4">
                {Array(comment.rate)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="text-yellow-500 text-2xl">★</span>
                  ))}
                {Array(5 - comment.rate)
                  .fill()
                  .map((_, i) => (
                    <span key={i + comment.rate} className="text-gray-300 text-2xl">★</span>
                  ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
