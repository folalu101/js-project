// business logic



// // let wordCounter = " how are you doing my dear friend, i miss you so much for 12 years and 75 days. ";

// // count total number of word in a sentence
// function wordCounter(text){
    
//     if (text.trim().length === 0){
//         return 0;
//     }
//     // console.log(word);
//     let wordCount = 0;
//     const wordArray = text.split(" ");
//     wordArray.forEach(function(words){
//         if (!Number(words)){
//             wordCount ++;
//         }
//         return wordCounter;
//     });
// }

// // count total number of sentence in a passage

// function sentenceCounter(passage){
//     if (passage.trim().length === 0){
//         return 0;
//     }
//     let sentenceCount = 0;
//     const sentenceArray = passage.split(" ");
//     sentenceArray.forEach(function(passages){
//         if (!Number(passages)){
//             sentenceCount ++;
//         }
//         return sentenceCounter;
//     });
    
// }

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
let notWord = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
function offensiveWords(word){
    let badWord = word.split(" ");
    nonOffensive = [];
    badWord.forEach(function(element){
        if(notWord.includes(element)){
            nonOffensive.push("this word is not good");
            } else {
                nonOffensive.push(element);
            }
        });
    }
    let finalWord = nonOffensive.join(" ");
    return finalWord;


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

// UI Logic
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

        // Mostly used words
        // let most = [];
        // let mostUsed = text.split(" ");
        // mostUsed.forEach(function(element){
        //     most.push(element);
        // });
        // most.forEach(function(element){
        //     let str = "<li>";
        //     $("#most").html( str + element + "" + most);
        // });

    });
});