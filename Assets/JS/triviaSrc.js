
// Question List
var trivi1 = [
    { /// 0
        title: ["How many bones does an adult human have?"],
        choices: ["198", "206", "284", "302"],
        answer: ["206"]
    },
    { /// 1
        title: ["What is the national flower of Wales?"],
        choices: ["Daffodil", "Woody Nightshade", "Daisy", "Foxglove"],
        answer: ["Daffodil"]
    },
    { /// 2
        title: ["Who invented the bikini?"],
        choices: ["Len Ferd", "Luis Heard", "Chewie Beard", "Louis Reard"],
        answer: ["Louis Reard"]
    },
    { /// 3
        title: ["When did the French Revolution end?"],
        choices: ["1811", "1804", "1799", "1791"],
        answer: ["1799"]
    },
    { /// 4
        title: ["]Who wrote the poem Paradise Lost?"],
        choices: ["Walt Whitman", "Percy Bysshe Shelley", "John Milton", "Alfred Tennyson"],
        answer: ["1799"]
    },
    { /// 5
        title: ["Who created the animation for Monty Python?"],
        choices: ["John Cleese", "Terry Gilliam", "Graham Chapman", "Eric Idle"],
        answer: ["Terry Gilliam"]
    },
    { /// 6
        title: ["Whereabouts in London is the Stock Exchange?"],
        choices: ["Tiananmen Square", "Old Town Square", "St. Mark's Square", "Paternoster Square"],
        answer: ["Paternoster Square"]
    },
    { /// 7
        title: ["Whereabouts in London is the Stock Exchange?"],
        choices: ["Tiananmen Square", "Old Town Square", "St. Mark's Square", "Paternoster Square"],
        answer: ["Paternoster Square"]
    },
    { /// 8
        title: ["Name the Corsican who captured Toulon and who sold Louisiana to America."],
        choices: ["Charles Maurice De Talleyrand", "Napoleon Bonaparte", "Admiral Horatio Nelson", "Gebhard Blucher"],
        answer: ["Napoleon Bonaparte"]
    },
    { /// 9
        title: ["Where on the human body is the zygomatic bone found?"],
        choices: ["Face", "Knee", "Lower Back", "Wrist"],
        answer: ["Face"]
    },
    { /// 10
        title: ["Which famous novel featured Jo, Meg, Beth and Amy March?"],
        choices: ["Land of Love and Drowning", "The Paris Wife", "Of Mice and Men", "Little Women"],
        answer: ["Little Women"]
    },
    ///etc.
];

// Setting Up Globals
var triviUQuest = document.querySelector("#trivQuestion");
var answer0 = document.querySelector("#a0");
var answer1 = document.querySelector("#a1");
var answer2 = document.querySelector("#a2");
var answer3 = document.querySelector("#a3");
var secondsTimer = document.querySelector("#seconds");
var pbar = document.querySelector("#progBar");
// Confirming Globals
console.log(triviUQuest, answer0, answer1, answer2, answer3, secondsTimer, pbar);

// Timer based on quiz length (10 sec per question)
var timerStartLength = (trivi1.length) * 10;

console.log(trivi1.length + " questions total.");
console.log("10 seconds per question.");
console.log("----------");
console.log("We started at the bottom...");

// Timer fxn
var startTimer = setInterval(function() {
    document.querySelector("#seconds").textContent = timerStartLength;
    timerStartLength--;
    // "Time's Up!" message
    if (timerStartLength < 0) {
        console.log("...Now we here.");
        document.querySelector("#seconds").textContent = "Time's up!";
        clearInterval(startTimer);
    }
}, 1000);

console.log(timerStartLength);
// ^ Returned 110 (we will count up to this x % per sec)

// Progress Bar fxn
function update() { 
    var width = 0; 
    var identity = setInterval(countUp, (timerStartLength * 10)); 
      
    function countUp() { 
        if (width >= 100) { 
            clearInterval(identity);
        } else { 
            width++;  
            pbar.style.width = width + '%';
        }; 
    }; 
}; 

// Progress Bar runs onLoad
update();



var prevQIndex = trivi1.length - 1;
var loopingQIndex = 0;

// Generate Questions and set of Answers fxn
function generateQnA () {
    var questNum = trivi1[loopingQIndex];
    triviUQuest.textContent = questNum.title[0];
    answer0.textContent = questNum.choices[0];
    answer1.textContent = questNum.choices[1];
    answer2.textContent = questNum.choices[2];
    answer3.textContent = questNum.choices[3];
};

console.log(generateQnA);
generateQnA();




