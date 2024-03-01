import { Packaging } from './packaging';

export class Bottle implements Packaging {
  pack(): string {
    return 'Bottle';
  }
}
