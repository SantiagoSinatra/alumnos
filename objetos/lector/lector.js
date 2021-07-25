window.addEventListener('load', () => {
  
  var display = document.getElementById('display');
  var valorOriginalDisplay = display.innerHTML; // Me traigo 'El valor es:'

  var botonNombre = document.getElementById('boton-nombre');
  var botonPrecio = document.getElementById('boton-precio');
  var botonCantidad = document.getElementById('boton-cantidad');

  const bebida = { 
    nombre: 'Coca-Cola',
    precio: '$1.00',
    cantidad: 200,
    gusto: 'Rico',
    decirNombre : function(nombre) {
      return this.nombre;
    }
  }

  const bebidaArray = ["Coca-Cola", "$1.00", 200];
  



  botonNombre.addEventListener('click', () => {
    display.innerHTML = valorOriginalDisplay; // Piso lo que haya con el valor original
    display.innerHTML = display.innerHTML + " " + bebida.decirNombre('Pepsi'); // Le agrego a lo anterior el valor que necesito
  });

  botonPrecio.addEventListener('click', () => {
    display.innerHTML = valorOriginalDisplay;
    display.innerHTML = display.innerHTML + " " + bebida.precio;
  });

  botonCantidad.addEventListener('click', () => {
    display.innerHTML = valorOriginalDisplay;
    display.innerHTML = display.innerHTML + " " + bebida.cantidad;
  });

});

