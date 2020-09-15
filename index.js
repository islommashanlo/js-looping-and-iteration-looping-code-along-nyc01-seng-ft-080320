// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
let messages = []
 
function writeCards(names, occasion) {
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
  }
 
  return messages;
}
 
function countDown(i) {
while (i > 0) {
    console.log(i);
    i -= 1;
    }
    console.log( i )
}