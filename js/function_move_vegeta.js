let vegetaImg = document.getElementById("img_vegeta");

let movePersonageVegeta = () => {
  setTimeout(() => {
    let arrayMoves = ["left", "right", "jump"];

    //obtener un valor numerico aleatorio con Math
    let random_move = Math.floor(Math.random() * arrayMoves.length);
    let selected_moves = arrayMoves[random_move];
    let move = 0;

    switch (selected_moves) {
      case "right":
        move += 100;
        vegetaImg.style.transform = `translateX(${move}px)`;
        break;
      case "left":
        move -= 50;
        vegetaImg.style.transform = `translateX(${move}px)`;
        break;
      case "jump":
        setTimeout(() => {
          move += 70;
          vegetaImg.style.transform = `translateY(${move}px)`;
        }, 500);
        move -= 80;
        vegetaImg.style.transform = `translateY(${move}px)`;
        break;
    }
  }, 1000);
};

export { movePersonageVegeta, vegetaImg };
