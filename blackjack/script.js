
let player = {
    name : "v",
    chips : 145

}
let cards = [] //array
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
   let randomNum = Math.floor(Math.random()*13)+1
//    if (randomNum > 10){
//     return 10
//    }
//    else if(randomNum === 1){
//     return 11
//    }
//    else{
//     return randomNum
//    }

    return randomNum > 10 ? 10 : randomNum === 1 ? 11 : randomNum
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){

    // cardsEl.textContent = "cards:" + cards[0]+" " + cards[1]
    // cardsEl.textContent = "Cards:"
    // for(let i=0; i < cards.length ;i++){
    //     cardsEl.textContent += cards[i] + " "
    // }

    cardsEl.innerHTML = ""
    cards.forEach(cards =>{
        let cardDiv = document.createElement("div")
        cardDiv.classList.add("card")
        cardDiv.textContent = cards
        cardsEl.appendChild(cardDiv)
    })

    sumEl.textContent = "sum:" +sum
    if (sum <= 20){
        message="Do you want to draw a new card? 🙂"
    } else if (sum === 21){
        message="Wohoo! You've got Blackjack! 🥳"
        hasBlackJack= true
    } else{
        message="You're out of the game! 😭"
        isAlive = false
    }

    messageEl.textContent = message
    

}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()

    }
   

}

function resartGame(){
    cards = []
    sum = 0
    hasBlackJack = false
    isAlive = true
    message.textContent = "Want a play a round"
    sumEl.textContent = "Sum : 0"
    cardsEl.innerHTML = ""
}


