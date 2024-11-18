import Head from 'next/head';
import BakeryMap from '../components/BakeryMap';
import CustomerOpinions from '../components/CustomerOpinions';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductGallery from '../components/ProductGallery.js';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between" style={{ backgroundColor: '#fffadf' }}>
      <Head>
        <title>Coconotane</title>
        <meta name="description" content="Pasteles y postres deliciosos de Coconotane" />
      </Head>

      {/* Barra de utilidades */}
      <Header />

      {/* Contenido principal */}
      <main className="flex flex-col items-center justify-center p-8 space-y-5">
        {/* Sección de bienvenida o descripción */}
        <section className="text-center max-w-[900px] mb-8">
          <h1 className="text-3xl font-bold text-black mb-4">¡Enamoráte de nuestros sabores!</h1>
          <p className="text-lg text-gray-700">
            Nos especializamos en pasteles de gasa, un postre ligero y delicioso, hecho con los mejores ingredientes.
            Perfectos para cualquier ocasión, ¡explora nuestra galería y encuentra tu favorito!
          </p>
        </section>

        {/* Comentarios de los clientes */}
        <CustomerOpinions />

        {/* Galería de productos */}
        <ProductGallery />

        {/* Ubicación de la pastelería */}
        <BakeryMap />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
