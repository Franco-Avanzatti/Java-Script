const heladosTino = [
    {
        id: "heladoDePalito",
        titulo: "Helado de Palito",
        precio: 1000,
        imagen: "./imagenes/heladodepalito.jpg"
    },
    {
        id: "poteDeMedioKilo",
        titulo: "Pote de medio kilo",
        precio: 3000,
        imagen: "./imagenes/potedehelado.jpg"
    },
    {
        id: "poteDeKilo",
        titulo: "Pote de kilo",
        precio: 5500,
        imagen: "./imagenes/potedehelado.jpg"
    }
];


let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


const contenedorProductos = document.querySelector("#contenedor-productos");


const contadorCarrito = document.querySelector(".badge");


function cargarProductos() {
    heladosTino.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("col-md-4", "d-flex", "justify-content-center", "mb-4");
        div.innerHTML = `
        <div class="card d-flex align-items-center" style="width: 18rem;">
            <img src="${producto.imagen}" class="producto-imagen card-img-top" alt="${producto.titulo}">
            <div class="producto-detalle card-body">
              <h5 class="producto-titulo card-title">${producto.titulo}</h5>
              <p class="producto-precio card-text">$${producto.precio}</p>
              <a href="#" class="producto-agregar btn btn-primary" id="${producto.id}">Agregar al carrito</a>
            </div>
        </div>
        `;
        contenedorProductos.append(div);
    });

    
    const botonesAgregar = document.querySelectorAll('.producto-agregar');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', productoAgregar);
    });
}


function productoAgregar(e) {
    e.preventDefault(); 
    const idProducto = e.target.id; 
    const productoSeleccionado = heladosTino.find(producto => producto.id === idProducto);
    
    
    carrito.push(productoSeleccionado);

    
    localStorage.setItem('carrito', JSON.stringify(carrito));

    
    contadorCarrito.textContent = carrito.length;
}


contadorCarrito.textContent = carrito.length;


cargarProductos();



