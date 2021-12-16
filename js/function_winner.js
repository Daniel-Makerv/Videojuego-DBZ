import { stroke } from './function.js';

let players = ["Goku", "Vegeta"];

let imprWinner = () => {
  setTimeout(() => {
    stroke.style.display = "none";
    $(document).ready(function () {
      $("#staticBackdrop").modal("show");
      $("#modal-header").css("background", "#FF8C00");
      $('#modal-body').css('background', '#FF8C00');
      $("#modal-footer").css("background", "#FF8C00");
      $("#btn-warning").css("background", "#FF8C00");
    });
       
       
    //modificando valores de la alerta para mostrar ganador
    let headerText = document.getElementById("modal-body");
    let btnRefresh = document.getElementById("btn-warning");
    headerText.innerHTML = `<center><h3> El ganador es:</h3><br><u><h4>${players[0]}</h4></u></center><br><center><img src="images/boton-scenario.png" alt="imagen" width="170px" height="100%"
    id="boton_scenario"></center><br> <img src="../images/alerta-ganador.gif" alt="imagen" width="170px" height="100%">`;
    btnRefresh.innerHTML = `¡Volver a jugar!`;
    btnRefresh.addEventListener("click",() => {
        location.reload();
    });
  }, 5000);
};

//vegeta en caso de ganar
let imprWinnerTwo = () => {
    setTimeout(() => {
      $(document).ready(function () {
        $("#staticBackdrop").modal("show");
        $("#modal-header").css("background", "#FF8C00");
        $("#modal-body").css("background", "#FFD700");
        $("#modal-footer").css("background", "#FF8C00");
        $("#btn-warning").css("background", "#FF8C00");
      });
  
      //modificando valores de la alerta para mostrar ganador
      let headerText = document.getElementById("modal-body");
      let btnRefresh = document.getElementById("btn-warning");
      headerText.innerHTML = `<center><h3> El ganador es:</h3><br><u><h4>${players[1]}</h4></u></center><br><center><img src="images/boton-scenario.png" alt="imagen" width="170px" height="100%"
    id="boton_scenario"></center><br>`;
    btnRefresh.innerHTML = `¡Volver a jugar!`;

    btnRefresh.addEventListener("click",() => {
        location.reload();
    });
    }, 8000);
  };
  
export { imprWinner, imprWinnerTwo };
