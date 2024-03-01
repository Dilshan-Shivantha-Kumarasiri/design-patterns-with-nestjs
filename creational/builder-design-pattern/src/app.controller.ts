import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MealBuilder } from './Builder/meal-builder';
import { Meal } from './Builder/meal';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): void {
    // return this.appService.getHello();
    const mealBuilder = new MealBuilder();
    const meal: Meal = mealBuilder.prepareNonVegMeal();
    meal.getCost();
  }
}
