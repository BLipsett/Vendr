import { ProxyState } from "../AppState.js";

class SnackService {
  buySnack(snackName) {
    let snack = ProxyState.snacks[snackName];
    if (!snack) {
      throw new Error("bad snack name", snackName);
    }
    if (snack.qty > 0) {
      snack.qty--;
      ProxyState.snacks = ProxyState.snacks;
      console.log(snack.qty);
    }
  }
}

export const snackService = new SnackService();
