// Create an array to store audio objects for each chord
const chords = {
    "button1": new Audio('../audio/chordi.mp3'),
    "button2": new Audio('../audio/chordii.mp3'),
    "button3": new Audio('../audio/chordiii.mp3'),
    "button4": new Audio('../audio/chordiv.mp3'),
    "button5": new Audio('../audio/chordv.mp3'),
};

// Function to play audio when a button is hovered over
function playChord(buttonId) {
    if (chords[buttonId]) {
        chords[buttonId].currentTime = 0; // Reset playback position
        chords[buttonId].volume = 0.1; // Set volume
        chords[buttonId].play(); // Play the audio file
    }
}

// Attach event listeners to buttons
document.getElementById('button1').addEventListener('mouseenter', function() { playChord('button1'); });
document.getElementById('button2').addEventListener('mouseenter', function() { playChord('button2'); });
document.getElementById('button3').addEventListener('mouseenter', function() { playChord('button3'); });
document.getElementById('button4').addEventListener('mouseenter', function() { playChord('button4'); });
document.getElementById('button5').addEventListener('mouseenter', function() { playChord('button5'); });