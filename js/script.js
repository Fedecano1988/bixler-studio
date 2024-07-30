
// Información del local
const infoLocal = {
    nombreLocal: "Bixler Nails Studio",
    direccion: "C. de los Pinos 600, Hacienda los Morales 2do Sector, 66495 San Nicolás de los Garza, N.L.",
    telefono: "12345678",
    horarioApertura: "9:00 AM",
    horarioCierre: "7:00 PM",
    diasAbierto: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
};

console.log(infoLocal);

// Servicios ofrecidos
const servicios = [
    { nombre: "Gelish", precio: 200 },
    { nombre: "Manicure Gelish", precio: 300 },
    { nombre: "Uñas Esculpidas", precio: 350 },
    { nombre: "Uñas Esculpidas + Gelish", precio: 400 },
];

console.table(servicios);

// Información cliente
let infoCliente = {
    nombre: "Ana",
    apellido: "García",
    email: "ana.garcia@hotmail.com",
    telefono: "123-456-7890",
    historialCliente: [
        {
            fecha: "15-06-2024",
            hora: "10:30am",
            servicio: "Manicure Gelish",
            precio: 300.00,
            feedback: "¡Me encantó el resultado!"
        },
        {
            fecha: "10-05-2024",
            hora: "9:30am",
            servicio: "Gelish",
            precio: 200.00,
            feedback: "Muy buen servicio y atención."
        }
    ],
    notasDelCliente: "Cliente prefiere esmaltes naturales y tonos claros.",
    citasMatutinas: true,
    servicioPreferido: ["Manicure", "Gelish"]
};

// Información adicional
let asistencias = 2;

if (asistencias >= 10) {
    console.log("Cliente VIP");
    alert("¡Felicidades! Eres un Cliente VIP.");
} else if (asistencias < 10) {
    console.warn("No VIP");
    alert("Aún no eres un Cliente VIP.");
}

console.log(infoCliente);

// Función para agregar una nueva cita
function agregarCita(fecha, hora, servicio, precio, feedback) {
    infoCliente.historialCliente.push({ fecha, hora, servicio, precio, feedback });
    console.log("Nueva cita agregada:", { fecha, hora, servicio, precio, feedback });
}

// Promociones actuales
let promociones = [
    { nombre: "Descuento del 10% en manicura los lunes clientes VIP", validoHasta: "2024-09-31" },
    { nombre: "2x1 en pedicura los miércoles clientes VIP", validoHasta: "2024-09-31" },
];

console.log(promociones);

// Función para mostrar promociones válidas
function mostrarPromociones() {
    let hoy = new Date();
    promociones.forEach(promo => {
        let fechaValidez = new Date(promo.validoHasta);
        if (fechaValidez >= hoy) {
            console.log("Promoción válida:", promo.nombre);
        } else {
            console.warn("Promoción expirada:", promo.nombre);
        }
    });
}

// Solicitar al cliente agregar una nueva cita
let agregarNuevaCita = confirm("¿Deseas agregar una nueva cita?");
if (agregarNuevaCita) {
    let name = prompt("Ingresa tu nombre:");
    let lastname = prompt ("Ingresa tu apellido:");
    let phone = prompt ("Ingresa tu telefono");
    let servicio = prompt("Ingresa el servicio: uñas esculpidas, esmalte, pies");
    agregarCita(name, lastname, phone, servicio,);
}

// Mostrar promociones válidas
mostrarPromociones();
