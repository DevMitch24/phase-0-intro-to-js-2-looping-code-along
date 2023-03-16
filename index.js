
function writeCards(names) {
    const messages = [];
    for (const name of names) {
      messages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
    }
    return messages;
  }
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }