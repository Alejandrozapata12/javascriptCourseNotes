const TarjetaProducto = () => {
  // Imagina que estos datos vienen de una base de datos
  const nombre = "Sartén de Cerámica";
  const precio = 35;

  return (
    <div className="card">
      <h2>{nombre}</h2>
      <p>Precio: ${precio}</p>
      <button onClick={() => alert("¡Añadido!")}>Comprar</button>
    </div>
  );
};