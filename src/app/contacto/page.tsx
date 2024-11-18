import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Contacto() {
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
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
                className="w-full px-3 py-2 text-gray-700 border rounded"
                required
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
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#495057] text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Enviar
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
