const tulostaTahtia = (arvo) => {
    console.log("* ".repeat(arvo));
}     
const tulostaTulos = (tulos) => {
   let str = tulos.toString();
   let len = str.length;
   console.log("-".repeat(len));
   console.log(str);
    console.log("-".repeat(len));
   }
module.exports = {
   tulostaTahtia,
   tulostaTulos
}
