import { Packaging } from './packaging';

export interface Item {
  name(): string;
  packaging(): Packaging;
  price(): number;
}
