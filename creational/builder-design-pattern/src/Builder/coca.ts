import { ColdDrinks } from './cold-drinks';

export class CocaCola extends ColdDrinks {
  name() {
    return 'coca cola';
  }

  price() {
    return 100.0;
  }
}
