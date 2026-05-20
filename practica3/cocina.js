let productos = [
    { nombre: "Leche",       precio: 30,  categoria: "bebidas"  },
    { nombre: "Pan",         precio: 20,  categoria: "panaderia"},
    { nombre: "Huevos",      precio: 70,  categoria: "basicos"  },
    { nombre: "Tortas",      precio: 100,  categoria: "comida"   },
    { nombre: "Quesadillas", precio: 30,  categoria: "comida"   },
    { nombre: "Queso",       precio: 50,  categoria: "basicos"  },
    { nombre: "Frijoles",    precio: 30,  categoria: "basicos"  },
    { nombre: "Café",        precio: 40,  categoria: "bebidas"  },
    { nombre: "Jugo",        precio: 50,  categoria: "bebidas"  },
    { nombre: "Flan",        precio: 50,  categoria: "postres"  },
    { nombre: "Pastel",      precio: 50,  categoria: "postres"  },
];

// ── CRUD ──────────────────────────────────────────────

function AgregarProducto() {
    let nombre    = prompt("Nombre del producto:");
    let precio    = prompt("Precio:");
    let categoria = prompt("Categoría (bebidas / comida / postres / basicos / panaderia):");

    productos.push({ nombre, precio: parseFloat(precio), categoria });
    localStorage.setItem("productos", JSON.stringify(productos));
    console.table(productos);
    renderTabla();
}

function EditarProducto() {
    let indice    = parseInt(prompt("Índice del producto a editar (empieza en 0):"));
    let nombre    = prompt("Nuevo nombre:");
    let precio    = prompt("Nuevo precio:");
    let categoria = prompt("Nueva categoría:");

    productos[indice] = { nombre, precio: parseFloat(precio), categoria };
    localStorage.setItem("productos", JSON.stringify(productos));
    console.table(productos);
    renderTabla();
}

function EliminarProducto() {
    let indice = parseInt(prompt("Índice del producto a eliminar (empieza en 0):"));
    productos.splice(indice, 1);
    localStorage.setItem("productos", JSON.stringify(productos));
    console.table(productos);
    renderTabla();
}

// ── FILTROS con filter() y find() ────────────────────

function productosBaratos() {
    // filter(): todos los productos con precio <= 2.5
    let baratos = productos.filter(p => p.precio <= 50);
    console.log("Productos baratos (precio ≤ $50):");
    console.table(baratos);
    renderTabla(baratos, "Productos Baratos (≤ $50)");
}

function productosCaros() {
    // filter(): todos los productos con precio > 3.5
    let caros = productos.filter(p => p.precio > 60);
    console.log(" Productos caros (precio > $60):");
    console.table(caros);
    renderTabla(caros, "Productos Caros (> $60)");
}

function filtrarBebidas() {
    // filter(): todos los de categoría bebidas
    let bebidas = productos.filter(p => p.categoria === "bebidas");
    console.log("Bebidas:");
    console.table(bebidas);
    renderTabla(bebidas, "Bebidas");
}

function filtrarPostres() {
    // filter(): todos los de categoría postres
    let postres = productos.filter(p => p.categoria === "postres");
    console.log("Postres:");
    console.table(postres);
    renderTabla(postres, "Postres");
}

function buscarProducto() {
    let nombre = prompt("¿Qué producto buscas?");
    // find(): devuelve el PRIMER producto que coincida
    let encontrado = productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

    if (encontrado) {
        console.log("Producto encontrado:", encontrado);
        renderTabla([encontrado], `Resultado: "${nombre}"`);
    } else {
        console.log("Producto no encontrado.");
        renderTabla([], `Sin resultados para "${nombre}"`);
    }
}

function mostrarTodos() {
    renderTabla(productos, "Todos los Productos");
}

// ── Render helper ─────────────────────────────────────

function renderTabla(lista = productos, titulo = "Todos los Productos") {
    const tbody = document.getElementById("tbody-cocina");
    const tituloEl = document.getElementById("tabla-titulo");
    if (!tbody) return;

    tituloEl.textContent = titulo;
    tbody.innerHTML = lista.map((p, i) =>
        `<tr>
            <td>${i}</td>
            <td>${p.nombre}</td>
            <td>$${p.precio.toFixed(2)}</td>
            <td><span class="badge badge-${p.categoria}">${p.categoria}</span></td>
        </tr>`
    ).join("");
}

window.addEventListener("DOMContentLoaded", () => renderTabla());