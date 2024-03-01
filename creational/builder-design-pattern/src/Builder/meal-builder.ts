import { Meal } from './meal';
import { VegBurger } from './VegBurger';
import { CocaCola } from './coca';

export class MealBuilder {
  prepareNonVegMeal() {
    const meal = new Meal();
    meal.addItem(new VegBurger());
    meal.addItem(new VegBurger());
    meal.addItem(new VegBurger());
    meal.addItem(new CocaCola());
    return meal;
  }
}
