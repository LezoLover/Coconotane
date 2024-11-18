// src/pages/api/product.js
import db from '../../../utils/db';

export async function GET(req, res) {
  try {
    const [rows] = await db.query('SELECT id_comentario, nombre, apellido, comentario, rate FROM comentarios');
    return new Response(JSON.stringify({ products: rows }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error al obtener las opiniones' }), { status: 500 });
  }
}