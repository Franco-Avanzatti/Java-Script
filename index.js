
let saludo = alert(`Hola, Bienvenido a Tino!!`)

const heladería = () => {
  let continuar = true;
  let productosVendidos = [
      { tipo: 'Palito de helado', cantidad: 0, precio: 1000 },
      { tipo: 'Pote de medio kilo', cantidad: 0, precio: 3000 },
      { tipo: 'Pote de un kilo', cantidad: 0, precio: 5500 }
  ];

  while (continuar) {
      let opcion = prompt("Elige una opción:\n\n1. Palito de helado\n2. Pote de medio kilo\n3. Pote de un kilo\n\nEscribe 1, 2 o 3 para elegir:");

      switch(opcion) {
          case '1':
              alert("Usted eligió un palito de helado.");
              productosVendidos[0].cantidad++; 
              break;
          case '2':
              alert("Usted eligió un pote de medio kilo.");
              productosVendidos[1].cantidad++; 
              break;
          case '3':
              alert("Usted eligió un pote de un kilo.");
              productosVendidos[2].cantidad++; 
              break;
          default:
              alert("Opción no válida, por favor elija de nuevo.");
              continue; 
      }

      const dinero = parseFloat(prompt("¿Cuánto dinero tienes?"));
     

      // Precios de los helados
      const helados = [1000, 3000, 5500];
      const [precioPalito, precioPoteMedio, precioKilo] = helados;

      let mensaje = "Con tu dinero puedes comprar: ";
      

      

      if (isNaN(dinero) || dinero <= 0) {
          alert("Por favor, ingresa una cantidad válida de dinero.");
      } else {
          if (dinero >= precioKilo) mensaje += "\n- Un pote de un kilo";
          if (dinero >= precioPoteMedio) mensaje += "\n- Un pote de medio kilo";
          if (dinero >= precioPalito) mensaje += "\n- Un helado de palito";

          if (dinero < precioPalito) mensaje = "Lo siento, no tienes suficiente dinero para comprar un helado.";
          alert(mensaje);
      }
     

      let respuesta = prompt("Gracias por su compra, ¿desea algo más? (si/no)");
      continuar = respuesta.toLowerCase() === 'si' ? true : false;
  }

  alert("Gracias por su compra, ¡vuelva pronto!");
  const resumenVentas = sumarHelados(productosVendidos); 
  console.log(resumenVentas); 
};

// Función para sumar las ventas
const sumarHelados = (productos) => {
  // Calcular la suma total de productos vendidos y el total de ventas
  const totalVentas = productos.reduce((acc, producto) => acc + (producto.cantidad * producto.precio), 0);
  const cantidadTotal = productos.reduce((acc, producto) => acc + producto.cantidad, 0);

  
  const resumen = productos.map(producto => ({
      tipo: producto.tipo,
      cantidad: producto.cantidad
  }));

  resumen.push({ tipo: 'Total de ventas', cantidad: totalVentas });
  resumen.push({ tipo: 'Cantidad total de productos vendidos', cantidad: cantidadTotal });

  return resumen; 


};



heladería();

console.log("***ventas***")
helados.forEach(resumenVentas => {
  console.log(producto.cantidad + producto.precio);
  
});





 
 
  
  
  