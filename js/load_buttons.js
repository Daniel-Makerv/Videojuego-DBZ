let imgBackground = document.getElementById('img_fondo');
let backgroundStyle = window.getComputedStyle(imgBackground);
let backgroundWidth = backgroundStyle.getPropertyValue('width');

//apartado pendiente (18/11/2021)
function KeysGame (){
    if (backgroundWidth < '1285px') {
       alert("estas en telefono");
      }
      else if (backgroundWidth >= '1366px'){
          alert("estas en pc");
      }else{
        console.log("quien sabe donde madres estes");
    }
}
let loadKeysGame = KeysGame();
//imprimir el with este va en el principal 
console.log(backgroundWidth);
  export {loadKeysGame, backgroundWidth};