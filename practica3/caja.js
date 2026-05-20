let pedidos = [];

// ── Agregar pedido ────────────────────────────────────

function agregarPedido() {
    let producto = prompt("Nombre del producto:");
    let precio   = parseFloat(prompt("Precio:"));   // ← parseFloat, no string

    pedidos.push({ producto, precio });
    console.log(`Pedido agregado: ${producto} - $${precio.toFixed(2)}`);
    renderCaja();
}

// ── Calcular totales con reduce() + destructuring ─────

function calcularTotales() {
    // reduce() acumula la suma de todos los precios
    // destructuring { precio } extrae el campo precio de cada objeto
    let subtotal = pedidos.reduce((acum, { precio }) => acum + precio, 0);

    let iva   = subtotal * 0.16;          // 16 % IVA México
    let total = subtotal + iva;

    return { subtotal, iva, total };      // retorna los 3 valores
}

// ── Mostrar pedidos ───────────────────────────────────

function mostrarPedidos() {
    const { subtotal, iva, total } = calcularTotales(); // destructuring del retorno
    console.log("Pedidos actuales:");
    console.table(pedidos);
    console.log(`  Subtotal : $${subtotal.toFixed(2)}`);
    console.log(`  IVA (16%): $${iva.toFixed(2)}`);
    console.log(`  Total    : $${total.toFixed(2)}`);
    renderCaja();
}

// ── Render helper ─────────────────────────────────────

function renderCaja() {
    const tbody = document.getElementById("tbody-caja");
    const elSub = document.getElementById("subtotal");
    const elIva = document.getElementById("iva");
    const elTot = document.getElementById("total");
    if (!tbody) return;

    tbody.innerHTML = pedidos.map((p, i) =>
        `<tr>
            <td>${i}</td>
            <td>${p.producto}</td>
            <td>$${p.precio.toFixed(2)}</td>
        </tr>`
    ).join("");

    const { subtotal, iva, total } = calcularTotales();
    elSub.textContent = `$${subtotal.toFixed(2)}`;
    elIva.textContent = `$${iva.toFixed(2)}`;
    elTot.textContent = `$${total.toFixed(2)}`;
}