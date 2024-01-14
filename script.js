console.log("Welcome to Canary");

// Initializing the Variables
let songindex = 0;
let audioelement = new Audio("song/1.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let banner = document.getElementById("banner");
let songmasterinfo = document.getElementById("songmasterinfo");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songs = [
    { songname: "Mere kanha", filepath: "song/1.mp3", coverpath: "cover/song1.png" },
    { songname: "Ram siya Ram", filepath: "song/2.mp3", coverpath: "cover/song2.png" },
    { songname: "Bagad bam bam", filepath: "song/3.mp3", coverpath: "cover/song3.png" },
    { songname: "Meri maa ke brabar koi nhi", filepath: "song/4.mp3", coverpath: "cover/song4.png" },
    { songname: "Asma ko shuke dekha", filepath: "song/5.mp3", coverpath: "cover/song5.png" },
    { songname: "Shiv kailasho ke vasi", filepath: "song/6.mp3", coverpath: "cover/song6.png" },
    { songname: "Hare Krishna Hare Rama", filepath: "song/7.mp3", coverpath: "cover/song7.png" },
    { songname: "Mai balak tu mata", filepath: "song/8.mp3", coverpath: "cover/song8.png" }
]

// Handling song list 


songItem.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})


// Handle Play And Pause

masterplay.addEventListener("click", () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        makeaallplay();
        document.getElementById(songindex).classList.remove("fa-play");
        document.getElementById(songindex).classList.add("fa-pause");
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        makeaallplay();
        document.getElementById(songindex).classList.remove("fa-pause");
        document.getElementById(songindex).classList.add("fa-play");
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add("fa-play");
        gif.style.opacity = 0;
    }
})

// Listen to Events

audioelement.addEventListener("timeupdate", () => {
    let duration = audioelement.currentTime / audioelement.duration;
    progress = duration * 100;
    // console.log(progress);
    myprogressbar.value = progress;
    if (parseInt(myprogressbar.value) === 100) {
        if (songindex === 7) {
            songindex = 0;
            audioelement.src = "song/" + (songindex + 1) + ".mp3";
            banner.src = "cover/song" + (songindex + 1) + ".png";
            audioelement.play();
            audioelement.currentTime = 0;
            makeaallplay();
            document.getElementById(songindex).classList.remove("fa-play");
            document.getElementById(songindex).classList.add("fa-pause");
            gif.style.opacity = 1;
            masterplay.classList.remove("fa-play");
            masterplay.classList.add("fa-pause");
            songmasterinfo.innerText = songs[songindex].songname;
        }
        else {
            songindex += 1;
            audioelement.src = "song/" + (songindex + 1) + ".mp3";
            banner.src = "cover/song" + (songindex + 1) + ".png";
            audioelement.play();
            audioelement.currentTime = 0;
            makeaallplay();
            document.getElementById(songindex).classList.remove("fa-play");
            document.getElementById(songindex).classList.add("fa-pause");
            gif.style.opacity = 1;
            masterplay.classList.remove("fa-play");
            masterplay.classList.add("fa-pause");
            songmasterinfo.innerText = songs[songindex].songname;
        }
    }
});

myprogressbar.addEventListener("change", () => {
    audioelement.currentTime = myprogressbar.value * audioelement.duration / 100;
})

// Handling small play and pause button

const makeaallplay = () => {
    Array.from(document.getElementsByClassName("check")).forEach((element) => {
        element.classList.add("fa-play");
        element.classList.remove("fa-pause");
    })
}

Array.from(document.getElementsByClassName("check")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeaallplay();
        songindex = parseInt(e.target.id);
        e.target.classList.add("fa-pause");
        e.target.classList.remove("fa-play");
        songmasterinfo.innerText = songs[songindex].songname;
        audioelement.src = "song/" + (songindex + 1) + ".mp3";
        banner.src = "cover/song" + (songindex + 1) + ".png";
        audioelement.play();
        audioelement.currentTime = 0;
        gif.style.opacity = 1;
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
    })
})

// Previous and next Button

document.getElementById("next").addEventListener("click", () => {
    if (songindex == 7) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    audioelement.src = "song/" + (songindex + 1) + ".mp3";
    audioelement.play();
    audioelement.currentTime = 0;
    makeaallplay();
    document.getElementById(songindex).classList.remove("fa-play");
    document.getElementById(songindex).classList.add("fa-pause");
    masterplay.classList.remove("fa-play");
    gif.style.opacity = 1;
    masterplay.classList.add("fa-pause");
    songmasterinfo.innerText = songs[songindex].songname;
    banner.src = "cover/song" + (songindex + 1) + ".png";

})

document.getElementById("previous").addEventListener("click", () => {
    if (songindex == 0) {
        songindex = 7;
    }
    else {
        songindex -= 1;
    }
    audioelement.src = "song/" + (songindex + 1) + ".mp3";
    audioelement.play();
    audioelement.currentTime = 0;
    makeaallplay();
    document.getElementById(songindex).classList.remove("fa-play");
    document.getElementById(songindex).classList.add("fa-pause");
    gif.style.opacity = 1;
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");
    songmasterinfo.innerText = songs[songindex].songname;
    banner.src = "cover/song" + (songindex + 1) + ".png";

})


// Extra




