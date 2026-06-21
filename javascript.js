
const botaoplay = document.getElementById("botaoplay");
const botaoplayimg = document.getElementById("botaoplayimg");
const imagemalbum = document.getElementById("imagemalbum");
const nomemusica = document.getElementById("nomemusica");
const source = document.getElementById("source");
const audio = document.getElementById("audio");
const musicas = ["Thrift Shop","Blurred Lines","Radioactive","Harlem Shake",
    "Can't Hold Us","Mirrors","Just Give Me a Reason","When I Was Your Man","Cruise","Roar"];
const dirimagens = ["imgs/Macklemore_-_Thrift_Shop.jpg","imgs/Robin_Thicke_Blurred_Lines_Cover.svg.png","imgs/Imagine_Dragons_-__Radioactive__(Single).jpg","imgs/HarlemShake.jpg",
    "imgs/Can't_Hold_Us.png","imgs/Mirrors_(Justin_Timberlake_song).png","imgs/Just_Give_Me_a_Reason_cover.png","imgs/Bruno-mars-when-i-was-your-man.jpg","imgs/Cruise_Florida_Georgia_Line.jpg",
    "imgs/Katy_Perry_-_Roar.png"];
const audios = ["musica/Thrift-shop.mp3","musica/Robin Thicke Feat. T.i. & Pharrell Williams - Blurred Lines (Tradução) (Clipe Legendado) [W-Z6Pq2Efrc].mp3",
    "musica/Imagine Dragons - Radioactive [ktvTqknDobU].mp3","musica/Baauer - Harlem Shake [Official Audio] [qV0LHCHf-pE].mp3","musica/MACKLEMORE & RYAN LEWIS - CAN'T HOLD US FEAT. RAY DALTON (OFFICIAL MUSIC VIDEO) [2zNSgSzhBfM].mp3",
    "musica/Justin Timberlake - Mirrors (Official Video) [uuZE_IRwLNI].mp3","musica/P!nk - Just Give Me A Reason ft. Nate Ruess [OpQFFLBMEPI].mp3","musica/Bruno Mars - When I Was Your Man (Official Music Video) [ekzHIouo8Q4].mp3",
    "musica/Florida Georgia Line - Cruise [8PvebsWcpto].mp3","musica/Katy Perry - Roar [CevxZvSJLk8].mp3"]
let i = 0;
let x = 1;
let v = 1.0;
imagemalbum.src = dirimagens[i];
nomemusica.textContent = musicas[i];
source.src = audios[i];
function proxmusica() {
    i = i + 1;
    if (i > 9) {
        i = 9;
    }
    x = 0;
    play();
    source.src = audios[i];
    audio.load();
    nomemusica.textContent = musicas[i];
    imagemalbum.src = dirimagens[i];
    console.log("proxima musica pssada" + i);
}
function musicaanter() {
    i = i - 1;
    if (i < 0) {
        i = 0;
    }
    x = 0;
    play();
    source.src = audios[i];
    audio.load();
    nomemusica.textContent = musicas[i];
    imagemalbum.src = dirimagens[i];
    console.log("proxima musica pssada" + i);
}
function play() {
    if (x == 1) {
    audio.play();
    botaoplayimg.src = "icons/pause_circle_70dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.png";
    x = 0;
    }
    else {
    audio.pause();
    botaoplayimg.src = "icons/play_circle_70dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.png";
    x = 1;
    }
}
function volume(val) {

    if (val == 1) {
        audio.volume = audio.volume + 0.1;
        console.log(audio.volume);
    }
    else {
        audio.volume = audio.volume - 0.1;
        console.log(audio.volume);
    }
}