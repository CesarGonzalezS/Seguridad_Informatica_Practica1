function calcularIMC() {
    var peso = parseFloat(document.getElementById("kg").value);
    var altura = parseFloat(document.getElementById("height").value);

    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, ingrese valores numéricos válidos para peso y altura.");
        return;
    }

    var imc = peso / (altura * altura);
    document.getElementById("result").innerHTML = "Su IMC es: " + imc.toFixed(2);

    pintarTablaCategorias(imc);
}

function pintarTablaCategorias(imc) {
    var Bajopeso = document.getElementById("Bajopeso");
    var Normal = document.getElementById("Normal");
    var Sobrepeso = document.getElementById("Sobrepeso");
    var Obsesidad = document.getElementById("Obsesidad");

    // Verificar si los elementos existen antes de acceder a su classList
    if (Bajopeso && Normal && Sobrepeso && Obsesidad) {
        // Remover clases 'active'
        Bajopeso.classList.remove("active");
        Normal.classList.remove("active");
        Sobrepeso.classList.remove("active");
        Obsesidad.classList.remove("active");

        // Asignar clase 'active' según la categoría de peso
        if (imc < 18.5) {
            Bajopeso.classList.add("active");
        } else if (imc >= 18.5 && imc < 24.9) {
            Normal.classList.add("active");
        } else if (imc >= 24.9 && imc < 29.9) {
            Sobrepeso.classList.add("active");
        } else {
            Obsesidad.classList.add("active");
        }
    }
}
