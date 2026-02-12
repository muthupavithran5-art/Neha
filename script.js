/* ======================================
   SECTION REVEAL
====================================== */
const sections = document.querySelectorAll("section");

function revealSections() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


/* ======================================
   TYPEWRITER (SUPPORTS TAMIL + LINE BREAKS)
====================================== */
function typeWriter(elementId, text, speed = 40) {
  const element = document.getElementById(elementId);
  let index = 0;
  element.innerHTML = "";

  const timer = setInterval(() => {
    const char = text[index];

    if (char === "\n") {
      element.innerHTML += "<br>";
    } else {
      element.innerHTML += char;
    }

    index++;
    if (index >= text.length) clearInterval(timer);
  }, speed);
}

window.onload = () => {
  typeWriter(
    "typeIntro",
    "I know I can’t be with you this Valentine’s Day…\nso I made something just for you. ❤️",
    45
  );

  typeWriter(
    "typeLetter",
`துன்புற்று நானும் துவண்டு போய் நிற்க, உன் பூவிழி வந்து புயல் போல் மோதும்!
சிறு நொடி நானும் வெறுப்போடு உணர, உன் குயில் மொழி என்னுள் குடிகொண்டு ஆளும்!
நீயின்றி நானும் நிலத்தினில் மீனே!
நொய் கொண்டு வாழும் பாமரன் தானே!
தூறல்கள் சிந்தும் குறுமுகில் நீயே, கானல் நீர் கண்ட பாலையும் நானே!
வாரத்தின் ஏழில் ஞாயிரு நீயே, வாசாப்பு வாங்கும் திங்களும் நானே!
துயர் பல வந்த போதும், துன்பம் பல கண்ட போதும், வற்றாத பொய்கையடி, நம் காதல், தாகம் தீர்க்கும் வைகையடி!
இந்த தூரம் வைக்குமா வற்ற? நம் காதல் நதியை!
உன் காதல் ஒன்றே ஆளும், இந்த மடையன் மதியை!
இனிய காதலர் தின வாழ்த்துக்கள்! என் காதல் நதியே! பூவிழும் கொடியே!
புன்னகை முகிலே! தேன்சுரக்கனியே! தேவதை உருவே! தீரா காமமே! திகட்டாத மோகமே!
என் அன்பர்கினியாளுக்கு, என் அன்பான காதலர் தின வாழ்த்துகள்!

-அன்புடன்,
நேஹன் (எ) முத்து.`,
    32
  );
};


/* ======================================
   QUIZ RESPONSE
====================================== */
function answer(button) {
  button.innerText = "Always 💕";
  button.style.background = "#e91e63";
  button.style.color = "white";
}


/* ======================================
   NO BUTTON – SMOOTH SLIDE (MATURE)
====================================== */
let noPositions = [
  { x: 15, y: 10 },
  { x: 60, y: 20 },
  { x: 25, y: 50 },
  { x: 70, y: 40 },
  { x: 40, y: 65 }
];

let noIndex = 0;

function moveNo(button) {
  const parent = button.parentElement;
  const parentWidth = parent.offsetWidth;
  const parentHeight = parent.offsetHeight;

  const pos = noPositions[noIndex % noPositions.length];

  const left = (parentWidth * pos.x) / 100;
  const top = (parentHeight * pos.y) / 100;

  button.style.transition = "left 0.35s ease, top 0.35s ease";
  button.style.left = left + "px";
  button.style.top = top + "px";

  noIndex++;
}

document.addEventListener("touchstart", (e) => {
  if (e.target.classList.contains("no")) {
    moveNo(e.target);
  }
});


/* ======================================
   YES BUTTON – HEARTS + SURPRISE
====================================== */
function yesValentine() {
  document.getElementById("valentineResult").innerHTML =
    "I knew it ❤️<br>You’re my favourite person in this world.";

  const surprise = document.getElementById("surprise");
  surprise.style.display = "block";
  surprise.scrollIntoView({ behavior: "smooth" });

  for (let i = 0; i < 28; i++) {
    createHeart();
  }
}


/* ======================================
   FLOATING HEARTS
====================================== */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}


/* ======================================
   MUSIC TOGGLE
====================================== */
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  music.paused ? music.play() : music.pause();
}
