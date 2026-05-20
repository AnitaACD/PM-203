// ── Menú dinámico con map() ───────────────────────────
// map() transforma cada producto en una cadena de texto formateada

function mostrarMenu() {
    // map() recorre el array y DEVUELVE un nuevo array transformado
    let lineasMenu = productos.map(({ nombre, precio, categoria }) =>
        `${nombre.padEnd(15)} $${precio.toFixed(2).padStart(5)}  [${categoria}]`
    );

    console.log("☕ ── MENÚ DE LA CAFETERÍA ──");
    lineasMenu.forEach(linea => console.log(linea)); // forEach() imprime cada línea
    renderCliente();
}

// ── Promociones con map() ─────────────────────────────
// Aplica 10 % de descuento y devuelve un array NUEVO (no modifica el original)

function mostrarPromociones() {
    let conDescuento = productos
        .filter(p => p.categoria === "comida" || p.categoria === "postres")
        .map(({ nombre, precio, categoria }) => ({
            nombre,
            categoria,
            precioOriginal: precio,
            precioPromo:    parseFloat((precio * 0.90).toFixed(2)),
            descuento:      "10 %"
        }));

    console.log("Promociones del día (10 % off en comida y postres):");
    console.table(conDescuento);
    renderPromociones(conDescuento);
}

// ── Productos disponibles con forEach() ──────────────
// forEach() itera sin devolver nada; útil para efectos secundarios (render, log)

function mostrar_prod(lista = productos) {
    console.log("🛒 Productos disponibles:");
    lista.forEach((p, i) => {
        console.log(`  ${i}. ${p.nombre} — $${p.precio.toFixed(2)} (${p.categoria})`);
    });
    console.table(lista);
    renderCliente(lista);
}

// ── Render helpers ────────────────────────────────────

function renderCliente(lista = productos) {
    const contenedor = document.getElementById("menu-cliente");
    if (!contenedor) return;

    // map() genera el HTML de cada tarjeta
    contenedor.innerHTML = lista.map(p =>
        `<div class="card-prod">
            <span class="prod-nombre">${p.nombre}</span>
            <span class="badge badge-${p.categoria}">${p.categoria}</span>
            <span class="prod-precio">$${p.precio.toFixed(2)}</span>
        </div>`
    ).join("");
}

function renderPromociones(lista) {
    const contenedor = document.getElementById("menu-cliente");
    if (!contenedor) return;

    contenedor.innerHTML = `<h3 style="grid-column:1/-1;color:var(--accent)">Promociones del día</h3>` +
        lista.map(p =>
            `<div class="card-prod promo">
                <span class="prod-nombre">${p.nombre}</span>
                <span class="badge badge-${p.categoria}">${p.categoria}</span>
                <span class="prod-precio tachado">$${p.precioOriginal.toFixed(2)}</span>
                <span class="prod-precio promo-precio">$${p.precioPromo.toFixed(2)}</span>
                <span class="badge badge-promo">${p.descuento} off</span>
            </div>`
        ).join("");
}