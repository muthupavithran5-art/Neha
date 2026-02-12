// ===== EMAILJS INIT =====
(function(){
  emailjs.init("CbUgdHOASOFSvE1O7");
})();

// ===== Reveal animation =====
const sections=document.querySelectorAll("section");
window.addEventListener("scroll",()=>{
  sections.forEach(sec=>{
    if(sec.getBoundingClientRect().top<window.innerHeight-100){
      sec.classList.add("show");
    }
  });
});

// ===== Auto music fade-in =====
let started=false;
document.addEventListener("click",()=>{
  if(!started){
    const music=document.getElementById("bgMusic");
    music.volume=0;
    music.play();
    let vol=0;
    const fade=setInterval(()=>{
      if(vol<1){vol+=0.05;music.volume=vol;}
      else clearInterval(fade);
    },200);
    started=true;
  }
});

// ===== Typewriter =====
function typeWriter(id,text,speed=35){
  const el=document.getElementById(id);
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
  typeWriter("typeIntro",
  "I know I can’t be with you this Valentine’s Day…\nso I made something just for you. ❤️");

  typeWriter("typeLetter",
`துன்புற்று நானும் துவண்டு போய் நிற்க, உன் பூவிழி வந்து புயல் போல் மோதும்!
சிறு நொடி நானும் வெறுப்போடு உணர, உன் குயில் மொழி என்னுள் குடிகொண்டு ஆளும்!
நீயின்றி நானும் நிலத்தினில் மீனே!
நொய் கொண்டு வாழும் பாமரன் தானே!
தூறல்கள் சிந்தும் குறுமுகில் நீயே, கானல் நீர் கண்ட பாலையும் நானே!
வாரத்தின் ஏழில் ஞாயிரு நீயே, வாசாப்பு வாங்கும் திங்களும் நானே!
துயர் பல வந்த போதும், துன்பம் பல கண்ட போதும், வற்றாத பொய்கையடி, நம் காதல், தாகம் தீர்க்கும் வைகையடி!
இந்த தூரம் வைக்குமா வற்ற? நம் காதல் நதியை!
உன் காதல் ஒன்றே ஆளும், இந்த மடையன் மதியை!
இனிய காதலர் தின வாழ்த்துக்கள்!
-அன்புடன்,
நேஹன் (எ) முத்து.`);
};

// ===== Send Message =====
function sendMessage(){
  const msg=document.getElementById("herMessage").value;
  const status=document.getElementById("messageStatus");
  if(msg.trim()===""){
    status.innerText="Write something from your heart 💌";
    return;
  }

  emailjs.send("service_23sbdh9","template_luj8x7p",{message:msg})
  .then(()=>{
    status.innerText="Your words reached Muthu ❤️";
    document.getElementById("herMessage").value="";
    for(let i=0;i<20;i++)createHeart();
  },()=>{
    status.innerText="Something went wrong.";
  });
}

// ===== Sliding NO button =====
let posIndex=0;
const positions=[{x:10,y:20},{x:60,y:30},{x:30,y:60},{x:70,y:40}];

function moveNo(btn){
  const parent=btn.parentElement;
  const p=positions[posIndex%positions.length];
  btn.style.left=(parent.offsetWidth*p.x)/100+"px";
  btn.style.top=(parent.offsetHeight*p.y)/100+"px";
  posIndex++;
}

// ===== Hearts =====
function yesValentine(){
  document.getElementById("valentineResult").innerHTML=
  "Forever sounds right with you ❤️";
  for(let i=0;i<25;i++)createHeart();
}

function createHeart(){
  const h=document.createElement("div");
  h.className="heart";
  h.innerText="❤️";
  h.style.left=Math.random()*100+"vw";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),6000);
}

// ===== Photo modal =====
document.querySelectorAll(".gallery img").forEach(img=>{
  img.addEventListener("click",()=>{
    const modal=document.createElement("div");
    modal.className="modal";
    modal.innerHTML=`<img src="${img.src}">`;
    document.body.appendChild(modal);
    modal.addEventListener("click",()=>modal.remove());
  });
});
