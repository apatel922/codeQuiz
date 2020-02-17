
// Question List
var trivi1 = [
    { /// 0
        title: "How many bones does an adult human have?",
        choices: ["198", "206", "284", "302"],
        answer: "206"
    },
    { /// 1
        title: "What is the national flower of Wales",
        choices: ["Daffodil", "Woody Nightshade", "Daisy", "Foxglove"],
        answer: "Daffodil"
    },
    { /// 2
        title: "Who invented the bikini?",
        choices: ["Len Ferd", "Luis Heard", "Chewie Beard", "Louis Reard"],
        answer: "Louis Reard"
    },
    { /// 3
        title: "When did the French Revolution end?",
        choices: ["1811", "1804", "1799", "1791"],
        answer: "1799"
    },
    { /// 4
        title: "Who wrote the poem Paradise Lost?",
        choices: ["Walt Whitman", "Percy Bysshe Shelley", "John Milton", "Alfred Tennyson"],
        answer: "1799"
    },
    { /// 5
        title: "Who created the animation for Monty Python?",
        choices: ["John Cleese", "Terry Gilliam", "Graham Chapman", "Eric Idle"],
        answer: "Terry Gilliam"
    },
    { /// 6
        title: "Whereabouts in London is the Stock Exchange?",
        choices: ["Tiananmen Square", "Old Town Square", "St. Mark's Square", "Paternoster Square"],
        answer: "Paternoster Square"
    },
    { /// 7
        title: "Whereabouts in London is the Stock Exchange?",
        choices: ["Tiananmen Square", "Old Town Square", "St. Mark's Square", "Paternoster Square"],
        answer: "Paternoster Square"
    },
    { /// 8
        title: "Name the Corsican who captured Toulon and who sold Louisiana to America.",
        choices: ["Charles Maurice De Talleyrand", "Napoleon Bonaparte", "Admiral Horatio Nelson", "Gebhard Blucher"],
        answer: "Napoleon Bonaparte"
    },
    { /// 9
        title: "Where on the human body is the zygomatic bone found?",
        choices: ["Face", "Knee", "Lower Back", "Wrist"],
        answer: "Face"
    },
    { /// 10
        title: "Which famous novel featured Jo, Meg, Beth and Amy March?",
        choices: ["Land of Love and Drowning", "The Paris Wife", "Of Mice and Men", "Little Women"],
        answer: "Little Women"
    },
    ///etc.
];

// Setting up Globals
var trivQuestion = document.querySelector("#trivQuestion");
var a0 = document.querySelector("#a0");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var seconds = document.querySelector("#seconds");
// Confirming Globals
console.log(trivQuestion, a0, a1, a2, a3, seconds);



// Timer based on quiz length (10 sec per question)
var timerStartLength = (trivi1.length) * 10;
console.log(trivi1.length + " questions total.");
console.log("10 seconds per question.");
console.log("----------");
console.log("We started at the bottom...");

// Timer fxn
var startTimer = setInterval(function() {
    document.querySelector("#seconds").textContent = timerStartLength;
    document.querySelector("#seconds").style.color = "#aaaaaa";
    timerStartLength--;
    // "Time's Up!" message
    if (timerStartLength < 0) {
        console.log("...Now we here.");
        document.querySelector("#seconds").textContent = "Time's up!";
        document.querySelector("#seconds").style.color = "#f08080";
        clearInterval(startTimer);
    }
}, 1000);


var prevQIndex = trivi1.length - 1;
var loopingQIndex = 0;

// Generate Questions fxn
function generateQandAs () {
    var x = trivi1[loopingQIndex];

};