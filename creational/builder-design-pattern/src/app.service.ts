import { Injectable } from '@nestjs/common';
import { MealBuilder } from './Builder/meal-builder';
import { Meal } from './Builder/meal';

@Injectable()
export class AppService {
  // constructor() {
  //   const mealBuilder = new MealBuilder();
  //   const meal: Meal = mealBuilder.prepareNonVegMeal();
  //   meal.getCost();
  // }

  getHello(): string {
    return 'Hello World!';
  }
}
