// LOOPS
 
const wordArr = [
    " deTTe",
    "er  ",
    " tekST ",
    "som",
    "må",
    "rydDES   ",
    "Opp",
    "   i   ",
  ];

  const cleanedArr = [];

  function wordCleaner(str) {
    return str.trim().toLowerCase() //Funksjon som returnerer to methods for å fjerne whitespace, og gjøre alle bokstaver små
  }
  for (let i = 0 ; i < wordArr.length ; i++) { //Loop som kjører wordCleaner funksjonen på hele arrayet, og pusher indexen inn i det nye arrayet.
    cleanedArr.push(wordCleaner(wordArr[i]))
  }

   console.log(cleanedArr.join(" ")) //logger til det nye arrayet, og concatinater stringen med space i mellom



  /*
   
  - Skriv en funksjon som heter wordCleaner, som tar i mot en string, og returnerer stringen med whitespace
  fjernet fra begynnelse og slutten, og alt gjort om til små bokstaver.
   
  - Skriv en loop som looper gjennom wordArr og kjører wordCleaner på hvert ord, og pusher
  dette ordet inn i cleanedArr
   
  - Tilslutt, kombiner cleanedArr sammen til en string, og konsoll logg denne.
   
  Konsoll loggen skal se sånn ut:
   
  "dette er tekst som må ryddes opp i"
   
  Lykke til!
   
  Spør meg på Discord hvis du står fast :)
   
  */