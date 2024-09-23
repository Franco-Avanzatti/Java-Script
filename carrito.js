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
            <td>${producto.cantidad || 1}</td> <!-- Asegúrate de que cantidad esté definida -->
            <td><button class="btn btn-danger btn-sm" data-index="${index}">Eliminar</button></td>
        `;
        carritoBody.append(row);

      
        total += producto.precio * (producto.cantidad || 1);
    });

    
    totalCarrito.textContent = total.toFixed(2);

    
    const botonesEliminar = document.querySelectorAll('.btn-danger');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarProducto);
    });
}


function agregarAlCarrito(titulo, precio) {
    
    const productoExistente = carrito.find(producto => producto.titulo === titulo);

    if (productoExistente) {
        
        productoExistente.cantidad++;
    } else {
        
        carrito.push({ titulo, precio, cantidad: 1 });
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


document.getElementById('vaciar-carrito').addEventListener('click', () => {
    if (carrito.length > 0) {
        const confirmar = confirm('¿Estás seguro de que deseas vaciar el carrito?');
        if (confirmar) {
            vaciarCarrito();
        }
    } else {
        alert('El carrito ya está vacío.');
    }
});


cargarCarrito();

document.getElementById('boton-agregar').addEventListener('click', () => {
    agregarAlCarrito("${producto.titulo}"+ "${producto.precio}"); 
});
