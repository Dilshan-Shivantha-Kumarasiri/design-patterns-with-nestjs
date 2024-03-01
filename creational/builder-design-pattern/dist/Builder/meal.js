"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meal = void 0;
class Meal {
    constructor() {
        this.ar = [];
    }
    addItem(item) {
        this.ar.push(item);
    }
    getCost() {
        for (const ars of this.ar) {
            console.log(ars.name());
        }
    }
}
exports.Meal = Meal;
//# sourceMappingURL=meal.js.map