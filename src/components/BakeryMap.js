"use client";
import React, { useEffect, useRef } from "react";

const BakeryMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 34.9365234375, lng: 135.72793579101562 },
          zoom: 15,
          mapId: "DEMO_MAP_ID",
          zoomControl: true,
          fullscreenControl: false,
          streetViewControl: true,
        });

        new window.google.maps.marker.AdvancedMarkerElement({
          map,
          position: { lat: 34.9365234375, lng: 135.72793579101562 },
          title: "My location",
        });
      }
    };

    // Carga el script de Google Maps si aún no está cargado
    const existingScript = document.getElementById("google-maps-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "google-maps-script";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=maps,marker&v=beta`;
      script.async = true;
      script.onload = loadGoogleMaps;
      document.body.appendChild(script);
    } else {
      loadGoogleMaps();
    }
  }, []);

  return (
    <div className="flex flex-col items-center mt-8 space-y-4 w-full px-4">
      {/* Texto explicativo arriba del mapa */}
      <h2 className="text-2xl font-bold text-gray-700 text-center">
        Encuéntranos aquí:
      </h2>

      {/* Contenedor del mapa */}
      <div
        ref={mapRef}
        style={{
          height: "400px",
          width: "100%",
          maxWidth: "900px", // Opcional: Máximo ancho
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      ></div>
    </div>
  );
};

export default BakeryMap;
