"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

const products = [
  { id: 1, name: 'Pastel de Frutas', description: 'Un delicioso pastel relleno de crema batida con kiwi y durazno.', image: '/images/kiwi_crema.jpg' },
  { id: 2, name: 'Crepa con Plátano', description: 'Un delicioso pastel cubierto con una crepa y acompañado de delicioso plátano.', image: '/images/crepa_platano.jpg' },
  { id: 3, name: 'Pastel de Nuez', description: 'Un delicioso pastel de gasa relleno de crema batida y cubierto con nuez.', image: '/images/choco_nuez.jpg' },
  { id: 4, name: 'Pastel de Cereza', description: 'Un delicioso pastel relleno de crema batida con cereza y trozos de chocolate.', image: '/images/choco_cereza.jpg' },
  { id: 5, name: 'Brownie de Chocolate', description: 'Delicioso brownie de chocolate con chispas de chocolate.', image: '/images/choco_brownie.jpg' },
  { id: 6, name: 'Pastel de ChocoFresa', description: 'Delicioso pastel de chocolate cubierto de fresa y un palito de chocolate.', image: '/images/choco_fresa.jpg' },
  { id: 7, name: 'Pastel de Navidad', description: 'Pastel de chocolate decorado con un muñeco de nieve y un arbolito navideño.', image: '/images/pastel_navidad.jpg' },
  { id: 8, name: 'Pastel de Cajeta', description: 'Pastel de gasa con crema batida y cajeta con fresa.', image: '/images/pastel_cajeta.jpg' },
  { id: 9, name: 'Pastel de Piña', description: 'Delicioso pastel de gasa con piña, uva y fresa, relleno de crema batida.', image: '/images/pineapple_cake.jpg' },
  { id: 10, name: 'Pastel de Plátano', description: 'Pastel de gasa con relleno de crema de plátano.', image: '/images/pastel_platano.jpg' },
];

export default function ProductGallery() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [position, setPosition] = useState(null);

  const handleCardClick = (e, product) => {
    const rect = e.target.getBoundingClientRect();
    setPosition({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    });
    setSelectedProduct(product);
  };

  return (
    <div className="flex justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-screen-lg w-full">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="flex flex-col p-4 border rounded-lg shadow-lg bg-white cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => handleCardClick(e, product)}
          >
            {/* Imagen */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />

            {/* Contenido del card */}
            <div className="mt-2 text-center">
              <h3 className="text-lg text-black font-bold">{product.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal para detalles */}
      {selectedProduct && position && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4 md:px-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg max-w-[900px] w-full"
            initial={{
              scale: 0.8,
              x: position.left,
              y: position.top,
              width: position.width,
              height: position.height,
            }}
            animate={{
              scale: 1,
              x: 0,
              y: 0,
              width: "100%",
              height: "auto",
            }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {/* Imagen del producto en grande */}
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-72 object-cover rounded-md"
            />

            {/* Nombre y descripción del producto en grande */}
            <h3 className="text-2xl text-black font-bold mt-4 text-center">{selectedProduct.name}</h3> {/* Centramos el texto */}
            <p className="text-black mt-2 text-lg px-4 text-center">{selectedProduct.description}</p> {/* Centramos el texto y le agregamos padding horizontal */}

            {/* Botón para cerrar el modal */}
            <div className="flex justify-center mt-6">
              <button
                className="bg-red-500 text-white px-6 py-2 rounded"
                onClick={() => setSelectedProduct(null)}
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
