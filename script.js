let carrito = [];

/* =========================
   AGREGAR AL CARRITO
========================= */
function agregarCarrito(){

    let boton = event.target;

    let producto =
    boton.closest(".producto");

    let nombre =
    producto.querySelector("h3").innerText;

    let precioTexto =
    producto.querySelector(".precio")
    .innerText;

    let precio = Number(
        precioTexto
        .replace("$","")
        .replace(/\./g,"")
        .replace(",", "")
    );

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    actualizarCarrito();

    abrirCarrito();

}

/* =========================
   ACTUALIZAR CARRITO
========================= */
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

                <p>$${producto.precio.toLocaleString("es-CO")}</p>

            </div>

            <button class="btn-eliminar"
            onclick="eliminarProducto(${index})">

                <i class="fa-solid fa-trash"></i>

            </button>

        </div>

        `;

    });

    document.getElementById("total")
    .innerText =
    "$" + total.toLocaleString("es-CO");

}

/* =========================
   ELIMINAR PRODUCTO
========================= */
function eliminarProducto(index){

    carrito.splice(index,1);

    actualizarCarrito();

}

/* =========================
   ABRIR CARRITO
========================= */
function abrirCarrito(){

    document.getElementById("panel-carrito")
    .classList.add("activo");

}

/* =========================
   CERRAR CARRITO
========================= */
function cerrarCarrito(){

    document.getElementById("panel-carrito")
    .classList.remove("activo");

}

/* =========================
   FINALIZAR COMPRA
========================= */
document.querySelector(".btn-finalizar")
.addEventListener("click",()=>{

    if(carrito.length === 0){

        alert("Tu carrito está vacío");

    }else{

        let total = carrito.reduce(
            (acc,producto)=> acc + producto.precio,
            0
        );

        alert(
            "Compra realizada correctamente ✨\n\n" +
            "Total pagado: $" +
            total.toLocaleString("es-CO")
        );

        carrito = [];

        actualizarCarrito();

        cerrarCarrito();

    }

});