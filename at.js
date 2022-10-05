const consolas = ["Play Station 4", "Nintendo Switch", "Xbox Series X", "Sega Genesis Mini", "SNES Classic Edition"];


function devolverObjeto(consolas) {
  return consolas.at(-4);
}


const objeto = devolverObjeto(consolas);
console.log(objeto);