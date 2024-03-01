import { Item } from './Item';

export class Meal {
  ar: Item[] = [];

  addItem(item: Item) {
    this.ar.push(item);
    // { name: item.name(), item: item.packaging().pack() }
  }

  getCost() {
    for (const ars of this.ar) {
      console.log(ars.name());
    }
  }
}
