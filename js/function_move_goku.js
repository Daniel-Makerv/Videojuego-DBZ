let gokuImg = document.getElementById("img_goku");

let movePersonageGoku = () => {
  window.addEventListener("keydown", (e) => {
    let keystroke = e.key;
    let move = 0;
    switch (keystroke) {
      case "d":
        move += 100;
        gokuImg.style.transform = `translateX(${move}px)`;
        break;
      case "a":
        move -= 50;
        gokuImg.style.transform = `translateX(${move}px)`;
        break;
      case "w":
        setTimeout(() => {
          move += 70;
          gokuImg.style.transform = `translateY(${move}px)`;
        }, 300);
        move -= 80;
        gokuImg.style.transform = `translateY(${move}px)`;
        break;
    }
  });
};

export { movePersonageGoku, gokuImg };
