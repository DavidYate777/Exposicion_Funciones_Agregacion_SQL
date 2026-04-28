const SQL_DATA = {
    count: {
        titulo: "COUNT()",
        desc: "Cuenta registros en la tabla.",
        code: `SELECT COUNT(*) AS total_empleados
FROM empleados
WHERE salario > 2000;`,
        exp: `COUNT(*) → cuenta todas las filas.
AS total_empleados → nombre del resultado.
FROM empleados → tabla usada.
WHERE salario > 2000 → filtra los datos.`
    },

    sum: {
        titulo: "SUM()",
        desc: "Suma valores numéricos.",
        code: `SELECT producto, SUM(precio) AS total
FROM ventas
GROUP BY producto;`,
        exp: `producto → columna agrupada.
SUM(precio) → suma los valores.
AS total → nombre del resultado.
GROUP BY producto → agrupa los datos.`
    },

    avg: {
        titulo: "AVG()",
        desc: "Calcula el promedio.",
        code: `SELECT departamento, AVG(salario) AS promedio
FROM empleados
GROUP BY departamento;`,
        exp: `departamento → agrupación.
AVG(salario) → promedio.
AS promedio → nombre.
GROUP BY → agrupa resultados.`
    },

    min: {
        titulo: "MIN()",
        desc: "Obtiene el valor mínimo.",
        code: `SELECT categoria, MIN(precio) AS menor_precio
FROM productos
GROUP BY categoria;`,
        exp: `categoria → agrupación.
MIN(precio) → valor más bajo.
AS menor_precio → nombre.
GROUP BY → agrupa resultados.`
    },

    max: {
        titulo: "MAX()",
        desc: "Obtiene el valor máximo.",
        code: `SELECT categoria, MAX(precio) AS mayor_precio
FROM productos
GROUP BY categoria;`,
        exp: `categoria → agrupación.
MAX(precio) → valor más alto.
AS mayor_precio → nombre.
GROUP BY → agrupa resultados.`
    }
};

// EFECTO ESCRITURA
function escribirCodigo(texto, elemento) {
    elemento.innerText = "";
    let i = 0;

    const intervalo = setInterval(() => {
        elemento.innerText += texto[i];
        i++;
        if (i >= texto.length) clearInterval(intervalo);
    }, 20);
}

function render(tipo) {
    const data = SQL_DATA[tipo];
    if (!data) return;

    document.getElementById("titulo").innerText = data.titulo;
    document.getElementById("descripcion").innerText = data.desc;

    escribirCodigo(data.code, document.getElementById("codigo"));
    document.getElementById("explicacion").innerText = data.exp;

    // animación
    const card = document.getElementById("display-card");
    card.classList.remove("fade-in");
    void card.offsetWidth;
    card.classList.add("fade-in");

    // botón activo
    document.querySelectorAll(".sidebar li")
        .forEach(el => el.classList.remove("active"));

    document.getElementById("btn-" + tipo).classList.add("active");
}

// iniciar
window.onload = () => render("count");