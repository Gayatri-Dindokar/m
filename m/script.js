dropdownContent = document.querySelector(".dropdown-content");
isvisible = false;

function clickable() {
    isvisible = !isvisible;
    if (isvisible) {
        dropdownContent.style.display = "block"
    } else {
        dropdownContent.style.display = "none"
    }
}

let audioElement = new Audio('asset/song/Heeriye-song-mp3.mp3');
let gif = document.querySelector('.gif-css')
let playButton = document.getElementById('play-btn')
let pauseButton = document.getElementById('pause-btn')

let myProgreesbar = document.querySelector('#myProgressbar');

pauseButton.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        pauseButton.style.display = "none";
        playButton.style.display = "block";
        gif.style.display = "block"
    }
})
playButton.addEventListener('click', () => {
    audioElement.pause();
    pauseButton.style.display = "block";
    playButton.style.display = "none";
    gif.style.display = "none"

})
audioElement.addEventListener('timeupdate', () => {
    // console.log(audioElement.currentTime);
    // console.log(audioElement.duration)
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgreesbar.value = progress;
    // console.log(myProgreesbar.value)
    // console.log(audioElement.currentTime);
    // console.log(audioElement.duration);
})
myProgreesbar.addEventListener('change', () => {
    audioElement.currentTime = myProgreesbar.value * audioElement.duration / 100
})

let showLyrics = document.querySelector(".bottom-btn");
let lyrics = document.querySelector(".lyrics");
let overlay = document.querySelector(".overlay");
let hide = document.querySelector(".hide");
let show = document.querySelector(".show");
let hideBtn = document.querySelector(".hide-btn")
let downarrow = document.querySelector(".down-arrow")

show.addEventListener('click', () => {
    console.log("kndjk");
    overlay.style.opacity = "0";
    lyrics.style.display = "block";
    hide.style.display = "block";
    show.style.display = "none";
    hide.style.overflowY = "hidden";
})

function hideDown() {
    console.log("hide");
    // overlay.style.opacity = "1";
    lyrics.style.display = "none";
    overlay.style.opacity = "1";
    show.style.display = "block";
    hide.style.display = "none";
}
hideBtn.addEventListener("click", hideDown);
downarrow.addEventListener("click", hideDown);
// hideBtn.addEventListener("click", () => {
//     console.log("hide");
//     // overlay.style.opacity = "1";
//     lyrics.style.display = "none";
//     overlay.style.opacity = "1";
//     show.style.display = "block";
//     hide.style.display = "none";



// })
const audio = document.querySelector("")
const ly = [
   " Heeriye, Heeriye, aa",
"Heeriye, Heeriye, aa",
"Teri hoke maraan Jind Jaan karaan",
"Teri hoke maraan Jind Jaan karaan",
"Heeriye, Heeriye, aa",
"Heeriye, Heeriye, aa"]

// Neendan vi Tutt Tutt gaiyan,
// Chundi main Taare rahiyaan
// Sochan vich Teriyan paiyaaan 
// Haaniyaaa

// Saari saar raat Jaga ve
// Yadan nu Zikar Tera Ve
// Aaye kyun na aaye subha ve 
// Haaniyaa

// Teri hoke maraan Jind Jaan karaan
// Teri hoke maraan Jind Jaan karaan
// Heeriye, Heeriye, aa
// Heeriye, Heeriye, aa

// Chheti aa Chheti Sohne Raat na lange
// Aaja ve Aaja Sohne Raat na lange
// Chheti aa Chheti Sohne Raat na lange
// Aaja ve Aaja Sohne Raat na lange

// Jad vi tenu takdi haan ve,
// Akhiyan vi shukar manave
// Kole aa door na jaave, haaniya

// Palkaan di kar ke chhaanva
// Dil de tenu kol bithaanva
// Tak Tak tenu Khairan paanva, haaniya

// teri... haaniya, teri
// teri... haaniya, teri

// Teri hoke maraan Jind Jaan karaan
// Teri hoke maraan Jind Jaan karaan
// Heeriye, Heeriye, aa
// Heeriye, Heeriye, aa

// haaniya, teri
// haaniya teri



// const slides = document.querySelectorAll(".swiper-slide")
// slides.forEach(
//     (slide,index)=>{
//         slide.style.left = `${index*100}%`

//     }
// )
// const slideImage = ()=>{
//     slides.forEach
// }

// helo//
// const slides = document.querySelectorAll(".swiper-slide")
// var counter = 0;
// // console.log(slides)
// slides.forEach(
//     (slide, index) => {
//         slide.style.top = `${index * 100}%`
//     }
// )

// const goPrev = () => {
//     counter--
//     slideImage()
// }

// const goNext = () => {
//     counter++
//     slideImage()
// }

// const slideImage = () => {
//     slides.forEach(
//         (slide) => {
//             slide.style.transform = `translateY(-${counter * 100}%)`
//         }
//     )
// }












