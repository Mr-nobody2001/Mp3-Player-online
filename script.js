let varBotoes = document.getElementById("idControle2").children

let varAudio = document.getElementById("idAudio").children

let varRange = document.getElementById("idRange")

let varFoto = document.getElementById("idFoto").children

let varFaixas = document.getElementById("idFaixas")

let varT1 = document.getElementById("idT1")

let varT2 = document.getElementById("idT2")

let varMu = document.getElementById("idMu").children

let varArt = document.getElementById("idArt").children

let n = 0

let n2 = 0

let n3 = 0

let n4 = 0

let n5 = 0

let cor = ["#7ED731","#8AE79C", "#EF55A4", "#309DE2", "#CE012C", "#01818E", "#CA636A", "#00C3A3", "#C50555", "#CF5270"]

let varMin = 0

let varMin2 = 0

/* Funções que mudam o pointer */

for (let i of varBotoes) {

    i.addEventListener("mouseover", function () {

        i.style.cursor = "pointer"

    })
}

/* Funções referentes a barra (range) */

varRange.addEventListener("input", function () {

    varAudio[n3].currentTime = varRange.value

    varAudio[n3].pause()

    this.addEventListener("change", function () {

        n == 0 ? varAudio[n3].pause() : varAudio[n3].play()

        n == 0 ? varBotoes[2].src = "play-button.png" : varBotoes[2].src = "pausa-button.png"
    })

})

function funRange() {
    varRange.value = varAudio[n3].currentTime

    varRange.max = varAudio[n3].duration

    if (varAudio[n3].ended == true) {

        n4 == 1 ? n4 += 0 : funAvançar()
    }
}

setInterval(funRange, 1)

function funTempo() {
    
    let varMinI = varAudio[n3].currentTime

    let varMinI2 = varAudio[n3].duration

    if (varMinI >= 0 && varMinI <= 60){

        varMin = 0
    }

    else if (varMinI >= 60 && varMinI <= 120){

        varMin = 1
    }

    else if (varMinI >= 120 && varMinI <= 180){

        varMin = 2
    }

    else if (varMinI >= 180 && varMinI <= 240){

        varMin = 3
    }

    else if (varMinI >= 240 && varMinI <= 300){

        varMin = 4
    }

    else if (varMinI >= 300 && varMinI <= 360){

        varMin = 5
    }

    else if (varMinI >= 360 && varMinI <= 420){

        varMin = 6
    }

    else if (varMinI >= 420 && varMinI <= 480){

        varMin = 7
    }

    else if (varMinI >= 480 && varMinI <= 540){

        varMin = 8
    }

    else if (varMinI2 >= 540 && varMinI2 <= 600){

        varMin = 9
    }

    else if (varMinI2 >= 600 && varMinI2 <= 660){

        varMin = 10
    }



    if (varMinI2 >= 0 && varMinI2 <= 60 ){

        varMin2 = 0
    }

    else if (varMinI2 >= 60 && varMinI2 <= 120){

        varMin2 = 1
    }

    else if (varMinI2 >= 120 && varMinI2 <= 180){

        varMin2 = 2
    }

    else if (varMinI2 >= 180 && varMinI2 <= 240){

        varMin2 = 3
    }

    else if (varMinI2 >= 240 && varMinI2 <= 300){

        varMin2 = 4
    }

    else if (varMinI2 >= 300 && varMinI2 <= 360){

        varMin2 = 5
    }

    else if (varMinI2 >= 360 && varMinI2 <= 420){

        varMin2 = 6
    }

    else if (varMinI2 >= 420 && varMinI2 <= 480){

        varMin2 = 7
    }

    else if (varMinI2 >= 480 && varMinI2 <= 540){

        varMin2 = 8
    }

    else if (varMinI2 >= 540 && varMinI <= 600){

        varMin2 = 9
    }

    else if (varMinI >= 600 && varMinI <= 660){

        varMin2 = 10
    }
    
    let varSeg = Math.floor(varAudio[n3].duration % 60)

    let varSeg2 = Math.floor(varAudio[n3].currentTime % 60)

    varT2.innerText = varMin2 + ":" + varSeg

    varT1.innerText = varMin + ":" + varSeg2

    if (varSeg < 10) {

        varT2.innerText = varMin2 + ":0" + varSeg

    }

    if (varSeg2 < 10) {

        varT1.innerText = varMin + ":0" + varSeg2

    }
}



