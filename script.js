let carrito = [];

/* AGREGAR */
function agregarCarrito(nombre, precio){

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    actualizarCarrito();

}

/* ACTUALIZAR */
function actualizarCarrito(){

    document.getElementById("contador-carrito")
    .innerText = carrito.length;

    let carritoItems =
    document.getElementById("carrito-items");

    carritoItems.innerHTML = "";

    let total = 0;

    carrito.forEach((producto,index)=>{

        total += producto.precio;

        carritoItems.innerHTML += `

        <div class="item-carrito">

            <div>

                <h4>${producto.nombre}</h4>

                <p>$${producto.precio.toLocaleString()}</p>

            </div>

            <button onclick="eliminarProducto(${index})">

                <i class="fa-solid fa-trash"></i>

            </button>

        </div>

        `;

    });

    document.getElementById("total")
    .innerText =
    "$" + total.toLocaleString();

}

/* ELIMINAR */
function eliminarProducto(index){

    carrito.splice(index,1);

    actualizarCarrito();

}

/* ABRIR */
function abrirCarrito(){

    document.getElementById("panel-carrito")
    .classList.add("activo");

}

/* CERRAR */
function cerrarCarrito(){

    document.getElementById("panel-carrito")
    .classList.remove("activo");

}

/* FINALIZAR COMPRA */
document.querySelector(".btn-finalizar")
.addEventListener("click",()=>{

    if(carrito.length === 0){

        alert("Tu carrito está vacío");

    }else{

        alert("Compra realizada correctamente ✨");

        carrito = [];

        actualizarCarrito();

        cerrarCarrito();

    }

});