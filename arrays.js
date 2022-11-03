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
    console.log("Abans del sumatori")
    numeros.forEach(sumatori)
    console.log("Després del sumatori")

    numeros.forEach(suma)

    function sumatori(valor, index, llista){
        console.log("Dins del sumatori")
        console.log(valor, index, llista)
        total = total + valor

    }
    console.clear()

    // Tema loops, que serveixen per iterar

    var lletres = ["a","b","c","d"]
    var i = 0

    for(i; i <100;i = i + 2)
    {
        console.log("posicio",i)

    }

    // posicio++ és igual a posicio = posicio + 1
    // El for ens serveix per iterar

    for(var posicio=0;posicio<lletres.length;posicio++){

        console.log(posicio)
        console.log(lletres[posicio])
    }

    console.clear()


    function informacio(valor, posicio, arrayOriginal){
        console.log(posicio)
        console.log(valor)
    }
    function senseRes(){
        console.log('hola')
    }

        function ambElValor(elValor){
            console.log(elValor)


        }

    lletres.forEach(informacio)
    lletres.forEach(senseRes)
    lletres.forEach(ambElValor)
    // lletres.forEach(ambElValorDeLaPosicio)

    lletres.forEach(function(val){
        console.log(val)

    })

    var lletres2=[   // El llistat es pot fer en una sola línia o com aquest:
        "a",
        "b",
        "c"
    ]

    var excel = [
        ["Nom", "Edat", "és soci", "telèfon"],
        ["Jordi", 55, true,"404444999"],
        ["Adelaida", 45, false, "898989889"],
        ["Laura", 34, true, "353537589"]
    ]

    function mostraInfoExcel(fila, pos, original){
            console.log(original)
        if(pos == 0){  // Dos signes == és per dir igual; diferent és !=
            console.log("Estem a la fila 0")
        }else{
            console.log("No estem a la fila 0")
            console.log(fila,pos)
            console.log("Nom soci:", fila[0])
            console.log("Edat", fila[1])
            console.log(original[0][0], fila[0])


        }
    }

    excel.forEach(mostraInfoExcel)

}
