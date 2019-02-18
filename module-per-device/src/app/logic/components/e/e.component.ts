export abstract class EComponent {

  protected value: string;

  constructor(value: string) {
    console.log('>> ' + value);
    this.value = value;
  }

}
