const challenges = [
    "Take a 30-second cold shower.",
    "Do 20 push-ups.",
    "Meditate for 5 minutes.",
    "Write down 3 things you're grateful for.",
    "Go for a 10-minute walk.",
    "Read 5 pages of a book.",
    "Avoid social media for an hour."
];

document.getElementById("challengeButton").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    document.getElementById("challengeText").innerText = challenges[randomIndex];
});
