const botaoregr = document.getElementById("botaoregr");
const botaoprog = document.getElementById("botaoprog");
const imagemalbum = document.getElementById("imagemalbum");
const nomemusica = document.getElementById("nomemusica");
const musicas = ["Thrift Shop","Blurred Lines","Radioactive","Harlem Shake",
    "Can't Hold Us","Mirrors","Just Give Me a Reason","When I Was Your Man","Cruise","Roar"];
const dirimagens = ["imgs/Macklemore_-_Thrift_Shop.jpg","imgs/Robin_Thicke_Blurred_Lines_Cover.svg.png","imgs/Imagine_Dragons_-__Radioactive__(Single).jpg","imgs/HarlemShake.jpg",
    "imgs/Can't_Hold_Us.png","imgs/Mirrors_(Justin_Timberlake_song).png","imgs/Just_Give_Me_a_Reason_cover.png","imgs/Bruno-mars-when-i-was-your-man.jpg","imgs/Cruise_Florida_Georgia_Line.jpg",
    "imgs/Katy_Perry_-_Roar.png"];
let i = 0;
imagemalbum.src = dirimagens[i];
nomemusica.textContent = musicas[i];
function proxmusica() {
    i = i + 1;
    if (i > 9) {
        i = 9;
    }
    nomemusica.textContent = musicas[i];
    imagemalbum.src = dirimagens[i];
    console.log("proxima musica pssada" + i);
}
function musicaanter() {
    i = i - 1;
    if (i < 0) {
        i = 0;
    }
    nomemusica.textContent = musicas[i];
    imagemalbum.src = dirimagens[i];
    console.log("proxima musica pssada" + i);
}