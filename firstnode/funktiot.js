/*const tulostin = (luku) => {
    return luku;
} */

//En saanu toimimaan tulosin() funktiolla noita muita funktioit, joten tein ne ilman sitä.
const tulostaNelio = (luku) => {
    let arvo = luku
    for (let j = 0; j < arvo; j++) {
        document.write("* ".repeat(luku));
        document.write("<br>"); 
    }
    document.write("<br>"); 
}

const tulostaSuorakulmio = (maara, arvo) => {
    for (let j = 0; j < arvo; j++) {
        document.write("* ".repeat(maara));
        document.write("<br>"); 
    }
    document.write("<br>"); 
}

const tulostaKolmio = (luku) => {
    for (let j = 1; j <= luku; j++)  {
        for (let i = 1; i <= j; i++)  {
            document.write("* ");
        }
        document.write("<br>"); 
    }
}   

tulostaNelio(4)
tulostaSuorakulmio(5,3)
tulostaKolmio(5)

module.exports = {
    tulostaNelio,
    tulostaSuorakulmio,
    tulostaKolmio
 }
 