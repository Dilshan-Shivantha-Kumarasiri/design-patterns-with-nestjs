"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealBuilder = void 0;
const meal_1 = require("./meal");
const VegBurger_1 = require("./VegBurger");
const coca_1 = require("./coca");
class MealBuilder {
    prepareNonVegMeal() {
        const meal = new meal_1.Meal();
        meal.addItem(new VegBurger_1.VegBurger());
        meal.addItem(new VegBurger_1.VegBurger());
        meal.addItem(new VegBurger_1.VegBurger());
        meal.addItem(new coca_1.CocaCola());
        return meal;
    }
}
exports.MealBuilder = MealBuilder;
//# sourceMappingURL=meal-builder.js.map