import { SnacksController } from "./Controllers/SnacksController.js";

class App {
  snacksController = new SnacksController();
}

window["app"] = new App();
