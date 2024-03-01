import { Packaging } from './packaging';

export class Wrapper implements Packaging {
  pack(): string {
    return 'wrapper';
  }
}
