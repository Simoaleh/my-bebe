const button =document.querySelector('#button');
const cavnvas =document.querySelector('#confetti');
const jsConfetti = new JSConfetti();
button.addEventListener('click',()=>{
    jsConfetti.addConfetti({emojis: ['💖'],
      emojiSize: 30,confettiNumber:15})
      jsConfetti.addConfetti({emojis: ['🩷'],
      emojiSize: 30,confettiNumber:15})
      jsConfetti.addConfetti({emojis: ['💗'],
      emojiSize: 30,confettiNumber:15})
})