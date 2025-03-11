
(function(window) {
    const speakWord = "Hello";

    function speak(name) {
        console.log(speakWord + " " + name);
    }

    window.speakHello = {
        speak: speak
    };
})(window);
