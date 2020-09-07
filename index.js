let questions = [
  {
    ques: "1. Who has won the Ballon d'Or most no of times",
    options: ["Neymar", "Ronaldo", "Lionel Messi", "Suarez"],
    correctIndex: 2
  },
  {
    ques: "2. Who has won the Cricket World Cup most no of times",
    options: ["West Indies", "Australia", "New Zealand", "India"],
    correctIndex: 1
  },
  {
    ques:
      "3. The West Indies hit 421 batting first in their warm up match versus who?",
    options: ["New Zealand", "India", "Pakistan", "Australia"],
    correctIndex: 0
  },
  {
    ques:
      "4. Which among the following is/are true regarding the ratio of the national flag?",
    options: [
      "The ratio of the length to the height of the flag shall be 3:2",
      "The ratio of the length to the width of the flag shall be 3:2",
      "The ratio of the length to the height of the flag shall be 2:3",
      "Both (a) and (b)"
    ],
    correctIndex: 3
  },
  {
    ques: "5. When the Jallianwala Bagh Massacre took place?",
    options: [
      "10 April, 1917",
      "13 April, 1918",
      "9 April, 1916",
      "13 April, 1919"
    ],
    correctIndex: 3
  }
];
let index = 0;
let score = 0;
const nextQues = () => {
  if (index > questions.length - 1) {
    gameOver();
    return;
  } else {
    let question = document.getElementById("question");
    question.innerText = questions[index].ques;
    for (let i = 0; i < 4; i++) {
      let option = document.getElementById("option-" + (i + 1));
      option.innerText = questions[index].options[i];
      option.className = "blue-bg";
      if (questions[index].correctIndex === i) {
        option.onclick = (e) => {
          e.target.className = "right";
          score++;
          e.target.onclick = null;
        };
      } else {
        option.onclick = (e) => {
          e.target.classList.remove("blue-bg");
        };
      }
    }
    index++;
    setTimeout(nextQues, 5000);
  }
};
nextQues();
function gameOver() {
  document.getElementById("gameOver").classList.remove("hidden");
  document.querySelector(".timer").style.animation = "none";
  document.querySelector(".timer").style["background-color"] = "gray";
  document.getElementById("final-score").innerText = score;
}