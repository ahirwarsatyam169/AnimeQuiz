const Q5 = document.querySelector("#Q5");
const Q10 = document.querySelector("#Q10");
const Q20 = document.querySelector("#Q20");
const Q40 = document.querySelector("#Q40");
const start = document.querySelector("#start_btn");
const start_screen = document.querySelector(".start-screen");
const question_screen = document.querySelector(".question-screen");
const end_screen = document.querySelector(".end-screen");
const options = document.querySelector(".options");
const char_img = document.querySelector("#char-img");
const next = document.querySelector("#next_btn");
const result_score = document.querySelector("#result_score");
const replay = document.querySelector("#replay");
const characters = [
    
    {
        name: "Akame",
        img: "img/akame.jpg"
    },
    {
        name: "Akane",
        img: "img/akane.jpg"
    },
    {
        name: "Alya",
        img: "img/alya.jpg"
    },
    {
        name: "Emilia",
        img: "img/emilia.jpg"
    },
    {
        name: "Fuyutsuki",
        img: "img/fuyutsuki.jpg"
    },
    {
        name: "Gotou",
        img: "img/gotou.jpg"
    },
    {
        name: "Griffith",
        img: "img/griffith.jpg"
    },
    {
        name: "Hinata",
        img: "img/hinata.jpg"
    },
    {
        name: "Hori",
        img: "img/hori.jpg"
    },
    {
        name: "Itachi",
        img: "img/itachi.jpg"
    },
    {
        name: "Itsuki",
        img: "img/itsuki.jpg"
    },
    {
        name: "Johan",
        img: "img/johan.jpg"
    },
    {
        name: "Kageyama",
        img: "img/kageyama.jpg"
    },
    {
        name: "Komi",
        img: "img/komi.jpg"
    },
    {
        name: "Kushina",
        img: "img/kushina.jpg"
    },
    {
        name: "Mahiru",
        img: "img/mahiru.jpg"
    },
    {
        name: "Mai",
        img: "img/mai.jpg"
    },
    {
        name: "Marine",
        img: "img/marine.jpg"
    },
    {
        name: "Miku",
        img: "img/miku.jpg"
    },
    {
        name: "Mitsuri",
        img: "img/mitsuri.jpg"
    },
    {
        name: "Miyamura",
        img: "img/miyamura.jpg"
    },
    {
        name: "Nami",
        img: "img/nami.jpg"
    },
    {
        name: "Naruto",
        img: "img/naruto.jpg"
    },
    {
        name: "Natsume",
        img: "img/natsume.jpg"
    },
    {
        name: "Nino",
        img: "img/nino.jpg"
    },
    {
        name: "Pain",
        img: "img/pain.jpg"
    },
    {
        name: "Rem",
        img: "img/rem.jpg"
    },
    {
        name: "Roxy",
        img: "img/roxy.jpg"
    },
    {
        name: "Shanks",
        img: "img/shanks.jpg"
    },
    {
        name: "Shizuku",
        img: "img/shizuku.jpg"
    },
    {
        name: "Shouko",
        img: "img/shouko.jpg"
    },
    {
        name: "Shoyo",
        img: "img/shoyo.jpg"
    },
    {
        name: "Siesta",
        img: "img/siesta.jpg"
    },
    {
        name: "Yahiko",
        img: "img/yahiko.jpg"
    },
    {
        name: "Yor",
        img: "img/yor.jpg"
    },
    {
        name: "Yoshida",
        img: "img/yoshida.jpg"
    },
    {
        name: "Yui",
        img: "img/yui.jpg"
    },
    {
        name: "Yuki",
        img: "img/yuki.jpg"
    },
    {
        name: "Yukino",
        img: "img/yukino.jpg"
    },
    {
        name: "Zoro",
        img: "img/zoro.jpg"
    },
    
    
]

let score = 0;
//SELECTING NO. OF QUESTIONS
let savedQuestion = 0;

Q5.addEventListener("click",function(){
    savedQuestion = 5;
    resetButton();
    Q5.style.backgroundColor = "#23189e";

})
Q10.addEventListener("click",function(){
    savedQuestion = 10;
    resetButton();
    Q10.style.backgroundColor = "#23189e";
})
Q20.addEventListener("click",function(){
    savedQuestion = 20;
    resetButton();
    Q20.style.backgroundColor = "#23189e";
})
Q40.addEventListener("click",function(){
    savedQuestion = 40;
    resetButton();
    Q40.style.backgroundColor = "#23189e";
})
function resetButton(){
    Q5.style.backgroundColor = "";
    Q10.style.backgroundColor = "";
    Q20.style.backgroundColor = "";
    Q40.style.backgroundColor = "";
}


//START SCREEN
start.addEventListener("click", function(){
    if(savedQuestion === 0){
        alert("select the number of questions first!");

    }
    else{
        
        start_screen.style.display = "none";
        question_screen.style.display = "flex";

    }
    characters.sort(()=>Math.random()-0.5);
    loadquestion();

    
})

//QUESTIONS
let currentQuestionIndex = 0;

let answered = false;

function loadquestion (){
    
    answered = false; //reset for new question
    
    options.innerHTML = "";

    const currentCharacter = characters[currentQuestionIndex];
    
    correctAnswer = currentCharacter.name
    
    char_img.src = currentCharacter.img

    let option_arr = [correctAnswer];

    while(option_arr.length < 4){
        
        let randomcharacter = characters[Math.floor(Math.random()*characters.length)];
        
        if(!option_arr.includes(randomcharacter.name)){
            option_arr.push(randomcharacter.name)
        }
    }
    option_arr.sort(()=>Math.random()-0.5);



    option_arr.forEach(name=>{
        const btn = document.createElement("button");
        btn.textContent = name;
        options.appendChild(btn);
    })




}



//OPTIONS
let correctAnswer = "";
options.addEventListener("click",function(e){
    if(e.target.tagName === "BUTTON"){
        answered = true;
        const allOptions = options.querySelectorAll("button");
        
        
        let chosen_option = e.target.textContent
       
        allOptions.forEach(btn =>{  
            if(btn.textContent === correctAnswer){
                btn.style.backgroundColor = "Green";
            }
        });
        
        if(chosen_option !== correctAnswer){
            e.target.style.backgroundColor = "Red";
        }
        else{
            score++;
        }
        
        
        allOptions.forEach(function(btn){
            btn.disabled = true;
        })

        
        
        
    };
    
    
    
})




//NEXT BUTTON
next.addEventListener("click",function(){
    
    if(!answered){
        alert("Please select an option first!");   
        return;
    }
    
    if(currentQuestionIndex + 1 < savedQuestion){
        currentQuestionIndex++;
        loadquestion();
    }
    else{
        question_screen.style.display = "none";
        end_screen.style.display = "flex";
        result_score.textContent = score+"/"+savedQuestion;
    }


})
replay.addEventListener("click",function(){
    location.reload();
})
