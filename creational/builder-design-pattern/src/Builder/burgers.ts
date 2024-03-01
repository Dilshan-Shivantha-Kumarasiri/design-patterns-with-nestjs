import { Wrapper } from './wrapper';
import { Item } from './Item';
import { Packaging } from './packaging';

export abstract class Burger implements Item {
  abstract name(): string;

  packaging(): Packaging {
    return new Wrapper();
  }

  abstract price(): number;
}
