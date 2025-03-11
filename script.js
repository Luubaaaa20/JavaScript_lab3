(function() {
    const names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (name.charAt(0).toLowerCase() === "j") {
            window.speakGoodBye.speak(name);
        } else {
            window.speakHello.speak(name);
        }
    }

    console.log("\nДодатковий функціонал: Імена з довжиною <= 4 символів:");
    names.forEach(name => {
        if (name.length <= 4) {
            console.log(name);
        }
    });
})();
