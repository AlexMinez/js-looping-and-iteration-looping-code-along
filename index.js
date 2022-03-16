

function writeCards(cardNames,eventName){
    const messages = []
    for (let i = 0; i<cardNames.length; i++){
       const message = `Thank you, ${cardNames[i]}, for the wonderful ${eventName} gift!`;
       messages.push(message)
    } return messages
}



function countDown(){

    for (let i = 0; i <= 10; i++ ){
        console.log(i)
    }

}
console.log(writeCards())