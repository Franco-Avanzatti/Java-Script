
let saludo = alert(`Hola, Bienvenido a Tino!!`)

const heladería = () => {
    let continuar = true; 
  
    while (continuar) {
      
      let opcion = prompt("Elige una opción:\n\n1. Palito de helado\n2. Pote de medio kilo\n3. Pote de un kilo\n\nEscribe 1, 2 o 3 para elegir:");
  
      
      switch(opcion) {
        case '1':
          alert("Usted eligió un Palito de helado.");
          break;
        case '2':
          alert("Usted eligió un Pote de medio kilo.");
          break;
        case '3':
          alert("Usted eligió un Pote de un kilo.");
          break;
        default:
          alert("Opción no válida, por favor elija de nuevo.");
          continue; 
      }
      const dinero = parseFloat(prompt("¿Cuánto dinero tienes?"));

      // Precios de los helados
      const precioPalito = 1000;
      const precioPoteMedio = 3000;
      const precioKilo = 5500;
  
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
  };
  
  
  heladería();

