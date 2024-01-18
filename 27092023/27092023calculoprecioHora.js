const precioCurso = 5000;
const dias = 60
const horas = 8

let calculoPrecioHora = (dias,horas,precio) => {
  let htotal = dias*horas;
  let precioHora = precio/htotal;
  return precioHora;
}
console.log(calculoPrecioHora(dias,horas,precioCurso))