setInterval(funTempo, 1)
/* Funções referentes ao botão play/pause */

varBotoes[2].addEventListener("click", function () {

    varAudio[n3].play()

    varAudio[n3].paused == true ? varBotoes[2].src = "play-button.png" : varBotoes[2].src = "pausa-button.png"

    if (n == 1) {

        varAudio[n3].pause()

        varAudio[n3].paused == true ? varBotoes[2].src = "play-button.png" : varBotoes[2].src = "pausa-button.png"

        n -= 2
    }

    ++n

})

/* Funções referentes aos botões avançar/retroceder */

varBotoes[1].addEventListener("click", function () {

    if (n3 > 0) {

        --n3

        varAudio[n3 + 1].pause()

        varAudio[n3].play()

        varAudio[n3 + 1].currentTime = 0

        varBotoes[2].src = "pausa-button.png"

        n = 1

        varFoto[n3 + 1].setAttribute("class", "imgI")

        varFoto[n3].setAttribute("class", "imgV")

        varMu[n3 + 1].setAttribute("class", "imgI")

        varMu[n3].removeAttribute("class")

        varArt[n3 + 1].setAttribute("class", "imgI")

        varArt[n3].removeAttribute("class")

        document.body.style.backgroundColor = cor[n3]

    }

})

function funAvançar() {

    if (n3 < varFoto.length - 1 && n3 >= 0) {

        ++n3

        varAudio[n3 - 1].pause()

        varAudio[n3].play()

        varAudio[n3 - 1].currentTime = 0

        varBotoes[2].src = "pausa-button.png"

        n = 1

        varFoto[n3 - 1].setAttribute("class", "imgI")

        varFoto[n3].setAttribute("class", "imgV")

        varMu[n3 - 1].setAttribute("class", "imgI")

        varMu[n3].removeAttribute("class")

        varArt[n3 - 1].setAttribute("class", "imgI")

        varArt[n3].removeAttribute("class")

        document.body.style.backgroundColor = cor[n3]

    }

}

varBotoes[3].addEventListener("click", funAvançar)

/* Funções referente ao botão loop */

varBotoes[4].addEventListener("click", function () {
    for (let i of varAudio) {

        i.setAttribute("loop", "")

        varBotoes[4].src = "repetir-button.png"

    }

    if (n2 == 1) {

        for (let i of varAudio) {

            i.removeAttribute("loop")

            varBotoes[4].src = "nrepetir-button.png"

        }

        n2 -= 2

    }

    ++n2

})

/* Função referente ao botão random */

function funRandom() {

    if (varAudio[n3].ended == true && n4 == 1) {

        let varRandom = 0

        varRandom = Math.round(Math.random() * (varAudio.length - 1))

        n3 == varRandom ? varRandom = Math.round(Math.random() * (varAudio.length - 1)) : varRandom += 0

        varAudio[n3].pause()

        varAudio[varRandom].play()

        varAudio[n3].currentTime = 0

        varBotoes[2].src = "pausa-button.png"

        n = 1

        varFoto[n3].setAttribute("class", "imgI")

        varFoto[varRandom].setAttribute("class", "imgV")

        varMu[n3].setAttribute("class", "imgI")

        varMu[varRandom].removeAttribute("class")

        varArt[n3].setAttribute("class", "imgI")

        varArt[varRandom].removeAttribute("class")

        document.body.style.backgroundColor = cor[varRandom]
        
        n3 = varRandom

    }

}

setInterval(funRandom, 1)

function funRandom2() {

    this.src = "random-button.png"

    if (n4 == 1) {

        this.src = "nrandom-button.png"

        n4 -= 2

    }

    ++n4
}

varBotoes[0].addEventListener("click", funRandom2)



    

