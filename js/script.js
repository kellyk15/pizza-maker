// javascript startscherm
const htmlschermbegin = document.querySelector("#startscherm")

let starttekst = document.querySelector("#tekst")
const startschermknop = document.getElementById("startscherm-knop")

function NaamtekstEnVolgendeScherm (){
    Naamgebruiker = document.getElementById("naam").value;
    document.querySelector("#tekst").textContent = ("Hey " + Naamgebruiker + ", ik heb honger")
    htmlschermbegin.classList.add("disable")
    let muziek = new Audio("soundtrack.mp3")
    muziek.play()
}

startschermknop.addEventListener('click',NaamtekstEnVolgendeScherm)

// javascript beginscherm
StartKnop = document.querySelector("#start-knop")
const htmlscherm1 = document.querySelector("#scherm1")

function NaarScherm2(){
    htmlscherm1.classList.add("disable")
    console.log("hey");
    htmlscherm3.classList.remove("disable")
}

StartKnop.addEventListener('click',NaarScherm2)

// javascript samenstellenscherm
htmlSaus = document.querySelector("#box-saus")
htmlKaas = document.querySelector("#box-kaas")
htmlSalami = document.querySelector("#box-salami")
htmlMushroom = document.querySelector("#box-mushroom")


let SausOpPizza = "images/pizza-saus.png"
let sausElement = document.querySelector("#saus-topping")

let KaasOpPizza = "images/pizza-kaas.png"
let kaasElement = document.querySelector("#kaas-topping")

let MushroomOpPizza = "images/pizza-mushroom.png"
let mushroomElement = document.querySelector("#mushroom-topping")

let SalamiOpPizza = "images/pizza-salami.png"
let salamiElement = document.querySelector("#salami-topping")

let meldingerror = "images/errormelding.png"
let errorElement = document.querySelector("#errormelding")

let salamistatus = true
let kaasstatus = true
let mushroomstatus = true
let sausstatus = true


function clicksaus(){
    if (sausstatus == true){
        sausElement.src = SausOpPizza
        sausstatus = false
    } else {
        sausElement.src = ""
        sausstatus = true
    }
}


function clickkaas(){
    if (kaasstatus == true){
        kaasElement.src = KaasOpPizza
        kaasstatus = false
    } else {
        kaasElement.src = ""
        kaasstatus = true
    }
}

function clicksalami(){
    if (salamistatus == true){
        salamiElement.src = SalamiOpPizza
        salamistatus = false
    } else {
        salamiElement.src = ""
        salamistatus = true
    }
}

function clickmushroom(){
    if (mushroomstatus == true){
        mushroomElement.src = MushroomOpPizza
        mushroomstatus = false
    } else {
        mushroomElement.src = ""
        mushroomstatus = true
    }
}

htmlSaus.addEventListener('click',clicksaus)
htmlKaas.addEventListener('click',clickkaas)
htmlSalami.addEventListener('click',clicksalami)
htmlMushroom.addEventListener('click',clickmushroom)


VerderKnop = document.querySelector("#verdergaan")
const htmlscherm3 = document.querySelector("#scherm3")

function NaarScherm4(){
    if (sausstatus== true || kaasstatus == true) {
        errorElement.src = meldingerror
    } else {
        htmlscherm3.classList.add("disable")
        console.log("hey");
        htmlscherm4.classList.remove("disable")
    }
}

VerderKnop.addEventListener('click',NaarScherm4)

// dblclick
// onload

// javascript ovenDI
let vuurfoto = "images/oven-vuur.png"
let brandfoto = "images/oven-aan1.png"
let brandElement = document.querySelector("#oven-aan")
let vuurElement = document.querySelector("#oven-vuur")
let ovenstartknop = document.querySelector("#oven-start")
let ovenstopknop = document.querySelector("#oven-stop")

const htmlschermeinde = "images/eindscherm.png" 
let startElement = document.querySelector("#terugstart")

function NaarScherm1(){
    htmlscherm1.classList.remove("disable")
    htmlscherm4.classList.add("disable")
    vuurElement.classList.add("disable")
}

function vuur (){
    tijd = setTimeout(brand, 3000);
    vuurElement.src = brandfoto
    console.log("het is aan")
}


const htmlscherm4 = document.querySelector("#scherm4")

function brand (){
    vuurElement.src = vuurfoto
    setTimeout(NaarScherm1,5000);
}


function vuurUit (){
    clearTimeout(tijd);
    setTimeout(naareinde,1000)
}

function naareinde (){
    startElement.src = htmlschermeinde
}

ovenstartknop.addEventListener ("click",vuur)
ovenstopknop.addEventListener ("click",vuurUit)
