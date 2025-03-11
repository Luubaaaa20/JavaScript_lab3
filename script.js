(function() {
    const names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    names.forEach(name => {
        if (name.charAt(0).toLowerCase() === "j") {
            window.speakGoodBye.speak(name);
        } else {
            window.speakHello.speak(name);
        }
    });

    console.log("\nДодатковий функціонал: розподіл імен за парністю довжини:");
    const evenNames = [];
    const oddNames = [];

    names.forEach(name => {
        if (name.length % 2 === 0) {
            evenNames.push(name);
        } else {
            oddNames.push(name);
        }
    });

    console.log("Імена з парною кількістю символів: " + evenNames.join(", "));
    console.log("Імена з непарною кількістю символів: " + oddNames.join(", "));
})();
