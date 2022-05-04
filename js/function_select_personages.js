import { arrayPersonages } from "./object_personages.js"; //funcion para importar el array de objetos de los personajes

const randomPersonage = function () {
  let random_index = Math.floor(Math.random() * arrayPersonages.length);
  let selected_image = arrayPersonages[random_index];

  if (selected_image.position == "right") {
    document.getElementById("imagen_personage").src = `../images/${selected_image.img}`;
    document.getElementById("img_goku").src = `../images/${selected_image.img}`;
    document.getElementById("boton_personage1").innerHTML = `${selected_image.name}`;
  } else {
    document.getElementById("imagen_personage").src = `../images/${arrayPersonages[0].img}`;
    document.getElementById("boton_personage1").innerHTML = `${arrayPersonages[0].name}`;
  }
};

const randomPersonagAverse = function () {
  let random_index = Math.floor(Math.random() * arrayPersonages.length);
  let selected_image = arrayPersonages[random_index];

  if (selected_image.position == "left") {
    document.getElementById("imagen_personage2").src = `../images/${selected_image.img}`;
    document.getElementById("img_vegeta").src = `../images/${selected_image.img}`;
    document.getElementById("boton_personage2").innerHTML = `${selected_image.name}`;
  } else {
    document.getElementById("imagen_personage2").src = `../images/${arrayPersonages[6].img}`;
    document.getElementById("boton_personage2").innerHTML = `${arrayPersonages[6].name}`;
  }
};
export { randomPersonage, randomPersonagAverse };
