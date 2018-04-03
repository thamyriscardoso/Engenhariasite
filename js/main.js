elemento = document.getElementById('cpf');
function TestaCPF(elemento) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf == '') return elemento.style.backgroundColor = "red";
  // Elimina CPFs invalidos conhecidos    
  if (cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999")
    return elemento.style.backgroundColor = "red";
  // Valida 1o digito 
  add = 0;
  for (i = 0; i < 9; i++)
    add += parseInt(cpf.charAt(i)) * (10 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11)
    rev = 0;
  if (rev != parseInt(cpf.charAt(9)))
    return elemento.style.backgroundColor = "red";
  // Valida 2o digito 
  add = 0;
  for (i = 0; i < 10; i++)
    add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11)
    rev = 0;
  if (rev != parseInt(cpf.charAt(10)))
   return elemento.style.backgroundColor = "red";
  return elemento.style.backgroundColor = "blue";
}

//map
function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
      center: new google.maps.LatLng(51.5, -0.2),
      zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}