
let saludo = alert(`Hola, Bienvenido a Tino!!`)

const heladería = () => {
    let continuar = true;
    let productosVendidos = [
        { tipo: 'Palito de helado', cantidad: 0, precio: 1000 },
        { tipo: 'Pote de medio kilo', cantidad: 0, precio: 3000 },
        { tipo: 'Pote de un kilo', cantidad: 0, precio: 5500 }
    ];

    //Eleccion de helado
    while (continuar) {
        let opcion = prompt("Elige una opción:\n\n1. Palito de helado\n2. Pote de medio kilo\n3. Pote de un kilo\n\nEscribe 1, 2 o 3 para elegir:");
        
        const dinero = parseFloat(prompt("¿Cuánto dinero tienes?"));

        
        if (isNaN(dinero) || dinero < 1000) {
            alert("Lo siento, no tienes suficiente dinero para comprar ningún helado.");
            let respuesta = prompt("¿Deseas intentarlo de nuevo? (si/no)");
            continuar = respuesta.toLowerCase() === 'si' ? true : false;
            continue; 
        }

        switch(opcion) {
            case '1':
                if (dinero >= productosVendidos[0].precio) {
                    alert("Usted eligió un palito de helado.");
                    productosVendidos[0].cantidad++;
                } else {
                    alert("Lo siento, no tienes suficiente dinero para un palito de helado.");
                }
                break;
            case '2':
                if (dinero >= productosVendidos[1].precio) {
                    alert("Usted eligió un pote de medio kilo.");
                    productosVendidos[1].cantidad++;
                } else {
                    alert("Lo siento, no tienes suficiente dinero para un pote de medio kilo.");
                }
                break;
            case '3':
                if (dinero >= productosVendidos[2].precio) {
                    alert("Usted eligió un pote de un kilo.");
                    productosVendidos[2].cantidad++;
                } else {
                    alert("Lo siento, no tienes suficiente dinero para un pote de un kilo.");
                }
                break;
            default:
                alert("Opción no válida, por favor elija de nuevo.");
                continue; 
        }

        let respuesta = prompt("Gracias por su compra, ¿desea algo más? (si/no)");
        continuar = respuesta.toLowerCase() === 'si' ? true : false;
    }

    alert("Gracias por su compra, ¡vuelva pronto!");
    console.log("      *** VENTAS ***   ");
    
    productosVendidos.forEach(producto => {
        console.log(`${producto.tipo}: ${producto.cantidad} vendidos`);
    });

    // Calcular y mostrar los totales
    const totalVentas = calcularTotales(productosVendidos);
    console.log(`Helados vendidos: ${totalVentas.totalCantidad}`);
    console.log(`Total de ventas: $${totalVentas.totalDinero}`);
};

// Total de ventas y cantidad total de productos vendidos
const calcularTotales = (productos) => {
    const totalDinero = productos.reduce((acc, producto) => acc + (producto.cantidad * producto.precio), 0);
    const totalCantidad = productos.reduce((acc, producto) => acc + producto.cantidad, 0);
    
    return { totalDinero, totalCantidad };
};

heladería();

  
  






 
 
  
  
  