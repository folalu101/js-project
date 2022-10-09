
// UI logic
$(document).ready(function(){
    $("#word-count").submit(function(event){
        event.preventDefault();
        
        const text = $("#text-sentence").val();
        const word = $("#word").val();
        const wordCount = wordCounter(text);
        const occurencesOfWord = numberOfOccurencesInText(word, text);
        const nonOffensive = offensiveWords(text);
        const list = topThreeWords(text);

        $("#total-count").append(wordCount);
        $("#selected-word").append(occurencesOfWord);
        $("#bolded-text").append(boldText(word, text));
        $("#most").append(list);
        $("#offensive-word").append(offensiveWords(text));
        $("#offensive-word").append(nonOffensive(text));

        

    })

    // mostly used words
    // let mostly = [];
    // let mostUsed = text.split(" ");
    // mostUsed.forEach(function(element){
    //     mostUsed.push(element);
    // });
    // mostUsed.forEach(function(element){
    //     let str = "<li>";
    //     $("#most").html( str + element + " " + mostly);

    // });


});

// business logic

// no inputted word in the passage
function noInputtedWord(word, text){
    ((word.trim().length === 0) || (text.trim().length === 0))
    return 0;
}

// word counter
function wordCounter(text){
    if(text.trim().length === 0){

    }
    let wordCount = 0;
    const WordArray = text.split(" ");
    WordArray.forEach(function(element){
        if(!Number(element)){
            wordCount++;
        }
    });
    return wordCount;
}

// number of occurence
function numberOfOccurencesInText(word, text){
    if(word.trim().length === 0){
        return 0;
    }
    const wordArray = text.split(" ");
    let wordCount = 0;
    wordArray.forEach(function(element){
        if(element.toLowerCase().includes(word.toLowerCase())){
            wordCount++;
        }
    });
    return wordCount;
}
    
// function to bold text in sentence
function boldText(word, text){
    if(noInputtedWord(word, text)){
        return "";
    }
    let htmlString = "<p>";
    let textArray = text.split(" ");
    textArray.forEach(function(element, index){
        if(element.toLowerCase().includes(word.toLowerCase())){
            htmlString = htmlString.concat(("<b>" + word + "</b>"));
        } else {
            htmlString = htmlString.concat(element);
        }
        if(index !== (textArray.length -1)){
            htmlString = htmlString.concat(" ");
        }
    });
    return htmlString + "</p>";
}

// offensive words
let badWord = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
function offensiveWords(word){
    let badWords = word.split(" ");
    nonOffensive = [];
    badWords.forEach(function(element){
        if(badWord.includes(element)){
            nonOffensive.push("this word is not good");
            } else {
                nonOffensive.push(element);
            }
        });
    }
    // let finalWord = nonOffensive.join(" ");
    // return finalWord;


// most common word
function topThreeWords(text) {
    // if (errorCheck(text)) {
    //   return 0;
    // }
    // let text = filterSentence(text);
    let textArray = text.split(" ");
    let topmost = 0;
    let topmostWord = "";
    let secondMost = 0;
    let secondWord = "";
    let thirdMost = 0;
    let thirdWord = "";
    let result = "";
    textArray.forEach(function (element) {
      let numberOfTimes = numberOfOccurencesInText(element, text);
      if (numberOfTimes > topmost) {
        topmost = numberOfTimes;
        topmostWord = element;
      } else if (numberOfTimes > secondMost) {
        secondMost = numberOfTimes;
        secondWord = element;
      } else if (numberOfTimes > thirdMost) {
        thirdMost = numberOfTimes;
        thirdWord = element;
      }
      result = topmostWord + " " + topmost + "<br>" + secondWord + " " + secondMost + "<br>" + thirdWord + " " + thirdMost;
    });
    return result;
  }




  