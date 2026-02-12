(function(){
  emailjs.init("CbUgdHOASOFSvE1O7");
})();

const music=document.getElementById("bgMusic");

document.getElementById("beginBtn").onclick=()=>{
  music.volume=0.5;
  music.play();

  document.querySelector(".opening").style.display="none";
  document.querySelector(".intro").classList.remove("hidden");

  typeWriter(document.getElementById("introText"),
  "I couldn’t be there today…\nSo I made something instead. 💗",40);

  setTimeout(()=>{
    document.querySelector(".memory-wall").classList.remove("hidden");
  },4000);
};

function typeWriter(el,text,speed){
  let i=0;
  const timer=setInterval(()=>{
    if(text[i]==="\n") el.innerHTML+="<br>";
    else el.innerHTML+=text[i];
    i++;
    if(i>=text.length) clearInterval(timer);
  },speed);
}

document.querySelector(".memory-wall").onclick=()=>{
  document.querySelector(".valentine").classList.remove("hidden");
  progressiveValentine();
};

function progressiveValentine(){
  const container=document.getElementById("valentineText");
  container.innerHTML="Some questions feel dangerous…";
  setTimeout(()=>{
    container.innerHTML+="<br><br>But I’ll ask you anyway.";
  },2000);
  setTimeout(()=>{
    document.getElementById("yesBtn").classList.remove("hidden");
  },4000);
}

document.getElementById("yesBtn").onclick=()=>{
  document.getElementById("valentineText").innerHTML="You just made this story ours. 💗";
  music.volume=0.7;
  document.querySelector(".letter").classList.remove("hidden");
};

const letterObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      music.volume=0.8;
      typeWriter(document.getElementById("typeLetter"),
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
என் அன்பர்கினியாளுக்கு, என் அன்பான காதலர் தின வாழ்த்துகள்!`,30);
    }
  });
});

letterObserver.observe(document.querySelector(".letter"));

function sendMessage(){
  const msg=document.getElementById("herMessage").value;
  emailjs.send("service_23sbdh9","template_luj8x7p",{message:msg})
  .then(()=>{
    document.querySelector(".ending").style.opacity=1;
  });
}
