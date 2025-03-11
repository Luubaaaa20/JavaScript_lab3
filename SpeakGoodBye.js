(function(window) {
    const speakWord = "Good Bye";

    function speak(name) {
        console.log(speakWord + " " + name);
    }

    window.speakGoodBye = {
        speak: speak
    };
})(window);
