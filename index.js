const heladosTino = [
    {
        id:"heladoDePalito",
        titulo:"Helado de Palito",
        precio:1000,
    },
    {
        id:"poteDeMedioKilo",
        titulo:"Pote de medio kilo",
        precio:3000,
    },
    {
        id:"poteDeKilo",
        titulo:"Pote de kilo",
        precio:5500
    }
]

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos () {
    
    cargarProductos.forEach(producto => {

        const div =document.createElement("div");
        div.classList.add("producto");
        div.innerHTML= `
        <img src="${producto.imagen}" class="producto-imagen card-img-top" alt="${producto.titulo}">
          <div class="producto-detalle card-body">
            <h5 class="prodcuto-titulo card-title">${producto.titulo}</h5>
            <p class="producto-precio card-text">$${producto.precio}</p>
            <a href="#" class="producto-agregar btn btn-primary" id="${producto.id}" >Agregar al carrito</a>
          </div>

        `;

        contenedorProductos.append(div);

        

    })

}

cargarProductos();


  
  






 
 
  
  
  