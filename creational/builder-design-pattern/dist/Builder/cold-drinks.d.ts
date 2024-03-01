import { Item } from './Item';
import { Packaging } from './packaging';
export declare abstract class ColdDrinks implements Item {
    abstract name(): string;
    packaging(): Packaging;
    abstract price(): number;
}
