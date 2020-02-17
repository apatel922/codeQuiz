
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
console.log(trivi1.length + " questions total.");

// Timer based on quiz length (10 sec per question)
var timerStartLength = (trivi1.length++) * 10;
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

// Generate Questions fxn

function generateQuiz() {
    for (var i = 0; i < trivi1.length; i++) {
    // CONTENT CREATED
        // Create the Question (h3)
        // Create the Choices (p)

    // USER MAKES SELECTION
        // HAPPY PATH (User makes CORRECT choice) --------
        // System displays "Correct" message
        // Response is saved to local storage or in array
        

        // IF UNHAPPY PATH (User makes INCORRECT choice) --------
        // System displays "Incorrect" message
        // 5 seconds are lost from Timer
        // Response is saved to local storage or in array

    // CONTINUE LOOP (show next question)

    };
};
