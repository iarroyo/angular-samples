export abstract class CComponent {

  protected value: string;

  constructor(value: string) {
    console.log('>> ' + value);
    this.value = value;
  }

}
