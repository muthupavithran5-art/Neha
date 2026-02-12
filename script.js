(function(){
  emailjs.init("YOUR_PUBLIC_KEY");
})();

const music=document.getElementById("bgMusic");
let started=false;

document.getElementById("beginBtn").addEventListener("click",()=>{
  if(!started){
    music.volume=0;
    music.play();
    let vol=0;
    const fade=setInterval(()=>{
      if(vol<0.4){vol+=0.02;music.volume=vol;}
      else clearInterval(fade);
    },200);
    started=true;
  }
  document.querySelector(".opening").style.display="none";
});

function typeWriter(el,text,speed=35){
  let i=0;
  const timer=setInterval(()=>{
    const char=text[i];
    if(char==="\n"){el.innerHTML+="<br>";}
    else{el.innerHTML+=char;}
    i++;
    if(i>=text.length)clearInterval(timer);
  },speed);
}

window.onload=()=>{
  typeWriter(document.getElementById("introText"),
  "I couldn’t be there today…\nSo I made something instead. ❤️");
};

const letterObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      music.volume=0.75;
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
என் அன்பர்கினியாளுக்கு, என் அன்பான காதலர் தின வாழ்த்துகள்!

-அன்புடன்,
நேஹன் (எ) முத்து.`,30);
    }
  });
},{threshold:0.6});

letterObserver.observe(document.querySelector(".letter"));

let posIndex=0;
const positions=[{x:10,y:20},{x:60,y:30},{x:30,y:60},{x:70,y:40}];

function moveNo(btn){
  const parent=btn.parentElement;
  const p=positions[posIndex%positions.length];
  btn.style.left=(parent.offsetWidth*p.x)/100+"px";
  btn.style.top=(parent.offsetHeight*p.y)/100+"px";
  posIndex++;
}

function yesValentine(){
  document.getElementById("valentineResult").innerHTML=
  "Forever sounds right with you ❤️";
}

function sendMessage(){
  const msg=document.getElementById("herMessage").value;
  const status=document.getElementById("messageStatus");

  emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",{message:msg})
  .then(()=>status.innerText="Your words reached me ❤️")
  .catch(()=>status.innerText="Something went wrong.");
}
