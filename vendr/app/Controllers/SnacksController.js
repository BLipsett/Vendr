import { ProxyState } from "../AppState.js";
import { snackService } from "../Services/SnackService.js";

function _drawSnack() {
  //let snack = ProxyState.snacks;
  let template = "";

  Object.values(ProxyState.snacks).forEach((snack) => {
    template += /*html*/ `
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <img src="${snack.img}" style="width: 200px" onclick="app.snacksController.buySnack('${snack.name}')">
          <p>${snack.name}</p>
          <p>$${snack.price}</p>
          <p>${snack.qty}<p>
        </div>
      </div>
    </div>
    `;
  });

  document.getElementById("machine").innerHTML = template;
}

export class SnacksController {
  constructor() {
    ProxyState.on("snacks", _drawSnack);

    _drawSnack();
  }

  buySnack(snackName) {
    snackService.buySnack(snackName);
  }
}
