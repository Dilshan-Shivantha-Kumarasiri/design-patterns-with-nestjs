"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VegBurger = void 0;
const burgers_1 = require("./burgers");
class VegBurger extends burgers_1.Burger {
    name() {
        return 'Veg Burger';
    }
    price() {
        return 1500.0;
    }
}
exports.VegBurger = VegBurger;
//# sourceMappingURL=VegBurger.js.map