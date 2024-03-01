import { Burger } from './burgers';

export class VegBurger extends Burger {
  name(): string {
    return 'Veg Burger';
  }

  price(): number {
    return 1500.0;
  }
}
