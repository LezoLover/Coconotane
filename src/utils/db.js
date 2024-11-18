import mysql from 'mysql2/promise';

// Configuración de la conexión
const pool = mysql.createPool({
  host: '127.0.0.1', // Cambia si tu host es diferente
  port: 3306,        // Asegúrate de que coincide con el puerto configurado en tu MySQL
  user: 'root',      // Tu usuario de MySQL
  password: '',      // Tu contraseña (déjalo vacío si no tienes contraseña)
  database: 'coconotane', // Nombre de tu base de datos
});

export default pool;
