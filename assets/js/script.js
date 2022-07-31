let buttons = document.getElementsByTagName("button");
let arr = [];
let y = [];
let x = [];


//button event listeners and category choice
for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "culture" || "history" || "science" || "sports");
            category = this.getAttribute("data-type");
            chooseCat(category);
    });
}


// Category choice and make an array for the game
function chooseCat(category) {

    if (category === "culture") {
        let questions = questionList.filter(obj => {
            return obj.categories === (culture);
          });
          questions.sort(() => Math.random() - 0.5); 
          for (let i = 0; i < 4; i++){
            arr.push(questions[0]);
            questions.shift();
        }

    } else if (category === "history") {
        let questions = questionList.filter(obj => {
            return obj.categories === history;
          });
          questions.sort(() => Math.random() - 0.5); 
          for (let i = 0; i < 4; i++){
            arr.push(questions[0]);
            questions.shift();
        }

    } else if (category === "science") {
        let questions = questionList.filter(obj => {
            return obj.categories === science;
          });
          questions.sort(() => Math.random() - 0.5); 
          for (let i = 0; i < 5; i++){
            arr.push(questions[0]);
        }    

    } else if (category === "sports") {
        let questions = questionList.filter(obj => {
            return obj.categories === sports;
          });
          questions.sort(() => Math.random() - 0.5);
          for (let i = 0; i < 5; i++){
            arr.push(questions[0]);
            questions.shift();
        }

    } else
    alert(`Unknown game type: ${category}`);

    runGame();
}


// Game 
function runGame() {
    document.getElementById("categories").classList.add("none");
    document.getElementById("game").classList.remove("none");
    document.getElementById("back").classList.add("none");
    document.getElementById("question").innerText = arr[0].question;
    document.getElementById("answer1").addEventListener("click", runGame);
    document.getElementById("answer2").addEventListener("click", runGame);
    document.getElementById("answer3").addEventListener("click", runGame);
    document.getElementById("answer4").addEventListener("click", runGame);
    x = arr[0].wrong_answer;
    let z = arr[0].answer;
    y.push(document.getElementById("answer1"));
    y.push(document.getElementById("answer2"));
    y.push(document.getElementById("answer3"));
    y.push(document.getElementById("answer4"));
    shuffleStuff();
    
    //puts wrong answers in divs
    for (let i = 0; i < 4; i++) {
        y[i].innerText = x[i];
    }
    // sets right answer in w/e div is first in the array
    y[Math.floor(Math.random() * 4)].innerText = z;
    arr.shift();
}
    /* erase, make "complicated" function.
    destroy shuffleStuff
    */
function shuffleStuff() {
    x.sort(() => Math.random() - 0.5);
}

function checkAnswer () {
    let userAnswer = this.innerText;
    console.log(userAnswer);
    arr.shift();
}

    const questionList = [

{id: 1, question: "What is the highest selling music album of all time?", answer: "Thriller", wrong_answer: ["Led Zeppelin IV", "Hotel California", "Back in Black", "21"],
    categories: culture,
},

{id: 2, question: "Hakarl, or fermented shark, is a delicacy found in which country?", answer: "Iceland", wrong_answer: ["Norway", "China", "Trinidad & Tobago", "Greenland"],
    categories: culture,
},

{id: 3, question: "Which of these are NOT a play written by Shakespeare", answer: "Edward II", wrong_answer: ["Richard III", "The Merchant of Venice", "Romeo and Juliet", "Henry V"],
    categories: culture,
},

{id: 4, question: "How long did the Hundred Years' War actually last?", answer: "23 years", wrong_answer: ["37 years", "35 years", "51 years", "13 years"],
    categories: history,
},
    
{id: 5, question: "When did U.S prohibition on alcohol end?", answer: "1933", wrong_answer: ["1934", "1937", "1939", "1929"],
    categories: history,
},

{id: 6, question: "What is the name of the site, on which Napoleon was defeated once and for all?", answer: "Waterloo", wrong_answer: ["Trafalgar", "Ligny", "Borodino", "Leipzig"],
    categories: history,
},

{id: 7, question: "What is the fastest animal on earth?", answer: "Peregrine Falcon", wrong_answer: ["Cheetah", "Mexican free-tailed bat", "Black Marlin", "Will Ferrell"],
    categories: science,
},

{id: 8, question: "What weighs the most?", answer: "A chicken on the surface of the Sun", wrong_answer: ["A small child on earth", "Will Ferrell on the moon", "2 average chickens on earth", "A cat on Mars"],
    categories: science,
},

{id: 9, question: "Who was it, that first discovered that the earth is spherical?", answer: "Some greek", wrong_answer: ["Some other greek", "Some inventor", "Someone else", "Will Ferrell"],
    categories: science,
},

{id: 10, question: "Who has won ballon d'or the most times?", answer: "Lionel Messi", wrong_answer: ["Christiano Ronaldo", "Michel Platini", "Luka Modric", "Will Ferrell"],
    categories: sports,
},

{id: 11, question: "Worldwide, how many viewers tuned in for the 1996 Atlanta opening ceremony?", answer: "3.4 Billion", wrong_answer: ["3.2 Billion", "2.3 Billion", "4.1 Billion", "Will Ferrell"],
    categories: sports,
},

{id: 12, question: "In the NHL, who is the all-time, highest goal scorer?", answer: "Wayne Gretzky", wrong_answer: ["Ovi", "Gordie Howe", "Jaromir Jagr", "Marc-Andre Fleury", "Will Ferrell"],
    categories: sports,
},

{id: 13, question: "Who is the rightmost president depicted on Mt. Rushmore?", answer: "Abraham Lincoln", wrong_answer: ["George Washington", "Theodore Roesevelt", "Thomas Jefferson", "Will Ferrell"],
    categories: history,
},

{id: 14, question: "How much does a teaspoon full of neutron star weigh?", answer: "About 6 billion tons", wrong_answer: ["About 8 billion tons", "About 4.3 billion tons", "About 70 grams", "About a teaspoon of Will Ferrell"],
    categories: science,
},

{id: 15, question: "Where did coffee originate from?", answer: "Ethiopia", wrong_answer: ["Tanzania", "Jordan", "Saudi Arabia", "Will Ferrell"],
    categories: culture,
},
];



