import { Item } from './Item';
import { Packaging } from './packaging';
import { Bottle } from './bottle';

export abstract class ColdDrinks implements Item {
  abstract name(): string;

  packaging(): Packaging {
    return new Bottle();
  }

  abstract price(): number;
}
