import { Snacks } from "./Models/Snacks.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";

class AppState extends EventEmitter {
  snacks = {
    Doritos: new Snacks(
      "Doritos",
      1.5,
      "https://cdn.shopify.com/s/files/1/1334/9201/products/Doritos-Nacho-Cheese_e7cdda22-b8bf-4104-a252-b8d2ccce3110_1024x1024.jpg?v=1581085388",
      5
    ),
    Cookies: new Snacks(
      "Cookies",
      2.0,
      "https://www.britishcornershop.co.uk/img/large/QWOP615.jpg",
      5
    ),
  };
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
