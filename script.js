let songIndex = 1;

let audioElement = new Audio("songs/1.mp3");
const masterPlay = document.getElementById("masterPlay");
const myProgressBar = document.getElementById("myProgressBar");
const songItem = document.querySelectorAll(".songItemPlay");
const previous = document.querySelector("#previous");
const next = document.getElementById("next");

masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-pause-circle");
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-circle-play");
    }
})

audioElement.addEventListener("timeupdate",()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-circle-play");
    });
}

for(let element of songItem){
    element.addEventListener("click",(e)=>{
        makeAllPlays();
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-pause-circle");
        audioElement.currentTime = 0;
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.play();
    })
}

previous.addEventListener("click",(e)=>{
    if(songIndex==1){
        songIndex = 1;
    }
    else{
        makeAllPlays();
        songIndex -= 1;
        audioElement.currentTime = 0;
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.play();

        siblingClass = document.getElementById(`${songIndex}`);
       
        siblingClass.classList.remove("fa-circle-play");
        siblingClass.classList.add("fa-pause-circle");
    }
})


next.addEventListener("click",()=>{
    if(songIndex == 10){
        songIndex = 10;
    }
    else{
        makeAllPlays()
        songIndex += 1;
        audioElement.currentTime = 0;
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.play();
        siblingClass = document.getElementById(`${songIndex}`);
       
        siblingClass.classList.remove("fa-circle-play");
        siblingClass.classList.add("fa-pause-circle");
        
    }
})




