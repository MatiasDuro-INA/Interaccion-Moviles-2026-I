const productosOfertas = [
    {
        nombre: "Teclado",
        precio: "50",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Computer_keyboard_ES_layout.svg"
    },
    {
        nombre: "Mouse",
        precio: "20"
    },
    {
        nombre: "Monitor",
        precio: "300"
    },
]

const productosMasVendidos = [
    {
        nombre: "Teclado",
        precio: "1000",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Computer_keyboard_ES_layout.svg"
    },
    {
        nombre: "Mouse",
        precio: "500"
    },
    {
        nombre: "Monitor",
        precio: "3000"
    },
]

const ofertas = document.getElementById("contenedor-ofertas")
const masVendidos = document.getElementById("contenedor-masVendidos")

console.log("masVendidos: ", masVendidos);
console.log("ofertas: ", ofertas);

const tarjetasofertas = productosOfertas.map(producto => `
                <div class="tarjeta">
            <img src=${producto.img} alt="Producto x">
            <p class="tarjeta__titulo">${producto.nombre}</p>
            <p class="tarjeta__precio">$${producto.precio}</p>
        </div>
        `)

const tarjetasMasVendidos = productosMasVendidos.map(producto => `
                <div class="tarjeta">
            <img src=${producto.img} alt="Producto x">
            <p class="tarjeta__titulo">${producto.nombre}</p>
            <p class="tarjeta__precio">$${producto.precio}</p>
        </div>
        `)

console.log("tarjetasMasVendidos: ", tarjetasMasVendidos);

ofertas.innerHTML = tarjetasofertas
masVendidos.innerHTML = tarjetasMasVendidos