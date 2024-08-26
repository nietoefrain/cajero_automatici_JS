alert("Bienvenido a Banca en Línea");

const clientes = [
  { nombre: "Juan Larreal", id: "jlarreal", clave: "juan123l", saldo: 500 },
  { nombre: "Maria Campos", id: "mcampos", clave: "mariac123", saldo: 1500 },
  { nombre: "Carlos Leal", id: "caleal", clave: "admtest01", saldo: 1000 },
];

let usuarioactual = null;

function iniciosesion() {
  const id = prompt("Ingrese su identificador:");
  const contrasena = prompt("Ingrese su clave:");
  usuarioactual = clientes.find(
    (client) => client.id === id && client.clave === contrasena
  );

  if (usuarioactual) {
    alert(`Bienvenido ${usuarioactual.nombre}`);
    menu();
  } else {
    alert("Identificador o clave incorrectos.");
    iniciosesion();
  }
}

function menu() {
  let opcion;
  do {
    opcion = prompt(
      `Seleccione una opción:\n` +
        `1. Ver saldo\n` +
        `2. Realizar giro\n` +
        `3. Realizar depósito\n` +
        `4. Salir`
    );

    switch (opcion) {
      case "1":
        saldo();
        break;
      case "2":
        giro();
        break;
      case "3":
        deposito();
        break;
      case "4":
        alert("Gracias por usar nuestro cajero automático.");
        break;
      default:
        alert("Opción no válida. Intente nuevamente.");
    }
  } while (opcion !== "4");
}

function saldo() {
  alert(`Su saldo actual es: $${usuarioactual.saldo}`);
}

function giro() {
  const saldoActual = usuarioactual.saldo;
  let monto;

  do {
    monto = prompt(
      `Su saldo actual es: ${saldoActual}\nIngrese el monto que desea girar:`
    );

    if (monto === null) {
      return;
    }

    const parsedMonto = parseFloat(monto);

    if (isNaN(parsedMonto) || parsedMonto <= 0) {
      alert("Ingrese un monto válido.");
    } else if (parsedMonto > saldoActual) {
      alert("Fondos insuficientes. No puede girar un monto mayor a su saldo.");
    } else {
      usuarioactual.saldo -= parsedMonto;
      alert(`Giro realizado. Su nuevo saldo es $${usuarioactual.saldo}`);
      break;
    }
  } while (true);
}

function deposito() {
  const saldoActual = usuarioactual.saldo;
  let monto;

  do {
    monto = prompt(
      `Su saldo actual es: ${saldoActual}\nIngrese el monto que desea depositar:`
    );

    if (monto === null) {
      return;
    }

    const parsedMonto = parseFloat(monto);

    if (isNaN(parsedMonto) || parsedMonto <= 0) {
      alert("Ingrese un monto válido.");
    } else {
      usuarioactual.saldo += parsedMonto;
      alert(`Depósito realizado. Su nuevo saldo es $${usuarioactual.saldo}`);
      break;
    }
  } while (true);
}

iniciosesion();
