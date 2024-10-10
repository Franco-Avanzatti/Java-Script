let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const carritoBody = document.querySelector("#carrito-body");
const totalCarrito = document.querySelector("#total-carrito");

function cargarCarrito() {
    let total = 0;
    carritoBody.innerHTML = '';

    carrito.forEach((producto, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.titulo}</td>
            <td>$${producto.precio.toFixed(2)}</td>
            <td>
                <button class="btn btn-outline-secondary btn-sm btn-reducir" data-id="${producto.id}">-</button>
                ${producto.cantidad}
                <button class="btn btn-outline-secondary btn-sm btn-aumentar" data-id="${producto.id}">+</button>
            </td>
            <td>$${(producto.precio * producto.cantidad).toFixed(2)}</td>
            <td><button class="btn btn-danger btn-sm" data-index="${index}">Eliminar</button></td>
        `;
        carritoBody.append(row);

        total += producto.precio * producto.cantidad;
    });

    totalCarrito.textContent = total.toFixed(2);

    
    const botonesAumentar = document.querySelectorAll('.btn-aumentar');
    const botonesReducir = document.querySelectorAll('.btn-reducir');

    botonesAumentar.forEach(boton => {
        boton.addEventListener('click', aumentarCantidad);
    });

    botonesReducir.forEach(boton => {
        boton.addEventListener('click', reducirCantidad);
    });

    const botonesEliminar = document.querySelectorAll('.btn-danger');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarProducto);
    });
}

function aumentarCantidad(e) {
    const idProducto = e.target.dataset.id;
    const productoEnCarrito = carrito.find(producto => producto.id === idProducto);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        cargarCarrito();
    }
}

function reducirCantidad(e) {
    const idProducto = e.target.dataset.id;
    const productoEnCarrito = carrito.find(producto => producto.id === idProducto);

    if (productoEnCarrito && productoEnCarrito.cantidad > 1) {
        productoEnCarrito.cantidad -= 1;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        cargarCarrito();
    }
}


function agregarAlCarrito(producto) {
    const itemExistente = carrito.find((item) => item.id === producto.id);

    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({...producto,id, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}


function eliminarProducto(e) {
    const index = e.target.dataset.index;
    carrito.splice(index, 1);  
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

function vaciarCarrito() {
    carrito = [];  
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}



const carritoVacio = document.querySelector("#vaciar-carrito");
carritoVacio.addEventListener('click', () => { 
    if (carrito.length > 0) {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "No podrás revertir esta acción!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, vaciar carrito",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                vaciarCarrito(); 
                Swal.fire({
                    title: "Carrito vacío!",
                    text: "Todos los productos han sido eliminados.",
                    icon: "success"
                });
            }
        });
    } else {
        Swal.fire({
            title: "Carrito vacío",
            text: "El carrito ya está vacío.",
            icon: "info"
        });
    }
});

cargarCarrito();


