import { movePersonageGoku, gokuImg } from "./function_move_goku.js";
import { movePersonageVegeta, vegetaImg } from "./function_move_vegeta.js";
import { imprWinner, imprWinnerTwo } from "./function_winner.js";
//funcion para cargar botones en celular (beta) import {loadKeysGame, backgroundWidth} from "./load_buttons.js";

let alertStart = document.getElementById("btn-warning");
let randomImage = document.getElementById("boton_scenario");
let stroke = document.getElementById("img_golpear");
let imgVidAlta = document.getElementById("vida_alta");
let imgVidAlta2 = document.getElementById("vida_alta2");
//variables de vida y turno
let lifeGoku = 100;
let lifeVegeta = 100;
let ataqueGoku = 40;
let ataqueVegeta = 20;
let turn = 0;
let contador = 0;
let CONTROLVOLUME = document.getElementById("music_fondo");
CONTROLVOLUME.volume = 0.2;

$(document).ready(function () {
  $("#staticBackdrop").modal("show");
  $("#modal-header").css("background", "#FF8C00");
  $("#modal-body").css("background", "#FFD700");
  $("#modal-footer").css("background", "#FF8C00");
  $("#btn-warning").css("background", "#FF8C00");
  $("#music_fondo").attr("src", "music/cancion-principal.mp3");
});

randomImage.addEventListener("click", () => {
  let imagesArray = [
    "fondo.jpg",
    "fondo2.jpg",
    "fondo3.jpg",
    "fondo4.jpg",
    "fondo5.jpg",
    "fondo6.jpg",
    "fondo7.jpg",
    "fondo8.jpg",
    "fondo9.jpg",
    "fondo10.jpg",
  ];
  //obtener un valor numerico aleatorio con Math
  let random_index = Math.floor(Math.random() * imagesArray.length);
  let selected_image = imagesArray[random_index];
  document.getElementById("img_fondo").src = `../images/${selected_image}`;
});

alertStart.addEventListener("click", () => {
  CONTROLVOLUME.src = "music/musica-pelea.mp3";

  const INITGAME = () => {
    //importando los movimientos de los personajes
    movePersonageGoku();
    movePersonageVegeta();
    let imageGo = document.getElementById("img_comienzo");
    let imageShenlong = document.getElementById("img_shenlong");
    let imgLifeGoku = document.getElementById("life_goku");
    let imgLifeVegeta = document.getElementById("life_vegeta");

    imageGo.style.display = "block";
    contador++;
    //mostrar alerta de inicio y boton de reglas y pausa
    if (contador === 6) {
      clearInterval(intervalo);
      imageGo.style.display = "none";
      imageShenlong.style.display = "block";
      imgLifeGoku.style.display = "block";
      imgLifeVegeta.style.display = "block";
      imgVidAlta.style.display = "block";
      imgVidAlta2.style.display = "block";
      //icializando la vida en 0 para mostrar boton de golear
      if (turn == 0) {
        stroke.style.display = "block";
      } else {
        lifeGoku = ataqueVegeta - lifeGoku;
      }
    }
  };
  let intervalo = setInterval(INITGAME, 400);
});

stroke.addEventListener("click", () => {
  turn = 0;
  //validando vida
  for (turn; turn < 1; turn++) {
    stroke.style.display = "none";
    gokuImg.src = "images/poder-lanzado.gif";
    img_fondo.src = "../images/goku-golpe-fondo.gif";
    gokuImg.style.width = "70%";
    gokuImg.style.top = "2cm";
    gokuImg.style.left = "-6cm";
    lifeVegeta = Number(lifeVegeta) - Number(ataqueGoku);
    console.log(lifeVegeta + " esta es la vida de vegeta");
    if (turn == 0) {
      setTimeout(() => {
        //objeto para cambiar la imagen de la vida
        const GOKU_VIDA_CHANGE = {
          80: "images/vida-media.png",
          60: "images/vida-media2.png",
          40: "images/vida-baja.png",
          20: "images/vida-baja-media.png",
          0: "images/vida-fin.png",
        };

        gokuImg.src = "images/goku.png";
        gokuImg.style.width = "27%";
        gokuImg.style.top = "7.5cm";
        gokuImg.style.left = "25px";
        gokuImg.style.margin = "5px";
        gokuImg.style.position = "fixed";
        imgVidAlta2.src = GOKU_VIDA_CHANGE[lifeVegeta];
        img_fondo.src = "../images/fondo9.jpg";
      }, 5000);
    }
    turn++;
    //validando vida para mostrar si o no animacion de vegeta
    if (lifeVegeta <= 0) {
      stroke.style.display = "none";
      turn = 0;
    }
    //turno de vegeta
    if (turn == 1) {
      setTimeout(() => {
        lifeGoku = Number(lifeGoku) - Number(ataqueVegeta);
        console.log(lifeGoku + " esta es la vida de goku");
        const VEGETA_VIDA_CHANGE = {
          80: "images/vida-media.png",
          60: "images/vida-media2.png",
          40: "images/vida-baja.png",
          20: "images/vida-baja-media.png",
          0: "images/vida-fin.png",
        };
        imgVidAlta.src = VEGETA_VIDA_CHANGE[lifeGoku];

        vegetaImg.style.width = "70%";
        vegetaImg.style.top = "2cm";
        vegetaImg.style.left = "10cm";
        vegetaImg.style.margin = "5px";
        vegetaImg.style.position = "fixed";
        vegetaImg.src = "images/vegeta-golpee.gif";
        img_fondo.src = "../images/fondo-vegeta-golpe.gif";
      }, 5000);
      setTimeout(() => {
        vegetaImg.src = "images/vegeta.png";
        stroke.style.display = "block";
        vegetaImg.style.width = "22%";
        vegetaImg.style.top = "6.9cm";
        vegetaImg.style.left = "24.5cm";
        vegetaImg.style.margin = "5px";
        vegetaImg.style.position = "fixed";
        img_fondo.src = "../images/fondo9.jpg";
      }, 7000);
    }
    //validando ganador
    if (lifeVegeta <= 0) {
      console.log("se acabo");
      imprWinner();
    } else if (lifeGoku <= 0) {
      imprWinnerTwo();
    }
  }
});

export { stroke };
