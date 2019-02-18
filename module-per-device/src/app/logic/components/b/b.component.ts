export abstract class BComponent {

  protected value: string;

  constructor(value: string) {
    console.log('>> ' + value);
    this.value = value;
  }

}
