export abstract class AComponent {

  protected value: string;

  constructor(value: string) {
    console.log('>> ' + value);
    this.value = value;
  }

}
