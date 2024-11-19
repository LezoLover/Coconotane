"use client";
import { FormEvent, ChangeEvent, useState } from "react";
import { db } from "../../utils/firebaseConfig"; // Importa la configuración de Firebase
import { collection, addDoc } from "firebase/firestore";
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  // Manejar cambios en el formulario
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Enviar el formulario a Firebase
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evitar que la página se recargue al enviar el formulario
    setIsSubmitting(true);

    try {
      const _docRef = await addDoc(collection(db, "/Mensajes"), {
        ...formData,
        timestamp: new Date(), // Puedes agregar un timestamp para saber cuándo se envió
      });
      setSubmissionStatus("¡Mensaje enviado correctamente!");
      setFormData({ name: "", email: "", message: "" }); // Limpiar el formulario
    } catch (error) {
      setSubmissionStatus("Hubo un error al enviar el mensaje. Intenta nuevamente.");
      console.error("Error al enviar el mensaje:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between" style={{ backgroundColor: '#fffadf' }}>
      <Header />
      
      {/* Contenido principal */}
      <main className="flex flex-col items-center justify-center p-8">
        {/* Título y descripción */}
        <section className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black mb-4">Contáctanos</h1>
          <p className="text-lg text-gray-700">
            ¿Tienes alguna pregunta o deseas hacer un pedido especial? ¡Estamos aquí para ayudarte!
          </p>
        </section>

        {/* Formulario de contacto */}
        <section className="w-full max-w-lg bg-white shadow-md rounded p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
                className="w-full px-3 py-2 text-gray-700 border rounded"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu@email.com"
                className="w-full px-3 py-2 text-gray-700 border rounded"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensaje</label>
              <textarea
                id="message"
                name="message"
                placeholder="Escribe tu mensaje aquí"
                className="w-full px-3 py-2 text-gray-700 border rounded"
                rows={4}
                required
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            {/* Mostrar mensaje de estado de envío */}
            {submissionStatus && (
              <div className="mb-4 text-center text-gray-700">
                <p>{submissionStatus}</p>
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                className={`bg-[#495057] text-white px-4 py-2 rounded hover:bg-gray-700 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
