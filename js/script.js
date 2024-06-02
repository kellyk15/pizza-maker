// javascript schermen en knoppen
const htmlschermbegin = document.querySelector("#startscherm")

let starttekst = document.querySelector("#introtekst")
const startschermknop = document.querySelector("#startscherm-knop")

const StartKnop = document.querySelector("#start-knop")
const htmlscherm1 = document.querySelector("#scherm1")

const VerderKnopSamenstellenscherm = document.querySelector("#verdergaan")
const htmlscherm3 = document.querySelector("#scherm3")

const htmlscherm4 = document.querySelector("#scherm4")
const htmlschermeinde = document.querySelector ("#eindscherm")

// knoppen samenstellenscherm
htmlSaus = document.querySelector("#box-saus")
htmlKaas = document.querySelector("#box-kaas")
htmlSalami = document.querySelector("#box-salami")
htmlMushroom = document.querySelector("#box-mushroom")

let sausElement = document.querySelector("#saus-topping")
let kaasElement = document.querySelector("#kaas-topping")
let mushroomElement = document.querySelector("#mushroom-topping")
let salamiElement = document.querySelector("#salami-topping")
let errorElement = document.querySelector("#errormelding")

let salamioven = document.querySelector("#salami-oven")
let mushroomoven = document.querySelector("#mushroom-oven")

// let SausOpPizza = "images/pizza-saus.png"
// let SalamiOpPizza = "images/pizza-salami.png"
// let MushroomOpPizza = "images/pizza-mushroom.png"
// let KaasOpPizza = "images/pizza-kaas.png"
// let meldingerror = "images/errormelding.png"


// javascript startscherm
function NaamtekstEnVolgendeScherm (){
    Naamgebruiker = document.querySelector("#naam").value;
    document.querySelector("#introtekst").textContent = ("Hey " + Naamgebruiker + ", ik heb honger")

    htmlschermbegin.classList.add("disable")

    let muziek = new Audio("soundtrack.mp3")
    muziek.play()
}

startschermknop.addEventListener('click',NaamtekstEnVolgendeScherm)

// javascript beginscherm

function NaarScherm2(){
    htmlscherm1.classList.add("disable")
    console.log("hey");
    htmlscherm3.classList.remove("disable")
}

StartKnop.addEventListener('click',NaarScherm2)

// javascript samenstellenscherm
let salamistatus = true
let kaasstatus = true
let mushroomstatus = true
let sausstatus = true


function clicksaus(){
    if (sausstatus == true){
        sausElement.src = "images/pizza-saus.png"
        sausstatus = false
    } else {
        sausElement.src = ""
        sausstatus = true
    }
}


function clickkaas(){
    if (kaasstatus == true){
        kaasElement.src = "images/pizza-kaas.png"
        kaasstatus = false
    } else {
        kaasElement.src = ""
        kaasstatus = true
    }
}

function clicksalami(){
    if (salamistatus == true){
        salamiElement.src = "images/pizza-salami.png"
        salamioven.src = "images/oven-salami.png"
        salamistatus = false
    } else {
        salamiElement.src = ""
        salamioven = ""
        salamistatus = true
    }
}

function clickmushroom(){
    if (mushroomstatus == true){
        mushroomElement.src = "images/pizza-mushroom.png"
        mushroomoven.src = "images/oven-mushroom.png"
        mushroomstatus = false
    } else {
        mushroomElement.src = ""
        mushroomoven.src = ""
        mushroomstatus = true
    }
}

htmlSaus.addEventListener('click',clicksaus)
htmlKaas.addEventListener('click',clickkaas)
htmlSalami.addEventListener('click',clicksalami)
htmlMushroom.addEventListener('click',clickmushroom)


function NaarScherm4(){
    if (sausstatus== true || kaasstatus == true) {
        errorElement.src = "images/errormelding.png"
    } else {
        htmlscherm3.classList.add("disable")
        console.log("hey");
        htmlscherm4.classList.remove("disable")
    }
}

VerderKnopSamenstellenscherm.addEventListener('click',NaarScherm4)

// dblclick
// onload

// javascript oven
let brandElement = document.querySelector("#oven-aan")
let vuurElement = document.querySelector("#oven-vuur")

const ovenstartknop = document.querySelector("#oven-start")
const ovenstopknop = document.querySelector("#oven-stop")


function NaarScherm1(){
    htmlscherm1.classList.remove("disable")
    htmlscherm4.classList.add("disable")
    vuurElement.classList.add("disable")
    clearTimeout(tijd);
}

function vuur (){
    tijd = setTimeout(brand, 3000);
    vuurElement.src = "images/oven-aan1.png"
    console.log("het is aan")
}


function brand (){
    vuurElement.src = "images/oven-vuur.png"
    setTimeout(NaarScherm1,5000);
}


function vuurUit (){
    clearTimeout(tijd);
    setTimeout(naareinde,1000)
}


function naareinde (){
    htmlschermeinde.classList.remove("disable")
    htmlscherm4.classList.add("disable")
}

ovenstartknop.addEventListener ("click",vuur)
ovenstopknop.addEventListener ("click",vuurUit)

