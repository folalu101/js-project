# TEXT ANALIZER 

Test: "It should count total number of word in the passage."
Code:
const word = "hello my dear friend, how are you doing my friend?";
wordCounter(word);
Expected Output: 10

Test: "It should count total number of sentence in the passage."
Code:
const sentence = "hello there friend. How is life treating you? I'm happy to hear from you today.";
wordCounter(sentence);
Expected Output: 3

Test: "It should count total number of time a specific word comes up."
Code:
const specificWord = "hello there friend. How is life treating you? I'm happy to hear from you today.";
wordCounter(specificWord);
Expected Output: 3