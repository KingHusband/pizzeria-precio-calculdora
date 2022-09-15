let precioTam = {
    pequeña: 4, mediana: 8, familiar: 10
}

let IngreA = ["jamón","pepperoni","maíz","queso amarillo","champiñón","aceitunas negras",
"tajadas","pesto","queso cheddar"]

let IngreB = ["cebolla","pimentón","tomate","piña"]

let IngreC = ["tocineta"]

let precioIngreP = {PA: 1, PB: 0.5, PC: 2}

let precioIngreMF = {MFA: 2, MFB: 1, MFC: 4}

let monto;

let tamaño = prompt(`Dime, ¿de cuál tamaño quieres tu pizza?
Escribe P para pequeña, M para mediana y F para familiar.`);

if (tamaño == "P" || tamaño == "p") {
    monto = precioTam["pequeña"];

    let grupo = prompt(`¿Agregarás algo extra a tu pizza?
De ser si, dime de cuál grupo: A, B o C.
Ingresa N si ya no agregarás nada.`);

    if (grupo == "A" || grupo == "a") {
        while (extra == "A" || extra == "a") {
            let extra = prompt(`¿Cuál ingrediente del grupo A deseas agregar a tu pizza?
        Ingresa N si no quieres nada de este grupo.`);
            monto += 1;
        }
    }
    while (grupo == "B" || grupo == "b") {
        let extra = prompt(`¿Cuál ingrediente del grupo B deseas agregar a tu pizza?
    Ingresa N si no quieres nada de este grupo.`);
        monto += .5;
    }
    if (grupo == "C" || grupo == "c") {
        let extra = precioIngrePeqC["tocineta"];
        monto += 2;
    }
    alert(`Tu pizzá es ${tamaño}, de ${extra}. El valor de tu pizza es de $${monto}`);
}
else if (tamaño == "M" || tamaño == "m") {
    monto = precioTam["mediana"];

    let precioIngreMedFam = ["precioIngreMedFamA","precioIngreMedFamB","precioIngreMedFamC"]

    let precioIngreMedFamA = {
        jamón: 2, pepperoni: 2, maíz: 2, quesoAmarillo: 2, champiñón: 2, 
        aceitunasNegras: 2, tajadas: 2, pesto: 2, quesoCheddar: 2
    }

    let precioIngreMedFamB = {
        cebolla: 1, pimentón: 1, tomate: 1, piña: 1
    }

    let precioIngreMedFamC = {
        tocineta: 4
    }

    let precioBebida = {
        cocaCola1YMedio: 2, té1YMedio: 2, agua1YMedio: 1
    }
} else if (tamaño == "F" || tamaño == "f") {
    monto = precioTam["familiar"];

    let precioIngreMedFam = ["precioIngreMedFamA","precioIngreMedFamB","precioIngreMedFamC"]

    let precioIngreMedFamA = {
        jamón: 2, pepperoni: 2, maíz: 2, quesoAmarillo: 2, champiñón: 2, 
        aceitunasNegras: 2, tajadas: 2, pesto: 2, quesoCheddar: 2
    }

    let precioIngreMedFamB = {
        cebolla: 1, pimentón: 1, tomate: 1, piña: 1
    }

    let precioIngreMedFamC = {
        tocineta: 4
    }

    let precioBebida = {
        cocaCola1YMedio: 2, té1YMedio: 2, agua1YMedio: 1
    }
} else {
    alert("Por favor, indícame un tamaño, correctamente escrito. (pequeña, mediana o familiar).")
}

let bebida = prompt("¿Qué deseas tomar?");