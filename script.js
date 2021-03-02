let game = document.querySelector(".game")
let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let dlrFirstCard = document.getElementById('dlrFirstCard')
let dlrSecondCard = document.getElementById('dlrSecondCard')
let dlrFCard = document.getElementById('dlrFCard')
let dlrSCard = document.getElementById('dlrSCard')
let plrFCard = document.getElementById('plrFCard')
let plrSCard = document.getElementById('plrSCard')
let totalDlr = document.getElementById('totalDlr')
let totalPlr = document.getElementById('totalPlr')
let dealer = document.getElementById("dealer")
let player = document.getElementById("player")

function CheckValueAndReturnTotal(v1,v2){
  let total = 0;
  let val1 = v1;
  let val2 = v2;
  if(val1 === "ACE"){
    val1 = "11"
   
  }else if(val2 === "ACE"){
     val2 = "11"
  
  }
  
  else if (val1 === "KING" || val1 === "QUEEN" || val1 === "JACK")  {
    val1 = "10"
   
  } else if(val2 === "KING" || val2 === "QUEEN" || val2 === "JACK"){
    val2 = "10"
    
  }
  else {
    val1 = parseInt(val1) 
      val2 =  parseInt(val2)
  }
  total = parseInt(val1)  + parseInt(val2)
  return total;
}

function dealCardsDealer(){
   fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=2')
  .then(res => res.json())
  .then(data =>{
    console.log(data)
     let entries = Object.entries(data.cards);
     console.log(entries)
     
     let firstCardPic = data.cards[0].image
     
     let secondCardPic = data.cards[1].image
     dlrFCard.setAttribute("src",firstCardPic )
      dlrSCard.setAttribute("src",secondCardPic )
    
     
     totalDlr.innerHTML = CheckValueAndReturnTotal(entries[0][1].value,entries[1][1].value)
    })
    
}

function dealCardsPlayer(){
   fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=2')
  .then(res => res.json())
  .then(data =>{
    console.log(data)
    let entries = Object.entries(data.cards);
     // console.log(entries)
    
     let firstCardPic = data.cards[0].image
     
     let secondCardPic = data.cards[1].image
     plrFCard.setAttribute("src",firstCardPic )
      plrSCard.setAttribute("src",secondCardPic )
     totalPlr.innerHTML = CheckValueAndReturnTotal(entries[0][1].value,entries[1][1].value)
     
    })
    
}

function dealCards(){
  player.style.display = "block";
  dealer.style.display = "block"
  dealCardsDealer()
  dealCardsPlayer()
  
}

function resetGame(){
  player.style.display = "none";
  dealer.style.display = "none"
}

// getData()
btn2.addEventListener("click", resetGame)
btn.addEventListener("click", dealCards)