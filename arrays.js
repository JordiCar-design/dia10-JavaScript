console.log('Proves amb arrays')

function demoArrays(){

    // Creem un array buit (llista)
    var persones = []

    // Afegir elements
    persones.push("Anna") // No es pot fer un push a elements dins del claudàtor
    persones.push("Eva")

    // Creem un array i l'inicialitzem
    var alumnes = [
        "Pere", 
        "Laura", 
        "Dani",
        '<p style="color:blue">L\'altra</p>' // això és HTML en un fitxer JS
                                           // i la \ és per poder posar l'apòstrof 
    ]

    alumnes.push("Jordi")
    alumnes.push("Sandra")
    alumnes.pop()   // El mètode pop és per eliminar l'últim element de la llista 
    alumnes.shift() // El mètode shift és per eliminar el primer element de la llista
    alumnes.splice(2, 0, "Josep") // El mètode splice és per eliminar elements del mig d'una
                                // llista i, entre cometes també serveix per afegir-ne 
    alumnes.sort() //La funció (o mètode) sort serveix per ordenar

    console.log(persones,alumnes)

    var numeros = [34, 12, 10, 2]
    var total = 0

    numeros.forEach(suma)

    function sumatori(valor, index, llista){
        console.log(valor, index, llista)

    }

}

